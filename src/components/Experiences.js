import React from 'react';
import { IoClose } from "react-icons/io5";
import { FaHandPointUp } from "react-icons/fa";

function Experiences({isOpen, onClose}) {   
    if (!isOpen) return null;
    const experiences = [
        {
            'Company': 'Hunter College',
            'Location-type': 'In-person',
            'Location': 'New York, NY',
            'Dates': 'October 2023 - Present',
            'Position': 'Japanese Peer Tutor',
            'Description': [
                'Foster a supportive learning environment that empowers students to achieve their goals and deliver individualized instruction in grammar, conversation, and reading comprehension to students of levels from beginner to advanced.',
                'Conduct engaging weekly sessions lasting 1-3 hours, where students can actively practice their skills and receive personalized feedback to reinforce their understanding and boost their confidence and progress in Japanese language acquisition.'
            ],
            'Personal Note': 'I love helping students learn Japanese and sharing my passion for the language and culture! I continue to review and practice my Japanese through my interactions with the students and the materials I use to teach them. I enjoy seeing the progress that the students make and the confidence they gain in their Japanese abilities.'
        },
        {
            'Company': 'Origen Consulting - PENCIL Inc.',
            'Location-type': 'Remote',
            'Dates': 'July 2024 - August 2024',
            'Position': 'Web Development Intern',
            'Description': [
                'Developed a Next.js wiki and market webapp deployed on Vercel, delivering a user-friendly platform for spread of environmental awareness, knowledge, and eco-friendly products.',
                'Leveraged Tailwind CSS for styling, Prisma ORM for database management, Firebase Authentication for user management, and implemented over 20 wireframes into a functional UX and visually appealing UI.'
            ],
            'Personal Note': 'I enjoyed working with my team to create a functional application that met the needs and requirements. It was interesting to learn more about the process of planning and developing a marketplace/wiki application on a larger scale. I picked up new skills and knowledge in web development and software engineering, such as Tailwind CSS and Next.js, that I can apply to future projects.'
        },
        {
            'Company': 'Break Through Tech - Bitly, Inc.',
            'Location-type': 'Remote',
            'Dates': 'January 2023',
            'Position': 'Software Engineer Intern',
            'Description': [
                'Produced and launched a React web app for user creation personalized events and RSVPS with execution of API requests to retrieve and post data from a MySQL database.',
                'Designed and structured the homepage of the web app for smoother UI with Figma and integrated seamless routing between front-end pages to provide an intuitive and seamless user experience.'
            ],
            'Personal Note': 'This project was my first formal introduction to working on a full stack project. I learned a lot about working with APIs and databases, as well as how to structure and design a web application. I enjoyed collaborating with my team on this project and learned a lot from our supervisors and mentors during this project.'
        },
        {
            'Company': 'Break Through Tech - Accenture ',
            'Location-type': 'Hybrid',
            'Location': 'New York, NY',
            'Dates': 'August 2022 - December 2022',
            'Position': 'Machine Learning Engineer Intern',
            'Description': [
                'Performed sentiment analysis on over 80,000 tweets related to recent Apple and Samsung product releases by employing natural language processing techniques to analyze public sentiment for business insights.',
                "Extracted real-time tweets from X's API over a week to construct an accurate unsupervised learning sentiment model utilizing Dataiku."
            ],
            'Personal Note': `This internship was conducted during Break Through Tech's AI Program. I learned a lot about machine learning and natural language processing during this internship. I enjoyed working with my team to analyze the sentiment of tweets and present our findings to our supervisors. I gained valuable experience in working with large datasets and building machine learning models.`  
        },
        {
            'Company': 'Break Through Tech - Credit Suisse',
            'Location-type': 'Remote',
            'Dates': 'January 2022',
            'Position': 'Investment Banking Quantitative Analyst Intern',
            'Description': [
                'Collaborated with 4 team members and project managers to execute a three-week project that required research of alternatives to SAP crystal reports which resulted in generating reports with DevExpress.',
                'Generated report with reporting application using ASP.NET Core with DevExpress and Visual Studio.'
            ],
            'Personal Note': `I enjoyed working on this project and learning about the different tools and technologies used in investment banking. I learned a lot about the process of generating reports and the importance of accuracy and attention to detail in this field. I enjoyed working with my team and supervisors and gained valuable experience in the field of investment banking.`
        }
    ];

    return (
        <div className='experience-page bg-linen w-full h-max absolute inset-0 overflow-x-hidden'>
            <IoClose onClick={onClose} className='cursor-pointer size-12' id='experiences-top'/>
            <div className='w-full flex justify-center'>
                <h1 className='text-4xl font-bold text-pomp-and-power'>My Experiences!</h1>
            </div>
            <div className='grid grid-cols-1 w-full py-8'>
                {experiences.map((experience, index) => (
                    <div key={index} className='p-4 grid grid-cols-9'>
                        <div className='col-start-2 col-span-4'>
                            <h2 className='text-2xl font-bold text-pomp-and-power'>{experience['Company']} - <span className='italic'>{experience['Location-type'] === 'Remote' ? 'Remote' : experience['Location']}</span></h2>
                            <p className='text-lg italic'>{experience['Position']}</p>
                            <ul className='list-disc pt-4'>
                                {experience['Description'].map((desc, index) => (
                                    <li key={index} className='text-lg'>{desc}</li>
                                ))}
                            </ul>
                        </div>
                        <div className='col-start-7 col-span-2'>
                            <p className='text-lg font-semibold'>{experience['Dates']}</p>
                            <p className='text-lg'>{experience['Personal Note']}</p>
                        </div>
                    </div>
                ))}
                <div className='grid grid-cols-9 back-to-top'>
                    <div className='col-start-7 col-span-2 flex items-center justify-end'>
                        <a href='#experiences-top' className='back-to-top-bttn text-lg bg-pomp-and-power text-white px-4 py-2 rounded-lg my-8'>Back to top</a>
                        <a href='#experiences-top'><FaHandPointUp className='text-4xl text-pomp-and-power'/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experiences;