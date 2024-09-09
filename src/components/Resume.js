import React from 'react';
import { IoClose } from "react-icons/io5";
import { FaHandPointUp } from "react-icons/fa";
import ResumeImg from '../images/Resume.jpg';

function Resume({isOpen, onClose}) {
    if(!isOpen) return null;

    return (
        <div className='no-scrollbar resume-page w-full h-max absolute inset-0 overflow-x-hidden bg-linen'>
            <IoClose onClick={onClose} className='cursor-pointer size-12' id='resume-top'/>
            <div className='w-full flex justify-center pb-8'>
                <img src={ResumeImg} alt='My Resume!' width='90%' height='100%' className='resume-img'/>
            </div>
            <div className='flex items-center justify-end mr-8 back-to-top'>
                <a href='#resume-top' className='text-lg bg-pomp-and-power text-white px-4 py-2 rounded-lg my-8'>Back to top</a>
                <a href='#resume-top'><FaHandPointUp className='text-4xl text-pomp-and-power'/></a>
            </div>
        </div>
    );
}

export default Resume;