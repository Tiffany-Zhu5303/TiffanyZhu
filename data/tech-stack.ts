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
            { name: 'SwiftUI', icon: '/icons/swiftui.svg' },
            { name: 'Vue.js', icon: '/icons/vuejs.svg' },
        ],
    },
    {
        name: 'Backend',
        technologies: [
            { name: 'Express.js', icon: '/icons/expressjs.svg' },
            { name: 'Node.js', icon: '/icons/nodejs.svg' },
            { name: 'Firebase', icon: '/icons/firebase.svg' },
            { name: 'MongoDB', icon: '/icons/mongodb.svg' },
            { name: 'RESTful APIs', icon: '/icons/api-management.svg' },
        ],
    },
    {
        name: 'Tools & Workflows',
        technologies: [
            { name: 'GitHub', icon: '/icons/github.svg' },
            { name: 'GitLab', icon: '/icons/gitlab.svg' },
            { name: 'Git', icon: '/icons/git.svg' },
            { name: 'Postman', icon: '/icons/postman.svg' },
            { name: 'Visual Studio Code', icon: '/icons/vscode.svg' },
            { name: 'Jest', icon: '/icons/jest.svg' },
            { name: 'Vercel', icon: '/icons/vercel.svg' },
            { name: 'Figma', icon: '/icons/figma.svg' },
        ],
    }
]

export default TechStackList;