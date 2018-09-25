export const demos = [
    {
        name: "When Pigs Fly",
        technologies: [
            "HTML 5 Canvas",
            "Javascript (ES6) w/ websockets",
            "Python (Tornado Framework)",
            "MongoDB",
            "FL Studio - sound production",
            "Adobe Audition - sound editing"
        ],
        url: "https://when-pigs-fly.juicemobile.com",
        description: "When Pigs Fly is a multiplayer, mobile-oriented game utilizing HTML 5 Canvas and websockets on the front end and the Tornado python framework on the backend.  My role entailed the creation of the backend and also assisting with animation and websocket configuration on the frontend.",
        image: '/images/demos/when-pigs-fly.png'
    },
    {
        name: "Warby Parker AR Demo",
        technologies: [
            "HTML 5 Canvas",
            "Javascript (ES6) / React + Redux",
            "Augmented Reality / Facial Recognition"
        ],
        url: "https://juice-ar-demo.surge.sh",
        description: "This demo is meant to be used with a device containing a front-facing camera. The application uses facial recognition to determine the position of the user's face in the camera feed and allows the user to preview various glasses frames on their own face.",
        image: '/images/demos/warby-parker.png'
    },
];



export const companies = [
    {
        name: "Juice Mobile",
        title: "Full Stack Creative Developer",
        company_id: 1,
        start_date: "Feb. 2017",
        end_date: "Present",
        years_label: "2015 - Present",
        description: [
            {
                type: 'marker',
                title: 'Leadership',
                points: [
                    'Implemented daily creative studio standup meetings to organize and coordinate creative development activities',
                    'Implemented a team JIRA board and track creative developer tasks through team sprints',
                    'Wrote user stories, estimated tasks and assigned tasks to team members as required',
                    'Designed &amp; developed project proposals, documentation, and training materials',
                    'Documented team research &amp; development activities and findings',
                    'Coordinated with cross-departmental project stakeholders to ensure the technical needs of clients and Creative Studio were met',
                    'Mentored junior developers to help develop the team\'s skills and abilities',
                ]
            },
            {
                type: 'code',
                title: 'Development',
                points: [
                    'Architecture, development & maintenance of <a href="https://demosite.juicemobile.com">Juice Mobile\'s Demo Site</a> (frontend & backend)',
                    'Develop & maintain <a href="https://www.juicemobile.com">Juice Mobile Website</a> and <a href="https://insights.juicemoble.com">Juice Mobile\'s Insights Blog</a>',
                    'Architecture, development & deployment of custom client microsites',
                    'Developed &amp; demo\'d frontend and backend functionalities for the Creative Studio\'s Future Canvas initiative'
                ]
            },  
            {
                type: 'paint-brush',
                title: 'Creative',
                points: [
                    'Produced custom coded ad units, game and animations using HTML5 canvas, CSS and Javascript',
                    'Participated in high value RFP brainstorms to propose custom creative & game ideas',
                    'Edited &amp; updated client-provided assets using Photoshop as required to comply with mobile advertising best practices'
                ]
            }          
        ],
        technologies: [
            {
                type: 'python',
                title: 'Backend (Python)',
                points: [
                    'Django - Rewrote the backend API for the Juice Mobile Demo Site using Django with Django REST Framework.',
                    'Flask - Updated existing internal tools and client executions that had been written in Flask',
                    'Tornado - Created backends for multiplayer games, such as clones of Tetris and Flappy Bird, and websocket-enabled client microsites using Tornado'
                ]
            },
            {
                type: 'node-js',
                title: 'Backend (NodeJS)',
                points: [
                    'Created microsites for clients such as General Motors with backends written in Node using Express Framework',
                    'Created simple custom internal tools for special events such as Juice Mobile\'s Holiday Food Drive and quarterly events using NodeJS and Express'
                ]
            },
            {
                type: 'wordpress',
                title: 'Backend (WordPress)',
                points: [
                    'Created the Juice Mobile website using PHP and Wordpress with Visual Composer',
                    'Created Juice Mobile\'s Insights Blog using PHP and Wordpress'
                ]
            },
            {
                type: 'html',
                title: 'Frontend',
                points: [
                    'Updated Juice Mobile\'s demo site using AngularJS',
                    'Rewrote Juice Mobile\'s demo site using ReactJS and Redux',
                    'Created multiple demos and client sites using ReactJS',
                    'Created custom games and interactive ad executions using the HTML5 canvas and ES6',
                    'Used CSS3, Sass and Stylus on client sites, internal tools and ad units',
                ]
            },
            {
                type: 'database',
                title: 'Databases',
                points: [
                    'Used MongoDB for data collection on client lead generation sites',
                    'Used PostgreSQL for internal data storage on the Juice Mobile demo site',
                    'Used SQLite for simple, custom internal tools that did not require large amounts of data to be stored',
                ]
            },
            {
                type: 'comment',
                title: 'Other',
                points: [
                    'Used Celtra and Flexitive platforms extensively to create simple custom mobile ad units',
                    'Wrote several ETL scripts using Python and PHP to migrate data between various database systems, for example, migrating the demo site from MongoDB to Postgres',
                    'Used Photoshop to edit, alter and format client-provided assets as required to produce the highest quality ad units possible',
                    'Used FFMpeg to transcode, compress and slice video assets provided by clients to ensure that ad units comply with IAB standards',
                    'Used FL Studio and Adobe Audition to create and edit audio files to produce sound effects and music for custom games and ad units'
                ]
            }
        ],
        highlights: [
            {
                type: 'trophy',
                title: 'Highlights',
                points: [
                    'Developed several multiplayer mobile-oriented web games, such as clones of Tetris and Flappy Bird',
                    'Spearheaded investigation into the limitations of Juice\'s rich media ad serving technology and formed a committee to make recommendations for future development',
                    'Led and developed Juice\'s multivariate "Intelligent Creative" initiative, resulting in better performance for client campaigns vs. KPIs',
                    'Proposed and managed the planning and initial design and development phase of Juice\'s internal ad-creation platform',
                    'Proposed and developed a system for storing user engagement data to be used for engagement reporting as well as multivariate A/B testing',
                    'Won a Cultural Values award for "Caring Like Crazy"'
                ]
            }
        ],
        logo: '/images/logos/juice-mobile.svg',
        backgroundColor: 'white',
        titleBackgroundColor: '#F37C28',
        textColor: 'black',
        titleTextColor: 'white'
    },
    {
        name: "Checkout 51",
        title: "Full Stack Developer",
        company_id: 2,
        start_date: "Feb. 2016",
        end_date: "Feb. 2017",
        years_label: "2016 - 2017",
        description: [
            {
                type: 'code',
                title: 'Development',
                points: [
                    'Ongoing development, maintenance and refactoring of back-end systems to support coupon redemption for over 12 million North American users, including receipt uploads and parsing/processing, fraud detection, data storage, payment processing and reporting.',
                    'Consulted internally on public-facing RESTful API design and documentation to improve quality of shared resources',
                    'Participated in daily development team scrum',
                    'Collaborated with developers and designers across all departments to release new features simultaneously across multiple platforms',
                    'Introduced unit testing and developed several test suites for key backend system using PHPUnit'
                ]
            },
            {
                type: 'marker',
                title: 'Leadership',
                points: [
                    'Introduced team processes including use of feature branches, code reviews and pull requests, mentored junior developers, and conducted learning sessions to improve team knowledge around topics such as unit testing and dependency injection',
                    'Suggested, designed and developed initial prototype of Checkout 51\'s internal style guide application to coordinate design elements across web, iOS and Android apps',
                ]
            },
        ],
        technologies: [
            {
                type: 'php',
                title: 'Backend (PHP)',
                points: [
                    'Phalcon - Worked on Checkout 51\'s Project Freedom, a public facing coupon validation and fraud prevention API',
                    'PHPUnit - Developed test suites for key backend systems with the goal of improving test coverage over time',
                    'Worked extensively with PHP on Checkout 51\'s backend to develop coupon redemption APIs, receipt processing, user management, administration and custom task queue software',
                ]
            },
            {
                type: 'database',
                title: 'Databases',
                points: [
                    'Used MySQL for data collection and short-term storage',
                    'Used AWS Redshift for data warehousing and reporting',
                    'Used memcached aggressively for caching query data to reduce server load'
                ]
            },
            {
                type: 'html',
                title: 'Frontend',
                points: [
                    'Used HTML, Javascript and CSS to develop and maintain the Checkout 51 website and web app',
                    'Used HTML5 Canvas + Javascript to develop interactive tools for receipt processing and fraud prevention'
                ]
            },
        ],
        highlights: [
            {
                type: 'trophy',
                title: 'Highlights',
                points: [
                    'Developed a new User Input tool that allows users on web and mobile phones to highlight items on receipts to illustrate for our customer service representatives where a disputed or rejected claim can be found.  This tool improved customer feedback response times and reduced the total number of customer support tickets by more than 30%',
                    'Integrated Paypal for user payouts to improve user experience and reduce cost of cheque based payouts.',
                    'Developed PHP SDK for public-facing coupon redemption API',
                ]
            }
        ],
        logo: '/images/logos/checkout51.min.svgz',
        backgroundColor: '#76b844',
        titleBackgroundColor: '#76b844',
        textColor: 'white',
        titleTextColor: 'white'
    },
    {
        name: "DealTap",
        title: "Technical Lead",
        company_id: 3,
        start_date: "Oct. 2015",
        end_date: "Feb. 2016",
        years_label: "2015 - 2016",
        description: [
            {
                type: 'code',
                title: 'Development',
                points: [
                    'Architecture, development & maintenance of <a href="https://demosite.juicemobile.com">Juice Mobile\'s Demo Site</a> (frontend & backend)',
                    'Develop & maintain juicemobile.com and insights blog',
                    'Architecture, development & deployment of custom client microsites',
                    'Develop & Demo frontend and backend functionalities for the Creative Studio\'s Future Canvas initiative'
                ]
            },
        ],
        technologies: [
            {
                type: 'python',
                title: 'Backend (Python)',
                points: [
                    'Django - Rewrote the backend API for the Juice Mobile Demo Site using Django with Django REST Framework.',
                    'Flask - Updated existing internal tools and client executions that had been written in Flask',
                    'Tornado - Created backends for multiplayer games, such as clones of Tetris and Flappy Bird, and websocket-enabled client microsites using Tornado'
                ]
            },
        ],
        highlights: [
            
        ],
        logo: '/images/logos/rsz_dealtap.png',
        backgroundColor: '#8954D1',
        titleBackgroundColor: '#8954D1',
        textColor: 'white',
        titleTextColor: 'white'
    },
    {
        name: "AdParlor by AdKnowledge",
        title: "Senior Software Engineer",
        company_id: 4,
        start_date: "Oct. 2015",
        end_date: "Feb. 2016",
        years_label: "2015 - 2016",
        description: [
            {
                type: 'code',
                title: 'Development',
                points: [
                    'Architecture, development & maintenance of <a href="https://demosite.juicemobile.com">Juice Mobile\'s Demo Site</a> (frontend & backend)',
                    'Develop & maintain juicemobile.com and insights blog',
                    'Architecture, development & deployment of custom client microsites',
                    'Develop & Demo frontend and backend functionalities for the Creative Studio\'s Future Canvas initiative'
                ]
            },
        ],
        technologies: [
            {
                type: 'python',
                title: 'Backend (Python)',
                points: [
                    'Django - Rewrote the backend API for the Juice Mobile Demo Site using Django with Django REST Framework.',
                    'Flask - Updated existing internal tools and client executions that had been written in Flask',
                    'Tornado - Created backends for multiplayer games, such as clones of Tetris and Flappy Bird, and websocket-enabled client microsites using Tornado'
                ]
            },
        ],
        highlights: [
            
        ],
        logo: '/images/logos/adparlor-logo.svg',
        backgroundColor: '#34495e',
        titleBackgroundColor: '#34495e',
        textColor: 'white',
        titleTextColor: 'white'
    },
    {
        name: "EyeReturn Marketing",
        title: "Web Application Developer",
        company_id: 5,
        start_date: "Oct. 2015",
        end_date: "Feb. 2016",
        years_label: "2015",
        description: [
            {
                type: 'code',
                title: 'Development',
                points: [
                    'Architecture, development & maintenance of <a href="https://demosite.juicemobile.com">Juice Mobile\'s Demo Site</a> (frontend & backend)',
                    'Develop & maintain juicemobile.com and insights blog',
                    'Architecture, development & deployment of custom client microsites',
                    'Develop & Demo frontend and backend functionalities for the Creative Studio\'s Future Canvas initiative'
                ]
            },
        ],
        technologies: [
            {
                type: 'python',
                title: 'Backend (Python)',
                points: [
                    'Django - Rewrote the backend API for the Juice Mobile Demo Site using Django with Django REST Framework.',
                    'Flask - Updated existing internal tools and client executions that had been written in Flask',
                    'Tornado - Created backends for multiplayer games, such as clones of Tetris and Flappy Bird, and websocket-enabled client microsites using Tornado'
                ]
            },
        ],
        highlights: [
            
        ],
        logo: '/images/logos/Eyereturn-logo.svg',
        backgroundColor: 'white',
        titleBackgroundColor: '#333366',
        textColor: 'black',
        titleTextColor: 'white'
    },
    {
        name: "Syncapse",
        title: "Web Developer",
        company_id: 6,
        start_date: "Oct. 2015",
        end_date: "Feb. 2016",
        years_label: "2015",
        description: [
            {
                type: 'code',
                title: 'Development',
                points: [
                    'Architecture, development & maintenance of <a href="https://demosite.juicemobile.com">Juice Mobile\'s Demo Site</a> (frontend & backend)',
                    'Develop & maintain juicemobile.com and insights blog',
                    'Architecture, development & deployment of custom client microsites',
                    'Develop & Demo frontend and backend functionalities for the Creative Studio\'s Future Canvas initiative'
                ]
            },
        ],
        technologies: [
            {
                type: 'python',
                title: 'Backend (Python)',
                points: [
                    'Django - Rewrote the backend API for the Juice Mobile Demo Site using Django with Django REST Framework.',
                    'Flask - Updated existing internal tools and client executions that had been written in Flask',
                    'Tornado - Created backends for multiplayer games, such as clones of Tetris and Flappy Bird, and websocket-enabled client microsites using Tornado'
                ]
            },
        ],
        highlights: [
            
        ],
        logo: '/images/logos/syncapse.png',
        backgroundColor: '#D31C17',
        titleBackgroundColor: '#D31C17',
        textColor: 'white',
        titleTextColor: 'white'
    },
    {
        name: "Webcanada",
        title: "Web Developer",
        company_id: 7,
        start_date: "Oct. 2015",
        end_date: "Feb. 2016",
        years_label: "2015",
        description: [
            {
                type: 'code',
                title: 'Development',
                points: [
                    'Architecture, development & maintenance of <a href="https://demosite.juicemobile.com">Juice Mobile\'s Demo Site</a> (frontend & backend)',
                    'Develop & maintain juicemobile.com and insights blog',
                    'Architecture, development & deployment of custom client microsites',
                    'Develop & Demo frontend and backend functionalities for the Creative Studio\'s Future Canvas initiative'
                ]
            },
        ],
        technologies: [
            {
                type: 'python',
                title: 'Backend (Python)',
                points: [
                    'Django - Rewrote the backend API for the Juice Mobile Demo Site using Django with Django REST Framework.',
                    'Flask - Updated existing internal tools and client executions that had been written in Flask',
                    'Tornado - Created backends for multiplayer games, such as clones of Tetris and Flappy Bird, and websocket-enabled client microsites using Tornado'
                ]
            },
        ],
        highlights: [
            
        ],
        logo: '/images/logos/rsz_webcanada.png',
        backgroundColor: 'white',
        titleBackgroundColor: '#0055A7',
        textColor: '#0055A7',
        titleTextColor: 'white'
    },
    {
        name: "Print Logic",
        title: "Founder, Director of Development",
        company_id: 8,
        start_date: "Oct. 2015",
        end_date: "Feb. 2016",
        years_label: "2015",
        description: [
            {
                type: 'code',
                title: 'Development',
                points: [
                    'Architecture, development & maintenance of <a href="https://demosite.juicemobile.com">Juice Mobile\'s Demo Site</a> (frontend & backend)',
                    'Develop & maintain juicemobile.com and insights blog',
                    'Architecture, development & deployment of custom client microsites',
                    'Develop & Demo frontend and backend functionalities for the Creative Studio\'s Future Canvas initiative'
                ]
            },
        ],
        technologies: [
            {
                type: 'python',
                title: 'Backend (Python)',
                points: [
                    'Django - Rewrote the backend API for the Juice Mobile Demo Site using Django with Django REST Framework.',
                    'Flask - Updated existing internal tools and client executions that had been written in Flask',
                    'Tornado - Created backends for multiplayer games, such as clones of Tetris and Flappy Bird, and websocket-enabled client microsites using Tornado'
                ]
            },
        ],
        highlights: [
            
        ],
        logo: '/images/logos/printlogic.png',
        backgroundColor: '#216c8a',
        titleBackgroundColor: '#216c8a',
        textColor: '#fff',
        titleTextColor: 'white'
    }
];

