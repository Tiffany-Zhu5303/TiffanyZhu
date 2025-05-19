import {useState} from 'react';
import Image from 'next/image';
import ExperiencesList from '@/components/ExperiencesList';
import Resume from '@/components/Resume';
import resumePreview from '../public/resume-preview.png';

export default function Experiences() {
    const [experiencesOpened, setExperiencesOpened] = useState(false);
    const [resumeOpened, setResumeOpened] = useState(false);

    function openExperiences() {
        setExperiencesOpened(true);
    }

    function closeExperiences() {
        setExperiencesOpened(false);
    }

    function openResume() {
        setResumeOpened(true);
    }

    function closeResume() {
        setResumeOpened(false);
    }

    return(
        <div className="w-full min-h-screen flex flex-col justify-center items-center overflow-x-hidden bg-gradient-to-br from-lavender-floral via-periwinkle to-seashell">
          <div className='size-up size-down flex flex-col items-center'>
              <h1 className='text-3xl font-bold py-8'>My Resume 📄</h1>
              <a href='#resume-top'>
                <div className='resume-holder relative flex flex-col justify-end border-2' onClick={openResume}>
                    <Image 
                      src={resumePreview} 
                      alt='resume preview' 
                      width='100%' 
                      height='100%'/>
                    <div className='absolute w-full h-2/6 bg-periwinkle flex justify-center items-center'>
                      <button className='text-lg px-4 py-2'>Check it out!</button>
                    </div>
                </div>
              </a>
              <a href='#experiences-top'>
                <button className='text-lg bg-periwinkle px-4 py-2 rounded-lg my-8' onClick={openExperiences}>More on my journey 💻 </button>
              </a>
              {experiencesOpened && <ExperiencesList isOpen={experiencesOpened} onClose={closeExperiences} className={experiencesOpened ? '' : 'hidden'}/>}
              {resumeOpened && <Resume isOpen={resumeOpened} onClose={closeResume} className={resumeOpened ? '' : 'hidden'}/>}
          </div>
        </div>
    )
};