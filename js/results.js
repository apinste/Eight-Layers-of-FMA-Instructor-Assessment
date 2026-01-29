// Results Calculation and Display

class ResultsManager {
    constructor(scores) {
        this.scores = scores;
        this.strengths = [];
        this.development = [];
        this.categorizeScores();
    }

    categorizeScores() {
        Object.entries(this.scores).forEach(([layerId, data]) => {
            if (data.score >= 4.0) {
                this.strengths.push({ layerId, ...data });
            } else if (data.score < 4.0) {
                this.development.push({ layerId, ...data });
            }
        });
        
        // Sort development areas by priority (lowest score first)
        this.development.sort((a, b) => a.score - b.score);
    }

    displayResults() {
        this.renderChart();
        this.renderCongratulations();
        this.renderStrengths();
        this.renderDevelopmentAreas();
        this.renderActionSteps();
    }

renderCongratulations() {
        // Calculate overall average score
        const overallAverage = Object.values(this.scores).reduce((sum, layer) => sum + layer.score, 0) / Object.keys(this.scores).length;
        
        // Determine message based on overall performance
        let message = '';
        let messageClass = '';
        
        if (overallAverage >= 4.0) {
            messageClass = 'excellence-message';
            message = `
                <h2>Strong Results</h2>
                <p><strong>Overall Score: ${overallAverage.toFixed(1)}/5.0</strong></p>
                <p>You demonstrate strong foundational competence across multiple layers of instructor development. Your commitment to principle-based teaching, safe training environments, and cultural stewardship shows through.</p>
                <p>Continue refining your practice, training with your mentor, and serving your students with care and consistency.</p>
            `;
        } else if (overallAverage >= 3.0) {
            messageClass = 'progress-message';
            message = `
                <h2>Solid Foundation</h2>
                <p><strong>Overall Score: ${overallAverage.toFixed(1)}/5.0</strong></p>
                <p>You've built a solid foundation across multiple areas of instructor development. Your honest self-assessment shows maturity and readiness to grow.</p>
                <p>Focus on your development priorities below and continue training with intention.</p>
            `;
        } else {
            messageClass = 'journey-message';
            message = `
                <h2>Development Roadmap Identified</h2>
                <p><strong>Overall Score: ${overallAverage.toFixed(1)}/5.0</strong></p>
                <p>Your development priorities are clear, and honest self-assessment is the first step toward growth.</p>
                <p>Focus on one layer at a time. Train with your mentor. Document your progress. Revisit this assessment in 6 months.</p>
            `;
        }
        
        // Insert message at the top of results (after the chart)
        const resultsContainer = document.querySelector('.results-summary');
        const messageDiv = document.createElement('div');
        messageDiv.className = `congratulations-message ${messageClass}`;
        messageDiv.innerHTML = message;
        
        // Insert after the chart
        resultsContainer.parentNode.insertBefore(messageDiv, resultsContainer.nextSibling);
    }

    renderChart() {
        const ctx = document.getElementById('results-chart').getContext('2d');
        
        const labels = Object.values(this.scores).map(s => s.name);
        const data = Object.values(this.scores).map(s => s.score);
        
        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Your Score',
                    data: data,
                    backgroundColor: 'rgba(139, 0, 0, 0.2)',
                    borderColor: 'rgba(139, 0, 0, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(139, 0, 0, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(139, 0, 0, 1)'
                }]
            },
            options: {
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 5,
                        ticks: {
                            stepSize: 1
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }

    renderStrengths() {
        const container = document.getElementById('strengths-list');
        container.innerHTML = '';
        
        if (this.strengths.length === 0) {
            container.innerHTML = '<p>Continue building all foundational layers. Every area shows opportunity for growth.</p>';
            return;
        }
        
        this.strengths.forEach(strength => {
            const div = document.createElement('div');
            div.className = 'layer-result strength';
            div.innerHTML = `
                <h3>Layer ${strength.layerId}: ${strength.name}</h3>
                <p class="layer-score">Score: ${strength.score.toFixed(1)}/5.0</p>
                <p>${strength.description}</p>
            `;
            container.appendChild(div);
        });
    }

    renderDevelopmentAreas() {
        const container = document.getElementById('development-list');
        container.innerHTML = '';
        
        if (this.development.length === 0) {
            document.getElementById('development-section').style.display = 'none';
            return;
        }
        
        this.development.forEach((area, index) => {
            const div = document.createElement('div');
            div.className = 'layer-result development';
            
            let priority = '';
            if (index === 0) priority = ' - <strong>Priority 1</strong>';
            else if (index === 1) priority = ' - <strong>Priority 2</strong>';
            else if (index === 2) priority = ' - <strong>Priority 3</strong>';
            
            div.innerHTML = `
                <h3>Layer ${area.layerId}: ${area.name}${priority}</h3>
                <p class="layer-score">Score: ${area.score.toFixed(1)}/5.0</p>
                <p>${area.description}</p>
            `;
            container.appendChild(div);
        });
    }

    renderActionSteps() {
        const container = document.getElementById('action-steps-container');
        container.innerHTML = '';
        
        // Show action steps for top 3 development priorities
        const priorities = this.development.slice(0, 3);
        
        priorities.forEach((area, index) => {
            const actionPlan = this.getActionPlan(area.layerId);
            
            const section = document.createElement('div');
            section.className = 'priority-section';
            section.innerHTML = `
                <h3>Priority ${index + 1}: ${area.name} (${area.score.toFixed(1)}/5.0)</h3>
                ${actionPlan.context}
                <h4>Action Steps:</h4>
                <ol>
                    ${actionPlan.steps.map(step => `<li>${step}</li>`).join('')}
                </ol>
                ${actionPlan.resources ? `
                    <h4>Resources:</h4>
                    <ul>
                        ${actionPlan.resources.map(resource => `<li>${resource}</li>`).join('')}
                    </ul>
                ` : ''}
                <p class="timeline"><strong>Expected Timeline:</strong> ${actionPlan.timeline}</p>
            `;
            container.appendChild(section);
        });
        
        if (priorities.length === 0) {
            container.innerHTML = '<p>Great work! Focus on maintaining your strengths and continuing to refine all areas.</p>';
        }
    }

getActionPlan(layerId) {
        const actionPlans = {
            1: {
                context: '<p>Technical credibility is the foundation of everything. Without it, students won\'t trust your instruction. Movement quality must be earned through deliberate practice, not just accumulated mat time.</p>',
                steps: [
                    '<h4>Short-Term (1-3 months):</h4>',
                    '<strong>Record solo and partner drills weekly</strong> - Review mechanics, timing, and structure across weapon platforms',
                    '<strong>Focus on one variable at a time</strong> - Isolate footwork, weapon alignment, or striking mechanics per session',
                    '<strong>Practice slow-work to refine mechanics</strong> - Controlled drills reinforce structure and precision',
                    '<strong>Train regularly with your mentor</strong> - Get corrections on movement quality and tactical principles',
                    '<h4>Long-Term (6+ months):</h4>',
                    '<strong>Apply foundational principles across multiple weapons and ranges</strong> - Single stick → double stick → knife → espada y daga → empty hand',
                    '<strong>Integrate advanced drills, sparring, and flow exercises safely</strong> - Progress from controlled to dynamic application',
                    '<strong>Refine movement efficiency and tactical logic continuously</strong> - Study biomechanics, kinetics, and combat principles'
                ],
                resources: [
                    'Film yourself weekly and keep a training journal',
                    'Study biomechanics and kinetic chain principles',
                    'Cross-train: observe how other combat sports generate power',
                    'Review recordings of senior practitioners across weapon categories'
                ],
                timeline: '<strong>Short-term:</strong> 1-3 months to establish deliberate practice habits<br><strong>Long-term:</strong> 6+ months to see measurable improvement across all weapon platforms'
            },
            2: {
                context: '<p>Teaching is a separate skill from doing. You can execute perfectly but fail to transmit knowledge if you can\'t diagnose errors, communicate clearly, teach principles (not just techniques), or create psychologically safe learning environments.</p>',
                steps: [
                    '<h4>Short-Term (1-3 months):</h4>',
                    '<strong>Teach single concepts in short lessons</strong> - Focus on clarity and principle explanation (WHY, not just HOW)',
                    '<strong>Give concise, actionable corrections</strong> - Based on structure and timing (e.g., "elbow inside centerline" vs. "good job")',
                    '<strong>Document teaching case notes</strong> - What error? What correction? Did it work? What\'s next?',
                    '<strong>Use the explain → demo → drill → correct → refine cycle</strong> - Structure every lesson consistently',
                    '<h4>Long-Term (6+ months):</h4>',
                    '<strong>Develop multiple ways to explain concepts</strong> - Visual (show), kinesthetic (feel), analytical (explain why)',
                    '<strong>Create psychologically safe environments</strong> - Students experiment and fail safely without fear',
                    '<strong>Mentor junior instructors in teaching principles</strong> - Help others develop reflective practice',
                    '<strong>Adapt lessons to different learning styles</strong> - Some need biomechanics, others need to feel it'
                ],
                resources: [
                    'Keep a teaching journal with case notes',
                    'Record 5-minute micro-lessons and review for clarity',
                    'Observe skilled instructors and take notes',
                    'Study pedagogy: "The Inner Game of Tennis" by Timothy Gallwey'
                ],
                timeline: '<strong>Short-term:</strong> 1-3 months to establish teaching habits and case documentation<br><strong>Long-term:</strong> 6+ months to adapt to diverse learners and mentor others'
            },
            3: {
                context: '<p>Students need instructors who are steady, humble, and focused on their growth. Emotional maturity creates psychological safety and trust. Reject fear-based, pain-based, or "break them down to build them up" mentalities.</p>',
                steps: [
                    '<h4>Short-Term (1-3 months):</h4>',
                    '<strong>Reflect after each session</strong> - Write "What went well / What needs improvement"',
                    '<strong>Accept feedback without defensiveness</strong> - Say "thank you" and apply corrections immediately',
                    '<strong>Practice emotional regulation</strong> - Notice when you feel reactive; pause before responding',
                    '<strong>Reject fear-based training methods</strong> - Use science-backed conditioning and safe protocols',
                    '<h4>Long-Term (Ongoing):</h4>',
                    '<strong>Model humility and openness</strong> - Acknowledge mistakes as learning opportunities',
                    '<strong>Make science-based, safe training decisions</strong> - Stay current on conditioning and injury prevention',
                    '<strong>Deepen capacity for patience, foresight, and judgment</strong> - Maturity is a lifelong practice',
                    '<strong>Seek mentorship on professional conduct</strong> - Learn how to handle difficult situations with grace'
                ],
                resources: [
                    'Keep a reflective practice journal',
                    'Study modern sports science and conditioning',
                    'Consider working with a therapist or coach',
                    'Read: "Ego is the Enemy" by Ryan Holiday'
                ],
                timeline: '<strong>Short-term:</strong> 1-3 months to establish reflective habits<br><strong>Long-term:</strong> Ongoing - maturity deepens with experience'
            },
            4: {
                context: '<p>Retention problems often stem from misalignment. When students don\'t know what they\'re signing up for, they leave confused. FMA offers more than techniques - self-defense, tactical thinking, cultural connection, martial art forms and concepts.</p>',
                steps: [
                    '<h4>Short-Term (1-2 months):</h4>',
                    '<strong>Write a personal teaching philosophy</strong> - Highlight respect, safety, and principle-based learning',
                    '<strong>Clarify who your training is for</strong> - And who it\'s NOT for (be specific)',
                    '<strong>Introduce students to program values</strong> - What does your FMA program stand for beyond techniques?',
                    '<strong>Pre-screen new students</strong> - Have conversations to assess alignment before they join',
                    '<h4>Long-Term (Ongoing):</h4>',
                    '<strong>Deepen understanding of Philippine culture and history</strong> - Study pre-colonial Philippines, resistance movements, warrior traditions',
                    '<strong>Learn about Filipino values</strong> - <em>Kapwa, bayanihan, utang na loob, pakikisama, hiya</em> - and how they shape community',
                    '<strong>Continuously refine program mission</strong> - Based on experience and student feedback',
                    '<strong>Align curriculum with cultural and ethical principles</strong> - Not just technical content'
                ],
                resources: [
                    'Write and post your training philosophy visibly',
                    'Study Philippine history books and cultural studies',
                    'Attend Filipino cultural events or FMA retreats',
                    'Create new student intake questionnaire'
                ],
                timeline: '<strong>Short-term:</strong> 1-2 months to clarify mission<br><strong>Long-term:</strong> Ongoing cultural education and refinement'
            },
            5: {
                context: '<p>Students need to know where they are and where they\'re going. Teach progressively from foundational principles to advanced application. Combine clear curriculum with reliable operations and documented safety protocols.</p>',
                steps: [
                    '<h4>Short-Term (1-3 months):</h4>',
                    '<strong>Document progression from fundamental to advanced principles</strong> - Map 6-12 month journey across weapon platforms',
                    '<strong>Establish safety protocols for sparring and contact drills</strong> - Written, clear, non-negotiable',
                    '<strong>Maintain reliable class scheduling</strong> - Consistent times, clear communication, attendance tracking',
                    '<strong>Create student-facing roadmap</strong> - Show progression visually (beginner → intermediate → advanced)',
                    '<h4>Long-Term (6+ months):</h4>',
                    '<strong>Refine curriculum pacing and progression logic</strong> - Through reflection, student feedback, and mentorship',
                    '<strong>Update operational systems for efficiency</strong> - Automate where possible, streamline communication',
                    '<strong>Integrate milestone assessments</strong> - Measure principle understanding, not just technique memorization',
                    '<strong>Work with mentor to refine delivery</strong> - Get feedback on structure and pacing'
                ],
                resources: [
                    'FMA curriculum design templates',
                    'Safety protocol checklists for weapon training',
                    'Student progress tracking spreadsheets',
                    'Communication tools: WhatsApp, Discord, Google Sheets'
                ],
                timeline: '<strong>Short-term:</strong> 1-3 months to establish systems<br><strong>Long-term:</strong> 6+ months to refine and scale'
            },
            6: {
                context: '<p>Students stay when they feel they belong. Community is built through intentional stewardship, respect, and social skills. Lineage culture is transmitted through modeling, not just talking about it.</p>',
                steps: [
                    '<h4>Short-Term (1-3 months):</h4>',
                    '<strong>Model respect, humility, and culturally-informed behavior</strong> - Lead by example during all interactions',
                    '<strong>Encourage peer support and mentorship</strong> - Pair senior students with newer ones',
                    '<strong>Facilitate simple community-building practices</strong> - Group drills, small challenges, post-training discussions',
                    '<strong>Prioritize social skills and respectful communication</strong> - Make it part of training culture',
                    '<h4>Long-Term (6+ months):</h4>',
                    '<strong>Develop a strong, values-based community</strong> - Where students genuinely support one another',
                    '<strong>Integrate cultural lessons and lineage history</strong> - Share Filipino values and FMA heritage regularly',
                    '<strong>Mentor senior students to lead initiatives</strong> - Empower them to model program culture',
                    '<strong>Attend cultural events and retreats</strong> - Deepen your own cultural understanding'
                ],
                resources: [
                    'Community-building activity ideas for martial arts',
                    'Senior student mentorship structure templates',
                    'Lineage history and cultural resources',
                    'Filipino cultural organizations and FMA events'
                ],
                timeline: '<strong>Short-term:</strong> 1-3 months to establish culture<br><strong>Long-term:</strong> 6+ months to deepen and sustain'
            },
            7: {
                context: '<p>Not all students are meant to stay long-term. Understanding their goals (self-defense, fitness, cultural connection, mastery) helps you serve them better. Address misalignment with compassion.</p>',
                steps: [
                    '<h4>Short-Term (1-2 months):</h4>',
                    '<strong>Conduct goal-setting conversations with each student</strong> - What do they want from training?',
                    '<strong>Clarify expectations and commitment levels</strong> - Be honest about what the program requires',
                    '<strong>Encourage students to track progress</strong> - Help them take ownership of their development',
                    '<strong>Address misalignment with compassion</strong> - No shame, guilt, or intimidation',
                    '<h4>Long-Term (Ongoing):</h4>',
                    '<strong>Cultivate self-directed, responsible practitioners</strong> - Who understand their role in community',
                    '<strong>Let go gracefully when needed</strong> - Some students will leave; that\'s natural and okay',
                    '<strong>Promote values-driven participation</strong> - Curiosity, respect, stewardship (not just toughness)',
                    '<strong>Train with mentor on student psychology</strong> - Learn to identify readiness and alignment'
                ],
                resources: [
                    'Student goal-setting worksheet',
                    'New student intake questions',
                    'Commitment level assessment framework',
                    'Scripts for compassionate misalignment conversations'
                ],
                timeline: '<strong>Short-term:</strong> 1-2 months to implement<br><strong>Long-term:</strong> Ongoing refinement and practice'
            },
            8: {
                context: '<p>Leadership isn\'t something you claim - it\'s recognized by students when you embody competence, care, and consistency across all layers. Students should respect you because of your consistency and competence - not fear or dominance.</p>',
                steps: [
                    '<h4>Short-Term (1-3 months):</h4>',
                    '<strong>Lead by example consistently</strong> - Practice, demonstrate, and explain principles reliably',
                    '<strong>Serve students through guidance and feedback</strong> - Not authority or dominance',
                    '<strong>Continue mentorship with senior instructors</strong> - Even advanced practitioners need ongoing guidance',
                    '<strong>Model humility and continuous learning</strong> - Let students see you train and refine',
                    '<h4>Long-Term (Ongoing):</h4>',
                    '<strong>Embody stewardship and competence across all layers</strong> - Technical, teaching, maturity, culture',
                    '<strong>Mentor others in reflective practice</strong> - Help newer instructors develop self-awareness',
                    '<strong>Recognize leadership as a product of excellence</strong> - Humility, consistency, and community service',
                    '<strong>Strengthen all foundational layers continuously</strong> - Leadership emerges when all eight are strong'
                ],
                resources: [
                    'Re-take this assessment every 6 months to track growth',
                    'Study examples of servant leadership in FMA lineages',
                    'Seek ongoing mentorship from senior practitioners',
                    'Contribute to FMA community through teaching, organizing, or cultural preservation'
                ],
                timeline: '<strong>Short-term:</strong> 1-3 months to establish servant-leadership habits<br><strong>Long-term:</strong> Ongoing - leadership is the outcome of sustained excellence'
            }
        };
        
        return actionPlans[layerId] || {
            context: '<p>Focus on building this foundational layer.</p>',
            steps: ['Revisit the questions in this section and identify specific areas to develop'],
            timeline: 'Ongoing'
        };
    }
