import React from 'react';
import { IoClose } from "react-icons/io5";
import { FaHandPointUp } from "react-icons/fa";

export default function Resume({isOpen, onClose}) {
    if(!isOpen) return null;

    return (
        <div className='no-scrollbar resume-page w-full h-max absolute inset-0 overflow-x-hidden bg-gradient-to-b from-lavender-floral via-periwinkle to-pomp-and-power'>
            <IoClose onClick={onClose} className='cursor-pointer size-12' id='resume-top'/>
            <div className='w-full h-max flex justify-center pb-8'>
                <iframe 
                src={process.env.NEXT_PUBLIC_RESUME_URL} 
                title='My Resume!' 
                width='100%%' 
                height='100%' 
                className='h-9/10vh w-1/2'/>
            </div>
            <div className='flex items-center justify-end mr-8 back-to-top'>
                <a href='#resume-top' className='text-lg bg-pomp-and-power text-white px-4 py-2 rounded-lg my-8'>Back to top</a>
                <a href='#resume-top'><FaHandPointUp className='text-4xl text-pomp-and-power'/></a>
            </div>
        </div>
    );
};