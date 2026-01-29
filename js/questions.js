// Eight Layers FMA Instructor Assessment - Questions Database

const assessmentData = {
    layers: [
        {
            id: 1,
            name: "Technical Skill & Fundamentals",
            description: "Mastery, safety, precision, and reliability",
            questions: [
                {
                    id: "tech-1",
                    text: "I can execute every technique I teach with consistent precision",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
                },
                {
                    id: "tech-2",
                    text: "I actively train (not just teach) at least 3 hours per week",
                    type: "yesno"
                },
                {
                    id: "tech-3",
                    text: "I can identify biomechanical errors in student movement",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
                },
                {
                    id: "tech-4",
                    text: "I seek feedback or correction from senior instructors regularly (at least monthly)",
                    type: "yesno"
                },
                {
                    id: "tech-5",
                    text: "Students rarely get injured in my classes due to my instruction",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
                },
                {
                    id: "tech-6",
                    text: "I can demonstrate techniques safely without risking injury to myself or students",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
                }
            ]
        },
        {
            id: 2,
            name: "Teaching Ability",
            description: "Clear delivery, feedback, pacing, attention to individual needs",
            questions: [
                {
                    id: "teach-1",
                    text: "I can explain the same concept in multiple ways for different learners",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
                },
                {
                    id: "teach-2",
                    text: "I give specific, actionable feedback (not just 'good job' or 'try again')",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
                },
                {
                    id: "teach-3",
                    text: "I can diagnose WHY a student is struggling (physical limitation, mental block, misunderstanding, etc.)",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
                },
                {
                    id: "teach-4",
                    text: "I adjust my teaching pace based on student comprehension",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
                },
                {
                    id: "teach-5",
                    text: "I have studied pedagogy, teaching methodology, or learning theory",
                    type: "yesno"
                },
                {
                    id: "teach-6",
                    text: "I provide individual attention to students, not just group instruction",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
                }
            ]
        },
        {
            id: 3,
            name: "Maturity & Judgment",
            description: "Emotional regulation, consistent decision-making, prioritizing student growth",
            questions: [
                {
                    id: "maturity-1",
                    text: "I stay calm and composed when students are frustrated or challenge me",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
                },
                {
                    id: "maturity-2",
                    text: "I prioritize student growth over proving my own skill or knowledge",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
                },
                {
                    id: "maturity-3",
                    text: "I openly admit when I don't know something or have made a mistake",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
                },
                {
                    id: "maturity-4",
                    text: "I regulate my emotions during class (never lose composure or lash out)",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
                },
                {
                    id: "maturity-5",
                    text: "I have done personal development work (therapy, coaching, mentorship, spiritual practice)",
                    type: "yesno"
                },
                {
                    id: "maturity-6",
                    text: "I make consistent, thoughtful decisions rather than reactive or impulsive ones",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
                }
            ]
        },
        {
            id: 4,
            name: "Program Identity & Mission",
            description: "Clarity on who the training is for, what it provides, and what it does not",
            questions: [
                {
                    id: "identity-1",
                    text: "I can clearly state who my training is for (and who it's NOT for)",
                    type: "yesno"
                },
                {
                    id: "identity-2",
                    text: "New students understand what they're signing up for before joining",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
                },
                {
                    id: "identity-3",
                    text: "I have a written training philosophy or mission statement",
                    type: "yesno"
                },
                {
                    id: "identity-4",
                    text: "I regularly communicate program values and philosophy to students",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
                },
                {
                    id: "identity-5",
                    text: "Students who leave often cite misalignment with their personal goals or expectations",
                    type: "yesno",
                    reverse: true
                },
                {
                    id: "identity-6",
                    text: "I have a pre-screening or intake process for new students",
                    type: "yesno"
                }
            ]
        },
        {
            id: 5,
            name: "Curriculum & Operations",
            description: "Logical progression, milestones, AND systems for consistent delivery",
            questions: [
                {
                    id: "curriculum-1",
                    text: "I have a documented curriculum with clear progression (not just in my head)",
                    type: "yesno"
                },
                {
                    id: "curriculum-2",
                    text: "Students know where they are in their development and what comes next",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
                },
                {
                    id: "curriculum-3",
                    text: "I have defined milestones or benchmarks for student progress",
                    type: "yesno"
                },
                {
                    id: "curriculum-4",
                    text: "I review and update my curriculum based on student outcomes",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
                },
                {
                    id: "operations-1",
                    text: "Classes start and end on time consistently",
                    type: "yesno"
                },
                {
                    id: "operations-2",
                    text: "I communicate schedule changes clearly and promptly (at least 24hrs notice)",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
                },
                {
                    id: "operations-3",
                    text: "I have systems in place for payments, registration, and logistics",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
                },
                {
                    id: "operations-4",
                    text: "I track attendance and follow up with students who miss multiple sessions",
                    type: "yesno"
                }
            ]
        },
        {
            id: 6,
            name: "Community & Culture (Stewardship)",
            description: "Fostering belonging, accountability, and care",
            questions: [
                {
                    id: "community-1",
                    text: "Students form friendships and support each other outside of class",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
                },
                {
                    id: "community-2",
                    text: "I facilitate community-building activities (not just technique drills)",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
                },
                {
                    id: "community-3",
                    text: "Students feel they belong to something larger than themselves",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
                },
                {
                    id: "community-4",
                    text: "I model the values I teach (humility, patience, respect, discipline)",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
                },
                {
                    id: "community-5",
                    text: "Senior students help mentor and support newer students",
                    type: "yesno"
                },
                {
                    id: "community-6",
                    text: "I create opportunities for students to contribute to the community (beyond just training)",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
                }
            ]
        },
        {
            id: 7,
            name: "Student Responsibility & Alignment",
            description: "Understanding student goals, motivations, and encouraging self-accountability",
            questions: [
                {
                    id: "alignment-1",
                    text: "I understand each student's personal goals and motivations for training",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
                },
                {
                    id: "alignment-2",
                    text: "I have conversations with students about their commitment level and expectations",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
                },
                {
                    id: "alignment-3",
                    text: "I encourage students to take ownership of their training (not just show up and be passive)",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
                },
                {
                    id: "alignment-4",
                    text: "I recognize when a student is misaligned with the program and address it directly",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
                },
                {
                    id: "alignment-5",
                    text: "I'm comfortable letting students go if they're not a good fit",
                    type: "yesno"
                },
                {
                    id: "alignment-6",
                    text: "Students who thrive in my program share similar values and commitment levels",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
                }
            ]
        },
        {
            id: 8,
            name: "Leadership (Emergent)",
            description: "Authority recognized through competence, care, and stewardship",
            questions: [
                {
                    id: "leadership-1",
                    text: "Students seek my guidance beyond just technical instruction",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
                },
                {
                    id: "leadership-2",
                    text: "Students respect me because of my consistency, not because I demand it",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
                },
                {
                    id: "leadership-3",
                    text: "I lead by example in all aspects (technical skill, behavior, values)",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
                },
                {
                    id: "leadership-4",
                    text: "Students voluntarily take on responsibilities to support the program",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
                },
                {
                    id: "leadership-5",
                    text: "I view leadership as service to students and community, not authority over them",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
                },
                {
                    id: "leadership-6",
                    text: "Students describe me as a teacher/guide/mentor, not just an instructor",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
                }
            ]
        }
    ]
};
