getActionPlan(layerId) {
        const actionPlans = {
            1: {
                context: '<p>Technical credibility is the foundation of everything. Without it, students won\'t trust your instruction. Movement quality must be earned through deliberate practice, not just accumulated mat time.</p>',
                steps: [
                    '<strong>Film yourself weekly</strong> - Record solo training and analyze structure, timing, and blade logic alignment',
                    '<strong>Practice slow-work to refine mechanics</strong> - Isolate one variable per session (structure, timing, or pressure)',
                    '<strong>Cross-check movement against blade logic principles</strong> - Ask "does this follow closing-the-gap logic?" for every technique',
                    '<strong>Seek monthly corrections from senior practitioners</strong> - Identify your own errors before your instructor does',
                    '<strong>Study biomechanics and kinetic chain</strong> - Understand how power transfers from feet → hips → shoulders → weapon',
                    '<strong>Increase deliberate practice reps</strong> - Quality over quantity; train with intention, not just repetition'
                ],
                resources: [
                    'Study blade logic and footwork fundamentals',
                    'Analyze boxing science and combat biomechanics',
                    'Cross-train: observe how other combat sports generate power',
                    'Review recordings of senior practitioners and compare movement quality'
                ],
                timeline: '3-6 months to see measurable improvement in structure and timing'
            },
            2: {
                context: '<p>Teaching is a separate skill from doing. You can execute perfectly but fail to transmit knowledge if you can\'t diagnose errors, communicate clearly, or adapt to different learners.</p>',
                steps: [
                    '<strong>Use the explain → demo → drill → correct → refine cycle</strong> - Structure every lesson with this progression',
                    '<strong>Keep corrections to one sentence</strong> - "Elbow stays inside your centerline" instead of long explanations',
                    '<strong>Practice 5-minute micro-lessons</strong> - Record yourself teaching a single drill and review for clarity',
                    '<strong>Document teaching case notes</strong> - What error did you observe? What correction did you apply? Did it work?',
                    '<strong>Develop multiple ways to explain the same concept</strong> - Visual (show), kinesthetic (feel), analytical (explain why)',
                    '<strong>Teach to different learning styles</strong> - Some students need biomechanical explanations, others need to feel it in their body'
                ],
                resources: [
                    'Keep a teaching journal with case notes',
                    'Observe skilled instructors and take notes on their teaching methods',
                    'Study pedagogy: "The Inner Game of Tennis" by Timothy Gallwey',
                    'Practice giving corrections during sparring or flow drills'
                ],
                timeline: '2-4 months to see improvement in student comprehension and retention'
            },
            3: {
                context: '<p>Students need instructors who are steady, humble, and focused on their growth. Emotional maturity creates psychological safety and trust. Without it, technical skill and teaching ability are undermined.</p>',
                steps: [
                    '<strong>Write "What went well / What needs work" after each class</strong> - Build the habit of reflective practice',
                    '<strong>Accept feedback without defensiveness</strong> - When corrected, say "thank you" and apply it immediately',
                    '<strong>Practice emotional regulation</strong> - Notice when you feel reactive or defensive, and pause before responding',
                    '<strong>Admit mistakes openly</strong> - Model humility by acknowledging when you\'re wrong or don\'t know something',
                    '<strong>Prioritize student growth over ego</strong> - Ask yourself: "Is this about helping them or proving myself?"',
                    '<strong>Strengthen emotional intelligence</strong> - Learn to read student frustration, fear, or confusion and respond appropriately'
                ],
                resources: [
                    'Consider working with a therapist, coach, or mentor',
                    'Practice mindfulness or meditation to improve self-awareness',
                    'Read: "Ego is the Enemy" by Ryan Holiday',
                    'Seek feedback from trusted students or peers: "How do I show up as an instructor?"'
                ],
                timeline: 'Ongoing - maturity is a lifelong practice that deepens with experience'
            },
            4: {
                context: '<p>Retention problems often stem from misalignment. When students don\'t know what they\'re signing up for, they leave confused. Cultural and lineage alignment also matters - students need to understand what your program represents.</p>',
                steps: [
                    '<strong>Write your training philosophy</strong> - Who is this for? What do you value? What won\'t you compromise on?',
                    '<strong>Define lineage and cultural alignment</strong> - Make it clear what tradition you represent and why it matters',
                    '<strong>Pre-screen new students</strong> - Have a conversation before they join to assess goal alignment',
                    '<strong>Communicate values regularly</strong> - Remind students what the program stands for (not just techniques)',
                    '<strong>Learn correct terminology and cultural context</strong> - Understand the history, philosophy, and ethos of your lineage',
                    '<strong>Be willing to say no</strong> - Not every student is a good fit, and that\'s okay'
                ],
                resources: [
                    'Study your lineage\'s history and philosophy',
                    'Create a new student intake questionnaire',
                    'Examples of clear training philosophies from FMA schools',
                    'Attend cultural or lineage-focused seminars'
                ],
                timeline: '1-2 weeks to clarify, ongoing to implement and refine'
            },
            5: {
                context: '<p>Students need to know where they are and where they\'re going. Clear curriculum structure combined with reliable operations creates trust and reduces confusion. Chaos in scheduling or logistics erodes credibility.</p>',
                steps: [
                    '<strong>Document your curriculum</strong> - Map out 6-12 month progression with clear milestones (beginner → intermediate → advanced)',
                    '<strong>Create a student-facing roadmap</strong> - Visual guide showing what students will learn and when',
                    '<strong>Track attendance and follow up</strong> - Reach out after 2+ missed sessions to check in',
                    '<strong>Build onboarding processes</strong> - How do new students learn your class structure, expectations, and culture?',
                    '<strong>Review curriculum quarterly</strong> - Assess what\'s working, what\'s not, and adjust',
                    '<strong>Systemize operations</strong> - Consistent class times, clear communication channels, payment systems that work'
                ],
                resources: [
                    'FMA curriculum design templates',
                    'Student progress tracking spreadsheets',
                    'Class communication protocols (WhatsApp, Discord, email)',
                    'Recommended tools: Google Sheets for attendance, Stripe for payments'
                ],
                timeline: '3-4 weeks to establish systems, ongoing to maintain and refine'
            },
            6: {
                context: '<p>Students stay when they feel they belong. Community is built through intentional stewardship, not just training together. Lineage culture is transmitted through modeling, not just talking about it.</p>',
                steps: [
                    '<strong>Support peers during training</strong> - Help newer students, encourage struggling students, celebrate progress',
                    '<strong>Model humility and respect</strong> - Demonstrate the values you teach in how you conduct yourself',
                    '<strong>Facilitate community-building</strong> - Post-class gatherings, group challenges, seminars, demonstrations',
                    '<strong>Encourage peer mentorship</strong> - Pair senior students with newer ones',
                    '<strong>Protect lineage integrity</strong> - Ensure training aligns with the cultural and technical standards of your lineage',
                    '<strong>Teach cultural context in classes</strong> - Share history, philosophy, and values (not just techniques)'
                ],
                resources: [
                    'Community-building activity ideas for martial arts schools',
                    'Senior student mentorship structure templates',
                    'Lineage history and cultural resources',
                    'Event planning checklists for seminars or gatherings'
                ],
                timeline: '1-3 months to establish culture, ongoing to maintain and deepen'
            },
            7: {
                context: '<p>Not all students are meant to stay long-term. Understanding their goals and commitment level helps you serve them better and know when to let go. Self-accountability must be cultivated in students, not imposed.</p>',
                steps: [
                    '<strong>Have goal-setting conversations</strong> - Ask students what they want from training (fitness? self-defense? mastery? competition?)',
                    '<strong>Assess commitment levels</strong> - Understand who\'s here for life vs. trying it out vs. here for a season',
                    '<strong>Encourage self-accountability</strong> - Students should track their own progress, set personal goals, and take ownership',
                    '<strong>Address misalignment directly</strong> - If someone isn\'t thriving, have an honest conversation',
                    '<strong>Let go gracefully</strong> - Some students will leave, and that\'s natural. Wish them well.',
                    '<strong>Cultivate serious practitioners</strong> - Invest most energy in aligned, committed students who share your values'
                ],
                resources: [
                    'Student goal-setting worksheet',
                    'New student intake questions to assess alignment',
                    'Commitment level assessment framework',
                    'Scripts for difficult conversations about misalignment'
                ],
                timeline: '1-2 months to implement, ongoing practice and refinement'
            },
            8: {
                context: '<p>Leadership isn\'t something you claim - it\'s recognized by students when you embody competence, care, and consistency across all layers. It\'s the outcome of doing the work, not the starting point.</p>',
                steps: [
                    '<strong>Lead by example in all aspects</strong> - Movement quality, teaching clarity, professionalism, humility, continuous learning',
                    '<strong>View leadership as stewardship, not authority</strong> - You\'re a caretaker of lineage, culture, and community',
                    '<strong>Seek feedback proactively</strong> - Ask trusted students and peers: "How can I serve this community better?"',
                    '<strong>Model continuous improvement</strong> - Let students see you training, learning, and refining your craft',
                    '<strong>Mentor others in reflective practice</strong> - Help newer instructors develop self-awareness and teaching skill',
                    '<strong>Strengthen all foundational layers</strong> - Leadership emerges when technical skill, teaching ability, maturity, program clarity, operations, community stewardship, and student alignment are all strong'
                ],
                resources: [
                    'Re-take this assessment in 6 months to track your growth',
                    'Study examples of servant leadership in FMA lineages',
                    'Seek mentorship from senior practitioners',
                    'Contribute to your lineage or FMA community through teaching, writing, or organizing'
                ],
                timeline: 'Ongoing - leadership is the outcome of sustained excellence across all layers'
            }
        };
        
        return actionPlans[layerId] || {
            context: '<p>Focus on building this foundational layer.</p>',
            steps: ['Revisit the questions in this section and identify specific areas to develop'],
            timeline: 'Ongoing'
        };
    }
