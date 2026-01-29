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
                    text: "I understand the tactical principles and concepts behind techniques (not just mimicking movements or collecting techniques)",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                },
                {
                    id: "tech-2",
                    text: "I teach principle-based FMA (tactical concepts, geometry, timing) rather than just a collection of techniques",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                },
                {
                    id: "tech-3",
                    text: "I can apply fundamental principles across multiple weapon platforms (single/double stick, knife, sword, espada y daga, empty hand)",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                },
                {
                    id: "tech-4",
                    text: "I film and analyze my training regularly to identify structural or timing issues",
                    type: "yesno"
                },
                {
                    id: "tech-5",
                    text: "I train with my mentor or senior practitioner regularly (not just teach)",
                    type: "yesno"
                },
                {
                    id: "tech-6",
                    text: "My movement demonstrates sound biomechanics, kinetic chain principles, and tactical logic",
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
                    text: "I can teach students to understand WHY techniques work (principles, geometry, biomechanics) not just HOW to do them",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                },
                {
                    id: "teach-2",
                    text: "I give specific, actionable corrections based on biomechanics and principles",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                },
                {
                    id: "teach-3",
                    text: "I can diagnose WHY a student is struggling (structure, timing, fear, misunderstanding, conditioning)",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                },
                {
                    id: "teach-4",
                    text: "I create a psychologically safe learning environment (students aren't afraid to make mistakes or ask questions)",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                },
                {
                    id: "teach-5",
                    text: "I can teach the same concept in multiple ways (visual, kinesthetic, analytical)",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                },
                {
                    id: "teach-6",
                    text: "I document teaching case notes (what error, what correction, did it work?)",
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
                    text: "I reject fear-based or pain-based training methods (I don't believe in 'breaking students down to build them up')",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                },
                {
                    id: "maturity-2",
                    text: "I use science-based conditioning and training methods (not outdated, injury-prone practices)",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                },
                {
                    id: "maturity-3",
                    text: "I accept feedback and corrections without defensiveness",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                },
                {
                    id: "maturity-4",
                    text: "I stay calm and composed when students are frustrated or challenge me",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                },
                {
                    id: "maturity-5",
                    text: "I openly admit when I don't know something or have made a mistake",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                },
                {
                    id: "maturity-6",
                    text: "I write reflective notes after teaching (what went well / what needs work)",
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
                    text: "I can clearly articulate what FMA offers beyond just techniques (self-defense, tactical thinking, cultural connection, physical development, martial art forms and concepts)",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                },
                {
                    id: "identity-2",
                    text: "I have a written training philosophy that emphasizes respect, science, and community (not fear or dominance)",
                    type: "yesno"
                },
                {
                    id: "identity-3",
                    text: "I have studied Philippine history and understand the cultural context of FMA",
                    type: "yesno"
                },
                {
                    id: "identity-4",
                    text: "I understand Filipino values (kapwa, bayanihan, utang na loob, pakikisama, hiya) and how they shape community",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                },
                {
                    id: "identity-5",
                    text: "I can clearly state who my training is for (and who it's NOT for)",
                    type: "yesno"
                },
                {
                    id: "identity-6",
                    text: "New students understand what they're signing up for before joining",
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
                    text: "My curriculum teaches progressively from foundational principles to advanced application (not just random techniques)",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                },
                {
                    id: "curriculum-2",
                    text: "Students understand the progression across weapon platforms (stick → knife → sword → empty hand, etc.) and tactical ranges",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                },
                {
                    id: "curriculum-3",
                    text: "I have documented safety protocols for sparring, contact drills, and weapon training",
                    type: "yesno"
                },
                {
                    id: "curriculum-4",
                    text: "I have defined milestones that measure understanding of principles (not just technique memorization)",
                    type: "yesno"
                },
                {
                    id: "operations-1",
                    text: "Classes start and end on time consistently",
                    type: "yesno"
                },
                {
                    id: "operations-2",
                    text: "I communicate schedule changes clearly and promptly",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                },
                {
                    id: "operations-3",
                    text: "I have systems in place for attendance tracking, payments, and communication",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
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
            description: "Fostering respect, social skills, belonging, and cultural transmission",
            questions: [
                {
                    id: "community-1",
                    text: "I prioritize social skills and respectful communication in my training space",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                },
                {
                    id: "community-2",
                    text: "I actively support peers and newer students during training (not just focus on advanced students)",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                },
                {
                    id: "community-3",
                    text: "I model humility, respect, and the values I teach",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                },
                {
                    id: "community-4",
                    text: "Students form friendships and support each other (training creates community, not just competitors)",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                },
                {
                    id: "community-5",
                    text: "I teach cultural context, lineage history, and Filipino values (not just techniques)",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                },
                {
                    id: "community-6",
                    text: "Senior students help mentor and support newer students",
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
                    text: "I have goal-setting conversations with students (self-defense, fitness, martial art mastery, cultural connection, tactics)",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                },
                {
                    id: "alignment-2",
                    text: "I understand each student's commitment level and expectations",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                },
                {
                    id: "alignment-3",
                    text: "I encourage students to take ownership of their training (set goals, track progress, ask questions)",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                },
                {
                    id: "alignment-4",
                    text: "I address misalignment directly with compassion (not shame or intimidation)",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                },
                {
                    id: "alignment-5",
                    text: "I'm comfortable letting students go if they're not a good fit (I don't guilt or pressure them to stay)",
                    type: "yesno"
                },
                {
                    id: "alignment-6",
                    text: "Students who thrive in my program share values of respect, curiosity, and community (not just toughness or aggression)",
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
                    text: "Students seek my guidance beyond just technical instruction (they trust my judgment and character)",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                },
                {
                    id: "leadership-2",
                    text: "Students respect me because of consistency and competence (not because of fear or dominance)",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                },
                {
                    id: "leadership-3",
                    text: "I view leadership as stewardship and service (not authority or control)",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                },
                {
                    id: "leadership-4",
                    text: "I continue training with my mentor regularly (even as an advanced practitioner or instructor)",
                    type: "yesno"
                },
                {
                    id: "leadership-5",
                    text: "I model continuous improvement and humility (students see me training, learning, and refining)",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                },
                {
                    id: "leadership-6",
                    text: "Students voluntarily take on responsibilities to support the program (because they feel ownership, not obligation)",
                    type: "scale",
                    scaleLabels: ["Strongly Disagree", "Disagree", "Unsure", "Agree", "Strongly Agree"]
                }
            ]
        }
    ]
};
