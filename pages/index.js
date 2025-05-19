import Image from 'next/image';
import profile from '../public/LinkedinProfile.jpeg';
import GraduationCountdown from '@/components/HomeWidget';
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between items-center overflow-x-hidden bg-gradient-to-br from-lavender-floral via-periwinkle to-seashell">
      <div className='w-full p-8 mt-20 flex flex-col md:flex-row justify-center items-center overflow-x-hidden'>
        <div className='m-8 relative rounded-full'>
          <Image 
            src={profile} 
            className='profile-pic rounded-full mx-auto border-2' 
            alt='Tiffany Zhu' />
        </div>
        <div>
          <h1 className='font-bold text-4xl'>I'm Tiffany Zhu 👋🏼</h1>
          <p className='text-lg py-4'>
            Hello World! Welcome to my personal app 🤩
            <br/>I'm a data engineering intern at the Metropolitan Transportation Authority 🚇
            <br/>My goal is to make a positive impact on the world through technology and data!
          </p>
          <div className='flex'>
            <a href='https://www.linkedin.com/in/tiffany-zhu-tz' target='_blank' rel='noreferrer'><FaLinkedin className='text-4xl hover:text-pomp-and-power hover:cursor-pointer'/></a>
            <a href='https://github.com/Tiffany-Zhu5303' target='_blank' rel='noreferrer'><FaGithubSquare className='text-4xl hover:text-pomp-and-power hover:cursor-pointer'/></a>
          </div>
        </div>
      </div>
      <div className='p-8 mb-20'>
        <GraduationCountdown/>
      </div>
    </div>
  );
};
