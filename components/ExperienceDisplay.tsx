import React from 'react';
import { IoClose } from "react-icons/io5";
import { FaHandPointUp } from "react-icons/fa";
import ExperiencesList from '@/data/experiences';

export default function ExperiencesDisplay({isOpen, onClose}) {   
    if (!isOpen) return null;

    return (
        <div className='experience-page bg-gradient-to-b from-wisteria via-periwinkle to-magnolia w-full h-max absolute inset-0 overflow-x-hidden'>
            <IoClose onClick={onClose} className='cursor-pointer size-12' id='experiences-top'/>
            <div className='w-full flex justify-center'>
                <h1 className='text-4xl font-bold text-dark-purple'>My Experiences!</h1>
            </div>
            <div className='grid grid-cols-1 w-full py-8'>
                {ExperiencesList.map((experience, index) => (
                    <div key={index} className='p-4 grid grid-cols-9'>
                        <div className='col-start-2 col-span-4'>
                            <h2 className='text-2xl font-bold text-dark-purple'>{experience['Company']} - <span className='italic'>{experience['Location-type'] === 'Remote' ? 'Remote' : experience['Location']}</span></h2>
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
                        <a href='#experiences-top' className='back-to-top-bttn text-lg bg-dark-purple text-white px-4 py-2 rounded-lg my-8'>Back to top</a>
                        <a href='#experiences-top'><FaHandPointUp className='text-4xl text-dark-purple'/></a>
                    </div>
                </div>
            </div>
        </div>
    );
};