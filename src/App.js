import React, {useState} from 'react';
import Experiences from './components/Experiences';
import Resume from './components/Resume';
import profile from './images/LinkedinProfile.jpeg';
import resumePreview from './images/resume-preview.png';
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import './App.css';

function App() {
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

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center overflow-x-hidden bg-gradient-to-br from-lavender-floral via-periwinkle to-seashell">
      <div className='intro-container w-full p-8 flex justify-center items-center overflow-x-hidden'>
        <div className='mx-8 relative rounded-full'>
          <img src={profile} className='profile-pic rounded-full w-full h-full mx-auto border-2' alt='Tiffany Zhu' />
        </div>
        <div className='size-down'>
          <h1 className='font-bold text-4xl'>I'm Tiffany Zhu 👋🏼</h1>
          <p className='text-lg py-4'>
            Hello World! Welcome to my personal app 🤩
            <br/>I'm a data analyst intern at the Metropolitan Transportation Authority and an aspiring web/software developer.
            <br/>My goal is to make a positive impact on the world through technology and data!
          </p>
          <div className='flex'>
            <a href='https://www.linkedin.com/in/tiffany-zhu-tz' target='_blank' rel='noreferrer'><FaLinkedin className='text-4xl hover:text-pomp-and-power hover:cursor-pointer'/></a>
            <a href='https://github.com/Tiffany-Zhu5303' target='_blank' rel='noreferrer'><FaGithubSquare className='text-4xl hover:text-pomp-and-power hover:cursor-pointer'/></a>
          </div>
        </div>
      </div>
      <div className='size-up size-down flex flex-col items-center'>
          <h1 className='text-3xl font-bold py-8'>My Resume 📄</h1>
          <a href='#resume-top'>
            <div className='resume-holder relative flex flex-col justify-end border-2' onClick={openResume}>
                <img src={resumePreview} alt='resume preview' width='100%' height='100%'/>
                <div className='absolute w-full h-2/6 bg-periwinkle flex justify-center items-center'>
                  <button className='text-lg px-4 py-2'>Check it out!</button>
                </div>
            </div>
          </a>
          <a href='#experiences-top'>
            <button className='text-lg bg-periwinkle px-4 py-2 rounded-lg my-8' onClick={openExperiences}>More on my journey 💻 </button>
          </a>
          {experiencesOpened && <Experiences isOpen={experiencesOpened} onClose={closeExperiences} className={experiencesOpened ? '' : 'hidden'}/>}
          {resumeOpened && <Resume isOpen={resumeOpened} onClose={closeResume} className={resumeOpened ? '' : 'hidden'}/>}
      </div>
    </div>
  );
}

export default App;
