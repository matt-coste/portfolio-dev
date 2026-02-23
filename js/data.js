/**
 * data.js — Central content file for the dev portfolio
 * Edit this file to add/update experiences, projects, education, skills
 */

const DATA = {

  // ── PERSONAL INFO ──────────────────────────────────────────
  personal: {
    name: 'Matt COSTE',
    name_header: 'MATT COSTE',
    titles: {
      en: ['Software Developer', 'UX/UI Designer', 'Photographer'],
      fr: ['Développeur Logiciel', 'Designer UX/UI', 'Photographe'],
    },
    summary: {
      en: 'Engineer passionate about crafting thoughtful digital experiences — I care equally about how things work and how they feel.',
      fr: 'Ingénieur passionné par la création d\'expériences numériques soignées — je me soucie autant de comment les choses fonctionnent que de la façon dont elles se ressentent.',
    },
    location: 'Toulouse · Full Remote',
    email: 'mc.mattcoste@gmail.com',
    photo: 'assets/about.jpg',
    photoPortfolio: 'https://matt-coste.github.io/portfolio-photo',
    links: {
      linkedin: 'https://linkedin.com/in/matt-coste',
      github: 'https://github.com/SkyZnox',
      figma: 'https://figma.com/@costematt',
      instagram: 'https://instagram.com/matt_cste',
    },
    cvs: {
      ats: {
        // One file per language — point to the right PDF for each
        en: { file: 'assets/cv-ats-en.pdf', size: '304 KB' },
        fr: { file: 'assets/cv-ats-fr.pdf', size: '307 KB' },
        label: { en: 'ATS Resume', fr: 'CV ATS' },
      },
      design: {
        // One file per language × format
        en: {
          pdf: { file: 'assets/coste-matt-cv-en.pdf', size: '9.94 MB' },
          png: { file: 'assets/coste-matt-cv-en.png', size: '5.84 MB' },
        },
        fr: {
          pdf: { file: 'assets/coste-matt-cv-fr.pdf', size: '10 MB' },
          png: { file: 'assets/coste-matt-cv-fr.png', size: '5.86 MB' },
        },
        label: { en: 'Design Resume', fr: 'CV Design' },
      },
    },
    hobbies: {
      en: [
        { icon: '📷', label: 'Photography', desc: 'Passionate and regular practice' },
        { icon: '🎬', label: 'Cinema & Audiovisual', desc: 'Film lover across all genres' },
        { icon: '🎵', label: 'Music', desc: 'Appreciating music from all generations' },
      ],
      fr: [
        { icon: '📷', label: 'Photographie', desc: 'Pratique passionnée et régulière' },
        { icon: '🎬', label: 'Cinéma & Audiovisuel', desc: 'Amateur de films tous genres' },
        { icon: '🎵', label: 'Musique', desc: 'Apprécie la musique de toutes générations' },
      ],
    },
    softSkills: {
      en: ['Curious & Creative', 'Strong design sensibility', 'Avid learner', 'Team player', 'Rigorous', 'Adaptable', 'Detail-oriented', 'Autonomous'],
      fr: ['Curieux & Créatif', 'Forte sensibilité design', 'Avide d\'apprendre', 'Travail d\'équipe', 'Rigoureux', 'Adaptable', 'Sens du détail', 'Autonome'],
    },
    stats: {
      en: [
        { value: '2+', label: 'Years of experience' },
        { value: '6+', label: 'Projects' },
        { value: '15+', label: 'Technologies' },
        { value: '1', label: 'Competitions won' },
      ],
      fr: [
        { value: '2+', label: 'Ans d\'expérience' },
        { value: '6+', label: 'Projets' },
        { value: '15+', label: 'Technologies' },
        { value: '1', label: 'Compétitions gagnées' },
      ],
    },
    graphExcludeTags: ['Git / GitHub', 'GitHub Actions (CI/CD)', 'HTML5', 'CSS', 'Markdown', 'Python', 'JavaScript', 'AI/ML', 'AI', 'RAG',
      'Scala', 'Rust', 'React', 'GitHub Pages'
    ],
  },

  // ── EDUCATION ───────────────────────────────────────────────
  education: [
    {
      id: 'cytech',
      institution: 'CY Tech',
      location: 'Pau, France',
      logo: 'assets/logos/cytech.png',
      degree: {
        en: 'Engineering Degree in Computer Science',
        fr: 'Titre d\'ingénieur informatique',
      },
      field: {
        en: 'Information Systems Engineering — Cloud Computing specialisation',
        fr: 'Génie des Systèmes d\'Information (GSI) — spécialisation Ingénierie du Cloud Computer (ICC)',
      },
      period: '2020 – 2025',
      highlights: {
        en: [
          'Cloud architecture and DevOps practices',
          'Full-stack development across multiple frameworks',
          'Agile project management methodology',
          'Multiple school projects',
        ],
        fr: [
          'Architecture cloud et pratiques DevOps',
          'Développement full-stack sur plusieurs frameworks',
          'Méthodologie de gestion de projet Agile',
          'Multiples projets scolaires',
        ],
      },
    },
    {
      id: 'sfsu',
      institution: 'San Francisco State University',
      location: 'San Francisco, CA, USA',
      logo: 'assets/logos/sfsu.png',
      degree: {
        en: 'International Semester — Computer Science Major',
        fr: 'Semestre international — Computer Science Major',
      },
      field: {
        en: 'Spring Semester 2024',
        fr: 'Spring Semester 2024',
      },
      period: '2024',
      highlights: {
        en: [
          'Computer Science courses in English',
          'Software ethics and professional responsibility',
          'International academic environment',
        ],
        fr: [
          'Cours d\'informatique en anglais',
          'Éthique informatique et responsabilité professionnelle',
          'Environnement académique international',
        ],
      },
    },
  ],

  // ── EXPERIENCES ─────────────────────────────────────────────
  // type: 'cdi' | 'cdd' | 'alternance' | 'stage'
  experiences: [
    {
      id: 'airfrance-cdi',
      company: 'Infotel · Air France',
      logo: 'assets/logos/airfrance.png',
      role: {
        en: 'Software Developer',
        fr: 'Développeur Logiciel',
      },
      type: 'cdi',
      location: 'Toulouse',
      period: { start: '2025-09', end: null },
      tags: ['Angular', 'Java', 'Spring Boot', 'PostgreSQL', 'Azure', 'GitHub Actions'],
      aspects: ['dev'],
      summary: {
        en: 'Software maintenance and evolution within Air France\'s internal application fleet — Angular frontend and Java/Spring Boot backend, with focus on LCM (Life Cycle Management) and security.',
        fr: 'Maintien en conditions opérationnelles et évolutions sur le parc applicatif interne d\'Air France — frontend Angular et backend Java/Spring Boot, avec focus sur le LCM (Life Cycle Management) et la sécurité.',
      },
      content: {
        dev: {
          en: {
            context: 'Mission within a major airline group, in a structured and demanding environment. Intervention on an internal application fleet composed mostly of web applications developed in Angular and Java/Spring Boot. Active participation in the LCM (Life Cycle Management) strategy aimed at reducing security vulnerabilities (CVE), ensuring application stability and longevity, optimising application costs, maintaining technical compatibility of software components, and guaranteeing no business impact during evolutions.',
            environment: ['Angular', 'Java', 'Spring Boot', 'PostgreSQL', 'Azure', 'Git', 'GitHub', 'GitHub Actions', 'Confluence', 'Jira'],
            sections: [
              {
                title: 'LCM — Maintenance & Version Upgrades',
                items: [
                  'Impact analysis & preparation of version upgrades',
                  'Analysis of technical dependencies and obsolete libraries',
                  'CVE analysis and security risk assessment',
                  'Prioritisation planning based on criticality',
                  'Major Angular version upgrades and dependency migration',
                  'Code adaptation to breaking changes and component refactoring',
                  'Spring Boot version upgrades and Maven dependency updates',
                  'Compatibility verification between applications',
                ],
              },
              {
                title: 'UI Quality Improvement',
                items: [
                  'Correction of display inconsistencies',
                  'Component harmonisation',
                  'Decision-making on internal design system colour usage to prioritise the best UX (contrast management)',
                  'Validation requests for new components needed to improve user experience',
                ],
              },
              {
                title: 'Testing & Deployment',
                items: [
                  'Development in local and dev environments',
                  'Deployment in staging environment and inter-application transmission verification',
                  'Batch execution monitoring',
                  'Collaboration with Business Owners (AMO) for functional validation',
                  'Release management via GitHub and CI/CD workflows with GitHub Actions',
                  'Production deployment and post-deployment monitoring',
                ],
              },
              {
                title: 'Application Evolution',
                items: [
                  'Ticket analysis in team, estimation and priority distribution',
                  'Deep technical analysis and frontend/backend development based on business needs',
                  'AMO validation and production deployment',
                ],
              },
            ],
          },
          fr: {
            context: 'Mission au sein d\'un grand groupe du secteur aérien, dans un environnement structuré et exigeant. Intervention sur un parc applicatif interne composé majoritairement d\'applications web développées en Angular et Java/Spring Boot. Participation active à la stratégie de LCM (Life Cycle Management) visant à réduire les vulnérabilités de sécurité (CVE), assurer la stabilité et la pérennité des applications, optimiser les coûts applicatifs, maintenir la compatibilité technique des briques logicielles, et garantir l\'absence d\'impact métier lors des évolutions.',
            environment: ['Angular', 'Java', 'Spring Boot', 'PostgreSQL', 'Azure', 'Git', 'GitHub', 'GitHub Actions', 'Confluence', 'Jira'],
            sections: [
              {
                title: 'LCM — Maintien & Montées de version',
                items: [
                  'Analyse d\'impact & préparation des montées de version',
                  'Analyse des dépendances techniques et bibliothèques obsolètes',
                  'Analyse des CVE et risques de sécurité',
                  'Planification et priorisation selon criticité',
                  'Montées de version majeures Angular et migration des dépendances',
                  'Adaptation du code aux breaking changes et refactorisation de composants',
                  'Montées de version Spring Boot et mise à jour des dépendances Maven',
                  'Vérification des compatibilités et communications entre applications',
                ],
              },
              {
                title: 'Amélioration de la qualité UI',
                items: [
                  'Correction d\'incohérences d\'affichage',
                  'Harmonisation de composants',
                  'Prise de décision sur l\'utilisation des nouvelles couleurs du design system interne afin de prioriser la meilleure expérience pour l\'utilisateur (gestion des contrastes)',
                  'Demande de validation d\'ajouts de composants nécessaires pour améliorer l\'expérience utilisateur',
                ],
              },
              {
                title: 'Tests & Déploiement',
                items: [
                  'Développement en environnement local et de dev',
                  'Déploiement en environnement de recette et vérifications des transmissions entre applications',
                  'Suivi de l\'exécution des batch',
                  'Collaboration avec les AMO pour la validation fonctionnelle métier',
                  'Gestion des releases via GitHub et workflows CI/CD avec GitHub Actions',
                  'Déploiement en production et suivi post-mise en production',
                ],
              },
              {
                title: 'Évolution des applications',
                items: [
                  'Analyse des tickets en équipe, chiffrage et distribution par priorité',
                  'Analyse technique poussée et développement frontend ou backend selon les besoins métier',
                  'Recettage par un AMO et déploiement en production',
                ],
              },
            ],
          },
        },
        ux: null, // No UX aspect for this experience
      },
    },
    {
      id: 'airfrance-alternance',
      company: 'Infotel · Air France',
      logo: 'assets/logos/airfrance.png',
      role: {
        en: 'Software Developer',
        fr: 'Développeur Logiciel',
      },
      type: 'alternance',
      location: 'Toulouse',
      period: { start: '2024-09', end: '2025-09' },
      tags: ['Angular', 'Java', 'Spring Boot', 'PostgreSQL', 'Azure'],
      aspects: ['dev'],
      summary: {
        en: 'Work-study contract within the same Air France mission — initial immersion in the LCM strategy and application maintenance.',
        fr: 'Contrat de professionnalisation dans la même mission Air France — immersion initiale dans la stratégie LCM et la maintenance applicative.',
      },
      content: {
        dev: {
          en: {
            context: 'Same mission context as the CDI — see above for full details. This was the work-study phase of the same engagement, covering the same technical scope with progressive autonomy increase.',
            environment: ['Angular', 'Java', 'Spring Boot', 'PostgreSQL', 'Azure', 'Git', 'GitHub', 'Confluence', 'Jira'],
            sections: [
              {
                title: 'Learning & Onboarding',
                items: [
                  'Onboarding on internal technical environment and processes',
                  'Progressive understanding of LCM strategy and its business stakes',
                  'First independent version upgrades with team supervision',
                  'Participation in code reviews and functional validations',
                ],
              },
            ],
          },
          fr: {
            context: 'Même contexte de mission que le CDI — voir ci-dessus pour les détails complets. Il s\'agissait de la phase en contrat de professionnalisation du même engagement, couvrant le même périmètre technique avec une montée progressive en autonomie.',
            environment: ['Angular', 'Java', 'Spring Boot', 'PostgreSQL', 'Azure', 'Git', 'GitHub', 'Confluence', 'Jira'],
            sections: [
              {
                title: 'Montée en compétences',
                items: [
                  'Onboarding sur l\'environnement technique interne et les processus',
                  'Compréhension progressive de la stratégie LCM et ses enjeux métier',
                  'Premières montées de version autonomes avec supervision de l\'équipe',
                  'Participation aux revues de code et validations fonctionnelles',
                ],
              },
            ],
          },
        },
        ux: null,
      },
    },
    {
      id: 'pleko',
      company: 'Pleko',
      logo: 'assets/logos/pleko.png',
      role: {
        en: 'Mobile Developer',
        fr: 'Développeur Mobile',
      },
      type: 'stage',
      location: 'Full Remote',
      period: { start: '2023-06', end: '2023-08' },
      tags: ['Flutter', 'Dart', 'Figma'],
      aspects: ['dev', 'ux'],
      summary: {
        en: 'Development of a professional mobile application in a startup environment — full remote, high autonomy. Design and development of an intuitive Flutter app following the existing client application.',
        fr: 'Développement d\'une application mobile professionnelle en environnement start-up — full remote, forte autonomie. Conception et développement d\'une app Flutter intuitive en suivant l\'application mobile cliente existante.',
      },
      content: {
        dev: {
          en: {
            context: 'Startup environment with strong autonomy and full remote collaboration. Goal: design and develop a performant, practical and intuitive mobile application for professionals, following the existing client mobile application.',
            environment: ['Flutter', 'Dart', 'Git', 'GitHub', 'Discord'],
            sections: [
              {
                title: 'Development',
                items: [
                  'Development of Flutter interfaces',
                  'Integration of visuals and Figma mockups',
                  'Use of brand guidelines (colours, icons, illustrations)',
                  'Basic authentication and Google/Facebook OAuth',
                  'Inter-application communication between professional and client apps',
                  'User feedback integration',
                ],
              },
            ],
          },
          fr: {
            context: 'Environnement start-up avec forte autonomie et collaboration en full remote. Objectif : concevoir et développer une application mobile performante, pratique et intuitive pour les professionnels en suivant l\'application mobile cliente existante.',
            environment: ['Flutter', 'Dart', 'Git', 'GitHub', 'Discord'],
            sections: [
              {
                title: 'Développement',
                items: [
                  'Développement des interfaces Flutter',
                  'Intégration des visuels et des maquettes Figma à disposition',
                  'Utilisation des éléments de la charte graphique (couleurs, icônes, illustrations)',
                  'Authentification basique et OAuth Google/Facebook',
                  'Communication inter-applications entre professionnels et clients',
                  'Intégration des retours utilisateurs',
                ],
              },
            ],
          },
        },
        ux: {
          en: {
            context: 'UX/UI proposals for the professional application, focusing on clarity and efficiency for professional users.',
            environment: ['Figma'],
            sections: [
              {
                title: 'UX/UI Contributions',
                items: [
                  'Visual improvement proposals',
                  'Page order and information architecture',
                  'Client information display optimisation (avoiding cognitive overload)',
                  'Colour contrast improvements for accessibility',
                ],
              },
            ],
          },
          fr: {
            context: 'Propositions UX/UI pour l\'application professionnelle, en mettant l\'accent sur la clarté et l\'efficacité pour les utilisateurs professionnels.',
            environment: ['Figma'],
            sections: [
              {
                title: 'Contributions UX/UI',
                items: [
                  'Propositions d\'améliorations visuelles',
                  'Ordre des pages et architecture de l\'information',
                  'Optimisation de l\'affichage des informations client (éviter la surcharge cognitive)',
                  'Amélioration des contrastes de couleurs pour l\'accessibilité',
                ],
              },
            ],
          },
        },
      },
    },
  ],

  // ── PROJECTS ────────────────────────────────────────────────
  // type: 'personal' | 'school' | 'pro'
  // aspects: ['dev'] | ['ux'] | ['dev', 'ux']
  projects: [
    {
      id: 'cep',
      title: 'Compass for European Patent',
      subtitle: { en: 'EPO CodeFest Competition — 2025', fr: 'Compétition CodeFest EPO — 2025' },
      type: 'pro',
      badge: { en: 'Competition', fr: 'Compétition' },
      tags: ['Vue.js', 'Python', 'AI/ML', 'Figma', 'Wireframing', 'Prototyping'],
      aspects: ['dev', 'ux'],
      figmaUrl: null,
      images: [
        //   {
        //   src: 'assets/images/test1.jpg',
        //   label: {
        //     en: 'Test 1 EN',
        //     fr: 'Test 1 FR'
        //   }
        // },
        // {
        //   src: 'assets/images/test2.jpg',
        //   label: {
        //     en: 'Test 2 EN',
        //     fr: 'Test 2 FR'
        //   }
        // }
      ], // Example with labels: [{ src: 'assets/projects/cep/screen1.jpg', label: { en: 'Dashboard overview', fr: 'Vue du tableau de bord' } }]
      summary: {
        en: 'Classification of European patents according to Sustainable Development Goals (SDGs) — EPO CodeFest participation.',
        fr: 'Classification de brevets européens selon les Objectifs de Développement Durable (ODD) — participation au CodeFest de l\'EPO.',
      },
      content: {
        dev: {
          en: {
            context: 'Participation in the CodeFest organised by the EPO (European Patent Office). Goal: design a solution to automatically classify European patents according to the Sustainable Development Goals (SDGs).',
            environment: ['Vue.js', 'Python', 'Git', 'GitHub'],
            sections: [
              {
                title: 'Development',
                items: [
                  'Functional conception — analysis of business needs and SDG classification criteria',
                  'Technology selection and application structuring',
                  'Task separation and team coordination',
                  'Frontend integration reproducing the Figma mockup',
                  'Functional testing and validation',
                ],
              },
            ],
          },
          fr: {
            context: 'Participation au CodeFest organisé par l\'EPO (European Patent Office). Objectif : concevoir une solution permettant de classifier automatiquement des brevets européens selon les Objectifs de Développement Durable (ODD).',
            environment: ['Vue.js', 'Python', 'Git', 'GitHub'],
            sections: [
              {
                title: 'Développement',
                items: [
                  'Conception fonctionnelle — analyse des besoins métier et critères de classification ODD',
                  'Sélection des technologies et structuration de l\'application',
                  'Séparation des tâches et coordination d\'équipe',
                  'Intégration frontend reproduisant la maquette Figma',
                  'Tests fonctionnels et validation',
                ],
              },
            ],
          },
        },
        ux: {
          en: {
            context: 'UX/UI design of the full application — from user research to interactive prototype.',
            environment: ['Figma'],
            sections: [
              {
                title: 'UX Analysis',
                items: [
                  'Target user identification',
                  'User journey structuring',
                  'Definition of necessary pages and clear organisation',
                  'Simplification of complex technical content',
                  'Reduction of cognitive load',
                  'Highlighting of priority information',
                  'Accessibility considerations',
                ],
              },
              {
                title: 'UI Design',
                items: [
                  'Visual identity reflection and colour palette definition with justification',
                  'Shape consistency and visual component coherence',
                  'Interactive map for hierarchical SDG results display with colour coding',
                  'Highlighting SDGs prioritised by each European country',
                  'Interactive prototyping and user journey simulation',
                ],
              },
            ],
          },
          fr: {
            context: 'Conception UX/UI de l\'application complète — de la recherche utilisateur jusqu\'au prototype interactif.',
            environment: ['Figma'],
            sections: [
              {
                title: 'Analyse UX',
                items: [
                  'Identification des utilisateurs cibles',
                  'Structuration du parcours utilisateur',
                  'Définition des pages nécessaires et organisation claire',
                  'Simplification du contenu technique complexe',
                  'Réduction de la charge cognitive',
                  'Mise en avant des informations prioritaires',
                  'Réflexion sur l\'accessibilité',
                ],
              },
              {
                title: 'Conception UI',
                items: [
                  'Réflexion de l\'identité visuelle et palette de couleurs avec justification',
                  'Cohérence des formes et des composants visuels',
                  'Carte interactive pour la hiérarchisation visuelle des résultats par ODD avec codes couleurs associés',
                  'Mise en évidence des ODD priorisés par chaque pays européen',
                  'Prototypage interactif et simulation du parcours utilisateur',
                ],
              },
            ],
          },
        },
      },
    },
    {
      id: 'lawrag',
      title: 'LawRAG',
      subtitle: { en: 'IA Pau Competition — Winner 🏆 — 2025', fr: 'Compétition IA Pau — Gagnant 🏆 — 2025' },
      type: 'pro',
      badge: { en: 'Competition · Winner', fr: 'Compétition · Gagnant' },
      tags: ['Vue.js', 'Python', 'RAG', 'AI', 'Figma', 'Wireframing', 'Prototyping'],
      aspects: ['dev', 'ux'],
      figmaUrl: null,
      images: [], // Format: [{ src: 'assets/projects/id/screen.jpg', label: { en: 'Title', fr: 'Titre' } }]
      summary: {
        en: 'AI-powered preparation assistant for the EEQ (European Qualifying Examination) using RAG (Retrieval-Augmented Generation). Winner of the IA Pau data battle.',
        fr: 'Assistant de préparation à l\'EEQ (Examen Européen de Qualification) utilisant un RAG (Retrieval-Augmented Generation). Gagnant du data battle organisé par IA Pau.',
      },
      content: {
        dev: {
          en: {
            context: 'Development of an assistance solution for EEQ preparation, simplifying access to complex legal content via RAG.',
            environment: ['Vue.js', 'Python', 'Git', 'GitHub'],
            sections: [
              {
                title: 'Development',
                items: [
                  'Technical needs analysis and technology selection',
                  'Frontend implementation of the Figma mockup',
                  'Integration of technical components and API communications',
                  'Management of generated responses and precision measurement',
                  'Testing and adjustments',
                ],
              },
            ],
          },
          fr: {
            context: 'Développement d\'une solution d\'assistance pour la préparation à l\'EEQ, simplifiant l\'accès à des contenus juridiques complexes via un RAG.',
            environment: ['Vue.js', 'Python', 'Git', 'GitHub'],
            sections: [
              {
                title: 'Développement',
                items: [
                  'Analyse des besoins techniques et sélection des technologies',
                  'Implémentation visuelle de la maquette Figma',
                  'Intégration des parties techniques et communications API',
                  'Gestion des réponses générées et mesure de leur précision',
                  'Tests et ajustements',
                ],
              },
            ],
          },
        },
        ux: {
          en: {
            context: 'UX/UI design focused on making complex legal AI responses accessible and readable for law students.',
            environment: ['Figma'],
            sections: [
              {
                title: 'UX Analysis',
                items: [
                  'Identification of difficulties encountered by students',
                  'Structuring a simplified learning journey',
                  'Reducing the complexity of generated responses',
                  'Logical organisation of legal information',
                ],
              },
              {
                title: 'UI Design & Prototype',
                items: [
                  'Mockup design — clear and structured interface',
                  'Logical and visually legible formatting of generated responses',
                  'Content hierarchisation',
                  'User interaction testing and constructive feedback',
                ],
              },
            ],
          },
          fr: {
            context: 'Conception UX/UI axée sur la lisibilité et l\'accessibilité des réponses IA complexes pour les étudiants en droit.',
            environment: ['Figma'],
            sections: [
              {
                title: 'Analyse UX',
                items: [
                  'Identification des difficultés rencontrées par les étudiants',
                  'Structuration d\'un parcours d\'apprentissage simplifié',
                  'Réduction de la complexité des réponses générées',
                  'Organisation logique des informations juridiques',
                ],
              },
              {
                title: 'Conception UI & Prototype',
                items: [
                  'Maquettage — interface claire et structurée',
                  'Mise en forme des réponses générées logiques et visuellement parlantes',
                  'Hiérarchisation du contenu',
                  'Tests des interactions utilisateurs et retours constructifs',
                ],
              },
            ],
          },
        },
      },
    },
    {
      id: 'discorde',
      title: 'Discorde',
      subtitle: { en: 'CY Tech — 2025', fr: 'CY Tech — 2025' },
      type: 'school',
      badge: { en: 'School', fr: 'Scolaire' },
      tags: ['Vue.js', 'Scala', 'PostgreSQL', 'Figma'],
      aspects: ['dev', 'ux'],
      figmaUrl: null,
      images: [], // Format: [{ src: 'assets/projects/id/screen.jpg', label: { en: 'Title', fr: 'Titre' } }]
      summary: {
        en: 'Real-time messaging application for text communication between users. Inspired by WhatsApp, Discord, Teams.',
        fr: 'Application de messagerie temps réel permettant la communication textuelle entre utilisateurs. Inspirée de WhatsApp, Discord, Teams.',
      },
      content: {
        dev: {
          en: {
            context: 'Real-time messaging application allowing text communication between users, inspired by existing messengers like WhatsApp, Signal, Discord, Microsoft Teams.',
            environment: ['Vue.js', 'Scala', 'PostgreSQL', 'Git', 'GitHub'],
            sections: [
              {
                title: 'Development',
                items: [
                  'Technical, visual and application needs analysis',
                  'Visual implementation of the Figma mockup',
                  'Real-time exchange implementation (WebSocket)',
                  'User session management',
                  'Frontend-Backend connection',
                  'Functional testing',
                ],
              },
            ],
          },
          fr: {
            context: 'Application de messagerie temps réel permettant la communication textuelle entre utilisateurs, inspirée de messageries existantes comme WhatsApp, Signal, Discord, Microsoft Teams.',
            environment: ['Vue.js', 'Scala', 'PostgreSQL', 'Git', 'GitHub'],
            sections: [
              {
                title: 'Développement',
                items: [
                  'Analyse des besoins techniques, visuels et applicatifs',
                  'Implémentation visuelle de la maquette Figma',
                  'Implémentation des échanges en temps réel (WebSocket)',
                  'Gestion des sessions utilisateurs',
                  'Connexion Frontend et Backend',
                  'Tests fonctionnels',
                ],
              },
            ],
          },
        },
        ux: {
          en: {
            context: 'UX/UI design inspired by existing messaging apps, adding original ideas and improvements.',
            environment: ['Figma'],
            sections: [
              {
                title: 'UX/UI Design',
                items: [
                  'Analysis of existing messaging applications',
                  'Visual reproduction with added original ideas and requirements',
                  'Reflection on visual relevance of elements',
                  'Readability and visual comfort improvements (contrast, colour themes, font sizes, typefaces)',
                ],
              },
            ],
          },
          fr: {
            context: 'Conception UX/UI inspirée des messageries existantes, en y ajoutant des idées originales et des améliorations.',
            environment: ['Figma'],
            sections: [
              {
                title: 'Conception UX/UI',
                items: [
                  'Analyse des messageries existantes',
                  'Reproduction du visuel en ajoutant nos idées et nos besoins',
                  'Réflexion sur la pertinence visuelle des éléments',
                  'Amélioration de la lisibilité et du confort visuel (contraste, thèmes de couleurs, taille d\'écriture, polices)',
                ],
              },
            ],
          },
        },
      },
    },
    {
      id: 'cinematch',
      title: 'Cinematch',
      subtitle: { en: 'CY Tech — 2025', fr: 'CY Tech — 2025' },
      type: 'school',
      badge: { en: 'School', fr: 'Scolaire' },
      tags: ['Angular', 'Rust', 'Python', 'PostgreSQL', 'Figma', 'Wireframing', 'Prototyping'],
      aspects: ['dev', 'ux'],
      figmaUrl: null,
      images: [], // Format: [{ src: 'assets/projects/id/screen.jpg', label: { en: 'Title', fr: 'Titre' } }]
      summary: {
        en: 'Audiovisual content recommendation platform based on user preferences with a multi-user matching system.',
        fr: 'Plateforme de recommandation de contenus audiovisuels basée sur les préférences utilisateurs avec un système de matching multi-utilisateurs.',
      },
      content: {
        dev: {
          en: {
            context: 'Platform for recommending audiovisual content based on user preferences. Multi-user matching system to find a film that satisfies multiple users simultaneously.',
            environment: ['Angular', 'Rust', 'Python', 'PostgreSQL', 'Git', 'GitHub'],
            sections: [
              {
                title: 'Development',
                items: [
                  'Technical needs analysis including recommendation algorithm',
                  'Visual implementation of the mockup',
                  'Development and integration of the recommendation system',
                  'Frontend-Backend-Database communications for ratings and recommendations',
                  'Testing and adjustments',
                ],
              },
            ],
          },
          fr: {
            context: 'Plateforme de recommandation de contenus audiovisuels basée sur les préférences des utilisateurs. Système de matching multi-utilisateurs pour trouver un film satisfaisant plusieurs utilisateurs simultanément.',
            environment: ['Angular', 'Rust', 'Python', 'PostgreSQL', 'Git', 'GitHub'],
            sections: [
              {
                title: 'Développement',
                items: [
                  'Analyse des besoins techniques dont l\'algorithme de recommandation',
                  'Implémentation visuelle de la maquette',
                  'Développement et intégration du système de recommandation',
                  'Communications Frontend-Backend-Base de données pour les notations et recommandations',
                  'Tests et ajustements',
                ],
              },
            ],
          },
        },
        ux: {
          en: {
            context: 'UX/UI design focused on the matching experience — making it fast and satisfying to find a film everyone agrees on.',
            environment: ['Figma'],
            sections: [
              {
                title: 'UX/UI Design',
                items: [
                  'Definition of typical users and rating system conception',
                  'Reflection on match logic and critical UX points',
                  'Avoiding excessively long match searches',
                  'Satisfying users with found matches to encourage reuse',
                  'Clear interface design — film display and relevant information',
                  'Highlighting other users\' ratings via the friends system',
                  'Content hierarchisation through film filtering',
                ],
              },
            ],
          },
          fr: {
            context: 'Conception UX/UI centrée sur l\'expérience de matching — rendre rapide et satisfaisante la recherche d\'un film qui convient à tous.',
            environment: ['Figma'],
            sections: [
              {
                title: 'Conception UX/UI',
                items: [
                  'Définition des utilisateurs types et conception du système de notation',
                  'Réflexion sur la logique de match et les points critiques de l\'UX',
                  'Éviter une recherche de match trop longue',
                  'Satisfaire les utilisateurs par le match trouvé pour les inviter à réutiliser la solution',
                  'Conception d\'une interface claire — affichage des films et infos utiles',
                  'Mise en avant des notations des autres utilisateurs via le système d\'amis',
                  'Hiérarchisation du contenu via la possibilité de filtrer les films',
                ],
              },
            ],
          },
        },
      },
    },
    {
      id: 'ethic-portfolio',
      title: 'Ethic Portfolio',
      subtitle: { en: 'SFSU — 2024', fr: 'SFSU — 2024' },
      type: 'school',
      badge: { en: 'School · SFSU', fr: 'Scolaire · SFSU' },
      tags: ['React', 'HTML5', 'CSS', 'GitHub Pages'],
      aspects: ['dev', 'ux'],
      figmaUrl: null,
      images: [], // Format: [{ src: 'assets/projects/id/screen.jpg', label: { en: 'Title', fr: 'Titre' } }]
      summary: {
        en: 'Academic portfolio presenting work done in computer ethics at San Francisco State University.',
        fr: 'Portfolio académique présentant les travaux réalisés en éthique informatique à la San Francisco State University.',
      },
      content: {
        dev: {
          en: {
            context: 'Academic portfolio to present work completed in computer ethics. Opportunity to learn a new frontend framework.',
            environment: ['React', 'Git', 'GitHub', 'GitHub Pages'],
            sections: [
              {
                title: 'Development',
                items: [
                  'Learning and choosing React as a new framework',
                  'Visual implementation of the mockup',
                  'Performance optimisation',
                  'Hosting via GitHub Pages',
                ],
              },
            ],
          },
          fr: {
            context: 'Portfolio académique pour présenter les travaux effectués en éthique informatique. Occasion d\'apprendre un nouveau framework frontend.',
            environment: ['React', 'Git', 'GitHub', 'GitHub Pages'],
            sections: [
              {
                title: 'Développement',
                items: [
                  'Apprentissage et choix de React comme nouveau framework',
                  'Implémentation visuelle de la maquette',
                  'Optimisation des performances',
                  'Hébergement via GitHub Pages',
                ],
              },
            ],
          },
        },
        ux: {
          en: {
            context: 'UX/UI design of an academic portfolio — clear presentation of long textual content.',
            environment: ['Figma'],
            sections: [
              {
                title: 'UX/UI Design',
                items: [
                  'Logical structuring of content',
                  'Organisation of sections by content type',
                  'Clear layout of long textual works for pleasant reading',
                  'Sober design with global graphic consistency',
                  'Typographic and component hierarchisation',
                ],
              },
            ],
          },
          fr: {
            context: 'Conception UX/UI d\'un portfolio académique — présentation claire de contenu textuel long.',
            environment: ['Figma'],
            sections: [
              {
                title: 'Conception UX/UI',
                items: [
                  'Structuration logique des contenus',
                  'Organisation des sections par type de contenu',
                  'Mise en page claire des longs travaux textuels pour une lecture agréable',
                  'Design sobre avec cohérence graphique globale',
                  'Hiérarchisation typographique et des composants',
                ],
              },
            ],
          },
        },
      },
    },
    {
      id: 'myjourney',
      title: 'My Journey Companion',
      subtitle: { en: 'CY Tech — 2023', fr: 'CY Tech — 2023' },
      type: 'school',
      badge: { en: 'School', fr: 'Scolaire' },
      tags: ['HTML5', 'CSS', 'JavaScript', 'Java', 'Spring Boot', 'Wireframing', 'Prototyping'],
      aspects: ['dev', 'ux'],
      figmaUrl: null,
      images: [], // Format: [{ src: 'assets/projects/id/screen.jpg', label: { en: 'Title', fr: 'Titre' } }]
      summary: {
        en: 'Web application for managing a personal video game library with rating and wishlist system.',
        fr: 'Application web de gestion d\'une bibliothèque personnelle de jeux vidéo avec système de notation et liste de souhaits.',
      },
      content: {
        dev: {
          en: {
            context: 'Web application for managing a personal video game library with rating and wishlist systems, plus a quiz feature.',
            environment: ['HTML5', 'CSS', 'JavaScript', 'Java', 'Spring Boot', 'Git', 'GitHub'],
            sections: [
              {
                title: 'Development',
                items: [
                  'Research and API selection for video game data',
                  'Fallback solution planning if API performance issues arise',
                  'Authentication system, rating system, wishlist, quiz',
                  'Visual implementation of the mockup',
                  'Authentication and user data management',
                  'Functional testing and fallback solution activation due to API performance issues',
                ],
              },
            ],
          },
          fr: {
            context: 'Application web de gestion d\'une bibliothèque personnelle de jeux vidéo avec système de notation, liste de souhaits et quiz.',
            environment: ['HTML5', 'CSS', 'JavaScript', 'Java', 'Spring Boot', 'Git', 'GitHub'],
            sections: [
              {
                title: 'Développement',
                items: [
                  'Recherche et sélection d\'API pour les données des jeux vidéo',
                  'Mise en place d\'une solution de secours en cas de problèmes de performance API',
                  'Système de connexion, notation, liste de souhaits, quiz',
                  'Implémentation visuelle de la maquette',
                  'Gestion de l\'authentification et des données utilisateurs',
                  'Tests fonctionnels et utilisation de la solution de secours suite aux problèmes de performances API',
                ],
              },
            ],
          },
        },
        ux: {
          en: {
            context: 'UX/UI design focused on intuitive navigation through a large video game catalogue.',
            environment: ['Figma'],
            sections: [
              {
                title: 'UX/UI Design',
                items: [
                  'User behaviour analysis',
                  'Intuitive design of rating and wishlist journeys',
                  'Search simplification',
                  'Game cards design — poster, title, description, average rating, user rating, list addition, quiz',
                ],
              },
            ],
          },
          fr: {
            context: 'Conception UX/UI axée sur la navigation intuitive dans un large catalogue de jeux vidéo.',
            environment: ['Figma'],
            sections: [
              {
                title: 'Conception UX/UI',
                items: [
                  'Analyse des comportements utilisateurs',
                  'Conception intuitive du parcours de notation et d\'ajout à la liste de souhaits',
                  'Simplification de la recherche',
                  'Conception des fiches des jeux — affiche, titre, description, moyenne, note, ajout liste, quiz',
                ],
              },
            ],
          },
        },
      },
    },
    {
      id: 'portfolio-photo',
      title: 'Portfolio Photo',
      subtitle: { en: 'Personal project — 2026', fr: 'Projet personnel — 2026' },
      type: 'personal',
      badge: { en: 'Personal', fr: 'Personnel' },
      tags: ['HTML5', 'CSS', 'JavaScript', 'Node.js', 'GitHub Pages'],
      aspects: ['dev', 'ux'],
      figmaUrl: null,
      images: [], // Format: [{ src: 'assets/projects/id/screen.jpg', label: { en: 'Title', fr: 'Titre' } }]
      summary: {
        en: 'Photography portfolio with dark/light theme, FR/EN bilingual support, justified grid layout and custom CMS via manifest generator.',
        fr: 'Portfolio photographique avec thème sombre/clair, support bilingue FR/EN, layout justified grid et CMS custom via générateur de manifest.',
      },
      content: {
        dev: {
          en: {
            context: 'Personal photography portfolio — fully custom, no framework, no CMS. File-system based content management.',
            environment: ['HTML5', 'CSS', 'JavaScript', 'Node.js', 'GitHub Pages'],
            sections: [
              {
                title: 'Features',
                items: [
                  'Dark/light theme with localStorage persistence',
                  'FR/EN i18n system with instant switching',
                  'Justified grid layout with natural image ratio algorithm',
                  'Lightbox with keyboard navigation',
                  'Node.js manifest generator — scans folders and generates JSON',
                  'Bilingual content via naming conventions (folder/file names)',
                  'EXIF metadata reading from photos',
                  'Deployed on GitHub Pages with custom domain',
                ],
              },
            ],
          },
          fr: {
            context: 'Portfolio photographique personnel — entièrement custom, sans framework, sans CMS. Gestion du contenu basée sur le système de fichiers.',
            environment: ['HTML5', 'CSS', 'JavaScript', 'Node.js', 'GitHub Pages'],
            sections: [
              {
                title: 'Fonctionnalités',
                items: [
                  'Thème sombre/clair avec persistance localStorage',
                  'Système i18n FR/EN avec changement instantané',
                  'Layout justified grid avec algorithme de ratio naturel des images',
                  'Lightbox avec navigation clavier',
                  'Générateur de manifest Node.js — scan des dossiers et génération JSON',
                  'Contenu bilingue via conventions de nommage (dossiers/fichiers)',
                  'Lecture des métadonnées EXIF des photos',
                  'Déployé sur GitHub Pages avec domaine personnalisé',
                ],
              },
            ],
          },
        },
        ux: {
          en: {
            context: 'Minimal, editorial design inspired by photography magazines and gallery exhibitions.',
            environment: ['CSS', 'Custom design system'],
            sections: [
              {
                title: 'Design',
                items: [
                  'Refined editorial aesthetic — Be Vietnam Pro + DM Sans typography',
                  'Gold accent on dark background — sophisticated and photographic',
                  'Justified grid layout preserving natural image ratios',
                  'Hero section with full-bleed background photo',
                  'Smooth animations and scroll reveals',
                ],
              },
            ],
          },
          fr: {
            context: 'Design minimal et éditorial inspiré des magazines photo et des expositions en galerie.',
            environment: ['CSS', 'Système de design custom'],
            sections: [
              {
                title: 'Design',
                items: [
                  'Esthétique éditoriale raffinée — typographie Be Vietnam Pro + DM Sans',
                  'Accent doré sur fond sombre — sophistiqué et photographique',
                  'Layout justified grid préservant les ratios naturels des images',
                  'Section hero avec photo de fond plein écran',
                  'Animations fluides et révélations au scroll',
                ],
              },
            ],
          },
        },
      },
    },
  ],

  // ── SKILLS ──────────────────────────────────────────────────
  skills: {
    dev: {
      frontend: [
        { name: 'Angular', level: 80 },
        { name: 'Vue.js', level: 70 },
        { name: 'React', level: 50 },
        { name: 'HTML5', level: 80 },
        { name: 'CSS', level: 70 },
        { name: 'JavaScript', level: 80 },
      ],
      backend: [
        { name: 'Java', level: 80 },
        { name: 'Spring Boot', level: 80 },
        { name: 'PHP', level: 70 },
        { name: 'Python', level: 50 },
        { name: 'Scala', level: 50 },
        { name: 'Rust', level: 50 },
        { name: 'Node.js', level: 70 },
      ],
      database: [
        { name: 'PostgreSQL', level: 60 },
        { name: 'MongoDB', level: 50 },
        { name: 'MySQL', level: 60 },
      ],
      devops: [
        { name: 'Git / GitHub', level: 70 },
        { name: 'Docker', level: 50 },
        { name: 'Azure', level: 50 },
        { name: 'GitHub Actions (CI/CD)', level: 80 },
        { name: 'Ansible', level: 50 },
        { name: 'Terraform', level: 50 },
        { name: 'Kafka', level: 45 },
      ],
      other: [
        { name: 'Markdown', level: 70 },
        { name: 'LaTeX', level: 70 },
      ],
    },
    ux: {
      tools: [
        { name: 'Figma', level: 80 },
        { name: 'Adobe Photoshop', level: 50 },
        { name: 'Adobe Illustrator', level: 50 },
        { name: 'Adobe Lightroom', level: 80 },
        { name: 'DaVinci Resolve', level: 50 },
      ],
      methods: [
        { name: 'UX Research & Analysis', level: 50 },
        { name: 'Wireframing', level: 80 },
        { name: 'Prototyping', level: 80 },
        { name: 'User Journey Mapping', level: 50 },
        { name: 'Design Systems', level: 50 },
        { name: 'Accessibility', level: 70 },
        { name: 'Responsive Design', level: 50 },
      ],
    },
    languages: [
      { name: 'Français', level: 100, label: { en: 'Native', fr: 'Natif' } },
      { name: 'English', level: 88, label: { en: 'Professional (TOEIC 915)', fr: 'Professionnel (TOEIC 915)' } },
      { name: 'Italiano', level: 30, label: { en: 'Beginner (A2)', fr: 'Débutant (A2)' } },
    ],
    productivity: [
      { name: 'Notion', level: 80 },
      { name: 'Suite Microsoft Office', level: 80 },
      { name: 'Suite Atlassian (Jira, Confluence)', level: 60 },
    ],
  },
};
