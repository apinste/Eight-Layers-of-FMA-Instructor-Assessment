// Eight Layers FMA Instructor Assessment - Questions Database

const assessmentData = {
    layers: [
        {
            id: 1,
            name: "Technical Skill & Fundamentals",
            description: "Mastery, safety, precision, and reliability across all weapon platforms and ranges",
            questions: [
                {
                    id: "tech-1",
                    text: "I understand the tactical principles and concepts behind techniques, rather than just mimicking movements",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                },
                {
                    id: "tech-2",
                    text: "I teach principle-based FMA (tactical concepts, geometry, timing, etc.) instead of presenting disconnected techniques.",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                },
                {
                    id: "tech-3",
                    text: "I can apply fundamental principles across multiple weapon platforms (stick, knife, sword, espada y daga, empty hand, etc.).",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                },
                {
                    id: "tech-4",
                    text: "I record, review, and analyze my training regularly to identify structural, timing, or technical issues.",
                    type: "yesno"
                },
                {
                    id: "tech-5",
                    text: "I train consistently with my mentor to ensure proper development and guidance.",
                    type: "yesno"
                },
                {
                    id: "tech-6",
                    text: "My movements demonstrate sound biomechanics, tactical logic, and adaptability.",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                }
            ]
        },
        {
            id: 2,
            name: "Teaching Ability",
            description: "Clear delivery, safe instruction, feedback, and principle-based teaching",
            questions: [
                {
                    id: "teach-1",
                    text: "I teach students to understand why techniques work, not just how to perform them.",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                },
                {
                    id: "teach-2",
                    text: "I provide specific, actionable corrections grounded in principles, mechanics, and tactical reasoning.",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                },
                {
                    id: "teach-3",
                    text: "I can diagnose why a student is struggling (structure, timing, fear, misunderstanding, conditioning, etc.) and adjust accordingly.",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                },
                {
                    id: "teach-4",
                    text: "I create a safe learning environment - mentally, emotionally, physically, and psychologically.",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                },
                {
                    id: "teach-5",
                    text: "I can present the same concept in multiple ways (visual, kinesthetic, analytical) to suit diverse learning styles.",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                },
                {
                    id: "teach-6",
                    text: "I document teaching notes, including errors, corrections, learning outcomes, and patterns for future improvement.",
                    type: "yesno"
                }
            ]
        },
        {
            id: 3,
            name: "Maturity & Judgment",
            description: "Emotional regulation, respect-based leadership, science-backed decision-making",
            questions: [
                {
                    id: "maturity-1",
                    text: "I use challenge, controlled discomfort, and realistic pressure intentionally to develop skill and resilience, without relying on fear or pain as the primary teacher.",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                },
                {
                    id: "maturity-2",
                    text: "I design and implement conditioning and training methods that are evidence-based, safe, and contextually relevant, avoiding outdated or injury-prone practices.",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                },
                {
                    id: "maturity-3",
                    text: "I accept feedback and corrections thoughtfully, using them to improve my teaching and practice without defensiveness.",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                },
                {
                    id: "maturity-4",
                    text: "I maintain composure and clarity when students are frustrated, resistant, or challenge my instruction, responding with patience and guidance.",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                },
                {
                    id: "maturity-5",
                    text: "I acknowledge gaps in my knowledge or mistakes openly, using them as opportunities for growth and modeling humility for students.",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                },
                {
                    id: "maturity-6",
                    text: "After each teaching session, I reflect on what went well, what could be improved, and how students responded, using notes or journaling to guide my development.",
                    type: "yesno"
                }
            ]
        },
        {
            id: 4,
            name: "Program Identity & Mission",
            description: "Clarity on purpose, cultural alignment, and values-based training",
            questions: [
                {
                    id: "identity-1",
                    text: "I can clearly articulate what FMA offers beyond techniques (self-defense, tactical thinking, cultural connection, physical development, martial concepts).",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                },
                {
                    id: "identity-2",
                    text: "I have a written training philosophy emphasizing respect, science, and community rather than fear or dominance.",
                    type: "yesno"
                },
                {
                    id: "identity-3",
                    text: "I have studied Philippine history and understand the cultural context of FMA.",
                    type: "yesno"
                },
                {
                    id: "identity-4",
                    text: "I understand Filipino values (kapwa, bayanihan, utang na loob, pakikisama, hiya) and how they shape community and training.",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                },
                {
                    id: "identity-5",
                    text: "I can clearly state who my training is for, and who it is not for.",
                    type: "yesno"
                },
                {
                    id: "identity-6",
                    text: "New students understand what they are committing to before joining the program.",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                }
            ]
        },
        {
            id: 5,
            name: "Curriculum & Operations",
            description: "Principle-based progression, safe training protocols, and reliable systems",
            questions: [
                {
                    id: "curriculum-1",
                    text: "My curriculum progresses from foundational principles to advanced application, avoiding random or disconnected techniques.",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                },
                {
                    id: "curriculum-2",
                    text: "Students understand the progression across weapon platforms (stick → knife → sword → empty hand, etc.) and tactical ranges.",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                },
                {
                    id: "curriculum-3",
                    text: "I have documented safety protocols for sparring, contact drills, and weapon training.",
                    type: "yesno"
                },
                {
                    id: "curriculum-4",
                    text: "I have defined milestones that measure understanding of principles, not just technique memorization.",
                    type: "yesno"
                },
                {
                    id: "operations-1",
                    text: "Classes start and end consistently on time.",
                    type: "yesno"
                },
                {
                    id: "operations-2",
                    text: "I communicate schedule changes clearly and promptly.",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                },
                {
                    id: "operations-3",
                    text: "I have systems for attendance, payments, and communication that function reliably.",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                },
                {
                    id: "operations-4",
                    text: "I track attendance and follow up with students who miss multiple sessions.",
                    type: "yesno"
                }
            ]
        },
        {
            id: 6,
            name: "Community & Culture (Stewardship)",
            description: "Fostering respect, social skills, belonging, and cultural transmission",
            questions: [
                {
                    id: "community-1",
                    text: "I prioritize social skills and respectful communication in the training space.",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                },
                {
                    id: "community-2",
                    text: "I actively support peers and newer students, not just advanced ones.",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                },
                {
                    id: "community-3",
                    text: "I model humility, respect, and the values I teach.",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                },
                {
                    id: "community-4",
                    text: "Students form friendships and support each other, creating a collaborative community rather than just competitors.",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                },
                {
                    id: "community-5",
                    text: "I teach cultural context, lineage history, and Filipino values, not just techniques.",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                },
                {
                    id: "community-6",
                    text: "Senior students help mentor and support newer students proactively.",
                    type: "yesno"
                }
            ]
        },
        {
            id: 7,
            name: "Student Responsibility & Alignment",
            description: "Understanding goals, fostering ownership, and recognizing fit",
            questions: [
                {
                    id: "alignment-1",
                    text: "I have goal-setting conversations with students about self-defense, fitness, martial mastery, cultural connection, and tactics.",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                },
                {
                    id: "alignment-2",
                    text: "I understand each student’s commitment level and expectations.",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                },
                {
                    id: "alignment-3",
                    text: "I encourage students to take ownership of their training, set goals, track progress, and ask questions.",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                },
                {
                    id: "alignment-4",
                    text: "I address misalignment directly with compassion, not shame or intimidation.",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                },
                {
                    id: "alignment-5",
                    text: "I am comfortable letting students go if they are not a good fit, without guilt or pressure.",
                    type: "yesno"
                },
                {
                    id: "alignment-6",
                    text: "Students who thrive in my program share values of respect, curiosity, and community, not just toughness or aggression.",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                }
            ]
        },
        {
            id: 8,
            name: "Leadership (Emergent)",
            description: "Authority recognized through competence, care, respect, and science-based practice",
            questions: [
                {
                    id: "leadership-1",
                    text: "Students seek my guidance beyond technical instruction because they trust my judgment and character.",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                },
                {
                    id: "leadership-2",
                    text: "Students respect me for consistency, competence, and integrity, not fear or dominance.",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                },
                {
                    id: "leadership-3",
                    text: "I view leadership as stewardship and service, not authority or control.",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                },
                {
                    id: "leadership-4",
                    text: "I continue training with my mentor regularly, even as an advanced practitioner or instructor.",
                    type: "yesno"
                },
                {
                    id: "leadership-5",
                    text: "I model continuous improvement and humility; students see me learning and refining my skills.",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                },
                {
                    id: "leadership-6",
                    text: "Students voluntarily take on responsibilities to support the program because they feel ownership, not obligation.",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                }
            ]
        }
    ]
};
