// Quiz Logic and State Management

class QuizManager {
    constructor() {
        this.currentLayerIndex = 0;
        this.currentQuestionIndex = 0;
        this.answers = {};
        this.init();
    }

    init() {
        // Show intro screen first
        this.showScreen('intro-screen');
        
        // Event listeners
        document.getElementById('start-btn').addEventListener('click', () => this.startQuiz());
        document.getElementById('prev-btn').addEventListener('click', () => this.previousQuestion());
        document.getElementById('next-btn').addEventListener('click', () => this.nextQuestion());
        document.getElementById('restart-btn').addEventListener('click', () => this.restartQuiz());
        document.getElementById('print-btn').addEventListener('click', () => window.print());
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    }

    startQuiz() {
        this.showScreen('quiz-screen');
        this.renderQuestion();
    }

    getCurrentLayer() {
        return assessmentData.layers[this.currentLayerIndex];
    }

    getCurrentQuestion() {
        const layer = this.getCurrentLayer();
        return layer.questions[this.currentQuestionIndex];
    }

    getTotalQuestions() {
        return assessmentData.layers.reduce((total, layer) => total + layer.questions.length, 0);
    }

    getCurrentQuestionNumber() {
        let questionNumber = 0;
        for (let i = 0; i < this.currentLayerIndex; i++) {
            questionNumber += assessmentData.layers[i].questions.length;
        }
        questionNumber += this.currentQuestionIndex + 1;
        return questionNumber;
    }

    updateProgress() {
        const currentQ = this.getCurrentQuestionNumber();
        const totalQ = this.getTotalQuestions();
        const percentage = (currentQ / totalQ) * 100;
        
        document.getElementById('progress-fill').style.width = percentage + '%';
        document.getElementById('question-counter').textContent = `Question ${currentQ} of ${totalQ}`;
    }

    renderQuestion() {
        const layer = this.getCurrentLayer();
        const question = this.getCurrentQuestion();
        
        // Update header
        document.getElementById('layer-name').textContent = `Layer ${layer.id}: ${layer.name}`;
        this.updateProgress();
        
        // Render question
        const container = document.getElementById('question-container');
        container.innerHTML = '';
        
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        
        const questionText = document.createElement('div');
        questionText.className = 'question-text';
        questionText.textContent = question.text;
        
        questionDiv.appendChild(questionText);
        
        if (question.type === 'scale') {
            questionDiv.appendChild(this.renderScaleQuestion(question));
        } else if (question.type === 'yesno') {
            questionDiv.appendChild(this.renderYesNoQuestion(question));
        }
        
        container.appendChild(questionDiv);
        
        // Update navigation buttons
        document.getElementById('prev-btn').disabled = 
            this.currentLayerIndex === 0 && this.currentQuestionIndex === 0;
        
        const isLastQuestion = 
            this.currentLayerIndex === assessmentData.layers.length - 1 &&
            this.currentQuestionIndex === layer.questions.length - 1;
        
        document.getElementById('next-btn').textContent = isLastQuestion ? 'See Results' : 'Next';
    }

    renderScaleQuestion(question) {
        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'scale-options';
        
        for (let i = 1; i <= 5; i++) {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'scale-option';
            
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = question.id;
            input.value = i;
            input.id = `${question.id}-${i}`;
            
            // Check if already answered
            if (this.answers[question.id] === i) {
                input.checked = true;
            }
            
            // Auto-advance on selection
            input.addEventListener('change', () => {
                this.answers[question.id] = i;
                // Small delay so user sees their selection before advancing
                setTimeout(() => {
                    this.nextQuestion();
                }, 300);
            });
            
            const label = document.createElement('label');
            label.htmlFor = `${question.id}-${i}`;
            label.innerHTML = `<strong>${i}</strong><div class="scale-label">${question.scaleLabels[i-1]}</div>`;
            
            optionDiv.appendChild(input);
            optionDiv.appendChild(label);
            optionsDiv.appendChild(optionDiv);
        }
        
        return optionsDiv;
    }

    renderYesNoQuestion(question) {
        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'yesno-options';
        
        ['Yes', 'No', 'Unsure'].forEach((option, index) => {
            const value = index === 0 ? 5 : (index === 1 ? 1 : 3);
            
            const optionDiv = document.createElement('div');
            optionDiv.className = 'yesno-option';
            
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = question.id;
            input.value = value;
            input.id = `${question.id}-${option.toLowerCase()}`;
            
            // Check if already answered
            if (this.answers[question.id] === value) {
                input.checked = true;
            }
            
            // Auto-advance on selection
            input.addEventListener('change', () => {
                this.answers[question.id] = value;
                // Small delay so user sees their selection before advancing
                setTimeout(() => {
                    this.nextQuestion();
                }, 300);
            });
            
            const label = document.createElement('label');
            label.htmlFor = `${question.id}-${option.toLowerCase()}`;
            label.textContent = option;
            
            optionDiv.appendChild(input);
            optionDiv.appendChild(label);
            optionsDiv.appendChild(optionDiv);
        });
        
        return optionsDiv;
    }

    nextQuestion() {
        const layer = this.getCurrentLayer();
        const question = this.getCurrentQuestion();
        
        // Silently stay on current question if no answer (for manual "Next" clicks)
        if (!this.answers[question.id]) {
            return;
        }
        
        // Check if last question in layer
        if (this.currentQuestionIndex < layer.questions.length - 1) {
            this.currentQuestionIndex++;
            this.renderQuestion();
        } else {
            // Move to next layer or show results
            if (this.currentLayerIndex < assessmentData.layers.length - 1) {
                this.currentLayerIndex++;
                this.currentQuestionIndex = 0;
                this.renderQuestion();
            } else {
                // Quiz complete - show results
                this.showResults();
            }
        }
    }

    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.renderQuestion();
        } else if (this.currentLayerIndex > 0) {
            this.currentLayerIndex--;
            const previousLayer = this.getCurrentLayer();
            this.currentQuestionIndex = previousLayer.questions.length - 1;
            this.renderQuestion();
        }
    }

    calculateLayerScores() {
        const scores = {};
        
        assessmentData.layers.forEach(layer => {
            let totalScore = 0;
            let questionCount = 0;
            
            layer.questions.forEach(question => {
                if (this.answers[question.id] !== undefined) {
                    let score = this.answers[question.id];
                    
                    // Reverse score if needed
                    if (question.reverse) {
                        score = 6 - score;
                    }
                    
                    totalScore += score;
                    questionCount++;
                }
            });
            
            scores[layer.id] = {
                name: layer.name,
                description: layer.description,
                score: questionCount > 0 ? totalScore / questionCount : 0,
                rawScore: totalScore,
                questionCount: questionCount
            };
        });
        
        return scores;
    }

    showResults() {
        this.showScreen('results-screen');
        const scores = this.calculateLayerScores();
        
        // Generate results display
        const resultsManager = new ResultsManager(scores);
        resultsManager.displayResults();
    }

    restartQuiz() {
        this.currentLayerIndex = 0;
        this.currentQuestionIndex = 0;
        this.answers = {};
        this.showScreen('intro-screen');
    }
}

// Initialize quiz when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new QuizManager();
});
