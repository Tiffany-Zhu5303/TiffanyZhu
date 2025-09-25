import { TechStack } from "./types";

const TechStackList: TechStack[] = [
    {
        name: 'Languages',
        technologies: [
            { name: 'JavaScript', icon: '/icons/javascript.svg' },
            { name: 'Python', icon: '/icons/python.svg' },
            { name: 'HTML', icon: '/icons/html.svg' },
            { name: 'CSS', icon: '/icons/css.svg' },
            { name: 'SQL', icon: '/icons/sql.svg' },
            { name: 'C++', icon: '/icons/cplusplus.svg' },
            { name: 'TypeScript', icon: '/icons/typescript.svg' },
        ]
    },
    {
        name: 'Frontend',
        technologies: [
            { name: 'React', icon: '/icons/react.svg' },
            { name: 'Next.js', icon: '/icons/nextjs.svg' },
            { name: 'Tailwind CSS', icon: '/icons/tailwindcss.svg' },
            { name: 'Streamlit', icon: '/icons/streamlit.svg' },
            { name: 'SwiftUI', icon: '/icons/swiftui.svg' },
            { name: 'Vue.js', icon: '/icons/vuejs.svg' },
        ],
    },
    {
        name: 'Backend',
        technologies: [
            { name: 'Express.js', icon: '/icons/expressjs.svg' },
            { name: 'Node.js', icon: '/icons/nodejs.svg' },
            { name: 'MySQL', icon: '/icons/mysql.svg' },
            { name: 'Firebase', icon: '/icons/firebase.svg' },
            { name: 'MongoDB', icon: '/icons/mongodb.svg' },
            { name: 'RESTful APIs', icon: '/icons/api-management.svg' },
        ],
    },
    {
        name: 'Version Control',
        technologies: [
            { name: 'GitHub', icon: '/icons/github.svg' },
            { name: 'GitLab', icon: '/icons/gitlab.svg' },
            { name: 'Git', icon: '/icons/git.svg' },
        ]
    },
    {
        name: 'Development Tools',
        technologies: [
            { name: 'Visual Studio Code', icon: '/icons/vscode.svg' },
            { name: 'DBeaver', icon: '/icons/dbeaver.svg' },
            { name: 'Postman', icon: '/icons/postman.svg' },
        ]
    },
    {
        name: 'Deployment & Automation',
        technologies: [
            { name: 'Apache Airflow', icon: '/icons/airflow.svg' },
            { name: 'Vercel', icon: '/icons/vercel.svg' },
        ]
    },
    {
        name: 'Project Management',
        technologies: [
            { name: 'Trello', icon: '/icons/trello.svg' },
            { name: 'OpenProject', icon: '/icons/openproject.svg' },
        ]
    },
    // {
    //     name: 'Machine Learning',
    //     technologies: [
    //         { name: 'Pandas', icon: '/icons/pandas.svg' },
    //         { name: 'NumPy', icon: '/icons/numpy.svg' },
    //         { name: 'Matplotlib', icon: '/icons/matplotlib.svg' },
    //         { name: 'Scikit-learn', icon: '/icons/scikit-learn.svg' },
    //     ]
    // },
    {
        name: 'Design',
        technologies: [
            { name: 'Figma', icon: '/icons/figma.svg' },
        ],
    },
    {
        name: 'Testing',
        technologies: [
            { name: 'Jest', icon: '/icons/jest.svg' },
        ]
    }
]

export default TechStackList;