const ProjectsList = [
    // {
    //     title: 'Garlic=Rich Air',
    //     shortDescription: 'An immersive web application to reinterpret and showcase the unique artwork by Shu Lea Cheang (2002-2003).',
    //     longDescription: 'A reinterpretation and commemoration of the unique artwork by Shu Lea Cheang (2002-2003) that explores the intersection of art, technology, and social commentary. The project aims to create an immersive web application that allows users to engage with the themes and concepts presented in the original work, while also providing a platform for reflection on the role of technology in contemporary art.',
    //     technologies: ['React', 'Tailwind CSS'],
    //     image: '/garlic-eq-rich-air.png',
    //     link: 'https://garlic-rich-air-fiona.vercel.app/',
    //     github: 'https://github.com/Tiffany-Zhu5303/Garlic-Rich-Air',
    //     collaborators: [
    //         {
    //             name: 'Fiona Zhu',
    //             role: 'Designer',
    //             link: 'https://www.linkedin.com/in/fiona-zhu-1659561b4/',
    //         },
    //         {
    //             name: 'Junheng Zhang',
    //             role: 'Web Developer',
    //             link: 'https://www.linkedin.com/in/junhengzheng/'
    //         }
    //     ]
    // },
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
                name: 'Shelly Masih'
            },
            {
                name: 'Yulin Zheng'
            },
            {
                name: 'Michael Russo'
            }
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
                'Features a gameboard with a Jeopardy-style layout. Users can select categories and questions, and the game will keep track of scores in real-time.',
                'Features user information tab, game history tab, and a game statistics tab. Users are able to update their profile information here. Updates made will be reflected immediately and will be stored in Firebase Auth.',
            ]
        }
    }
]

ProjectsList.forEach(project => {
  project.projectRoute = project.title.toLowerCase().replace(/\s+/g, "");
});

export default ProjectsList;