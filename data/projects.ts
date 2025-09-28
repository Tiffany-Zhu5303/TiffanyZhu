import { Project } from './types';

const ProjectsList: Project[] = [
    // {
    //     title: 'Garlic=Rich Air',
    //     shortDescription: 'An immersive web application to reinterpret and showcase the unique artwork by Shu Lea Cheang (2002-2003).',
    //     longDescription: 'A reinterpretation and commemoration of the unique artwork by Shu Lea Cheang (2002-2003) that explores the intersection of art, technology, and social commentary. The project aims to create an immersive web application that allows users to engage with the themes and concepts presented in the original work, while also providing a platform for reflection on the role of technology in contemporary art.',
    //     technologies: ['React', 'Tailwind CSS'],
    //     image: '/images/garlic-eq-rich-air.png',
    //     link: 'https://garlic-rich-air-fiona.vercel.app/',
    //     github: 'https://github.com/Tiffany-Zhu5303/Garlic-Rich-Air',
    //     collaborators: [
    //         {
    //             name: 'Fiona Zhu',
    //             role: 'Designer'
    //         },
    //         {
    //             name: 'Junheng Zhang',
    //             role: 'Web Developer'
    //         }
    //     ]
    // },
    {
        title: 'MTA ACE Violation Dashboard',
        shortDescription: 'A Tableau Public dashboard for analysis on MTA ACE violations during 2024-2025.',
        longDescription: 'For the Macaulays Honors College x MTA 2025 Dathathon, the theme is on MTA Automated Camera Enforcement (ACE) Violations in NYC. These are vehicle violations captured by camera at bus stops. This project features an interactive dashboard that provides insights into MTA ACE violations during 2024-2025. This dashboard sources data from data.ny.gov and allows users to explore trends, patterns, and key metrics related to MTA ACE violations. In addition, the dashboard includes data visualization of MTA congestion zone entry hot spots. Special shout out to my team TSZR for making it to top 20 contestants!',
        technologies: ['Tableau', 'Python'],
        image: '/images/MTA-ACE-Violation-Dashboard.png',
        link: 'https://public.tableau.com/app/profile/tiffany.zhu8039/viz/MTAACEViolations/Dashboard1',
        github: 'https://github.com/MHC-Datathon/TSZR',
        collaborators: [
            {
                name: 'Sara Lukacevic'
            },
            {
                name: 'Zara Raza'
            }
        ],
        tags: ['Data visualization'],
        projectroute: '',
    },
    {
        title: 'PetPals',
        shortDescription: 'Design and prototype of a mobile app that connects pet owners with local pet owners.',
        longDescription: 'PetPals is a mobile app designed to connect pet owners with local pet owners. The app allows users to create profiles for their pets, browse other pet profiles, and set up meetups for their pets. With a focus on safety and reliability, PetPals includes features such as private messaging, calendar integration for seamless scheduling, and map alerts for nearby pets. This project aims to foster a sense of community among pet owners and provide a convenient and trustworthy platform for pets and their owners to socialize.',
        technologies: ['Figma'],
        image: '/images/PetPals.png',
        link: 'https://www.figma.com/design/24PdWS7GVrkC24GDOKz7yp/PetPals-Working-MVP?node-id=0-1&t=xI3UAa0YxlDeUQSO-1',
        github: '',
        collaborators: [
            {
                name: 'Ellen Avrumova'
            },
            {
                name: 'Krina Patel'
            }
        ],
        tags: ['UI/UX Design', 'Mobile'],
        projectroute: '',
    },
    {
        title: 'Jeopardy With Friends',
        shortDescription: 'A real-time, multiplayer web application that recreates the classic Jeopardy trivia game for friends to play together online.',
        longDescription: 'An interactive and real-time multiplayer web application that recreates the classic Jeopardy trivia game. This app features a user-friendly interface, real-time updates, and a variety of trivia categories to choose from. Players can join games with friends, compete against each other, and test their knowledge in a fun and engaging way. In addition, this app is designed to be accessible and easy to use, making it perfect for trivia enthusiasts and casual players alike.',
        technologies: ['React', 'Node.js', 'Socket.IO', 'Jest', 'Firebase Auth'],
        image: '/JeopardyWithFriends/Login.png',
        link: '',
        github: 'https://github.com/csci-499-fa24/Team2',
        collaborators: [
            {
                name: 'Man Kei Po'
            },
            {
                name: 'Vicki Wu'
            },
            {
                name: 'Yulin Zheng'
            },
            {
                name: 'Michael Russo'
            },
            {
                name: 'Shelly Masih'
            },
        ],
        carousel: {
            images: [
                '/JeopardyWithFriends/Home.png',
                '/JeopardyWithFriends/WaitingRoom.mp4',
                '/JeopardyWithFriends/Gameboard.mp4',
                '/JeopardyWithFriends/Profile-page.gif',
            ],
            titles: [
                'Home Page',
                'Waiting Room',
                'Gameboard',
                'User Page'
            ],
            descriptions: [
                'Features dashboards of active users, active games, and the instructions for new users. Users are able to look up private rooms to join or create a new game.',
                'Features real time waiting room for users to join before the game starts. The game begins once all players toggle their "ready" button and it immediately redirects them to a random gameboard.',
                'Features a gameboard with a Jeopardy-style layout. Users can select categories and questions, and the game will keep track of scores in real-time. First round is Jeopardy, second round is Double Jeopardy (doubled score), and final round is Final Jeopardy.',
                'Features user information tab, game history tab, and a game statistics tab. Users are able to update their profile information here. Updates made will be reflected immediately and will be stored in Firebase Auth.',
            ]
        },
        tags: ['Web', 'Full Stack'],
        projectroute: '',
    }
]

ProjectsList.forEach(project => {
  project.projectroute = project.title.toLowerCase().replace(/\s+/g, "");
});

export default ProjectsList;