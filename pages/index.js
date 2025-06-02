import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <div className='w-full p-8 mt-20 flex flex-col justify-center items-center overflow-x-hidden'>
        <h1 className='font-bold text-[10vw]'>I'm Tiffany Zhu</h1>
        <p className='text-[2vw] py-4 leading-[2vw]'>
          Welcome to my personal web app!
          <br/>I'm a data engineering intern at the Metropolitan Transportation Authority.
          <br/>My goal is to make a positive impact on the world with technology and data!
        </p>
        <div className='flex'>
          <a href='https://www.linkedin.com/in/tiffany-zhu-tz' target='_blank' rel='noreferrer'><FaLinkedin className='text-4xl hover:text-pomp-and-power hover:cursor-pointer'/></a>
          <a href='https://github.com/Tiffany-Zhu5303' target='_blank' rel='noreferrer'><FaGithubSquare className='text-4xl hover:text-pomp-and-power hover:cursor-pointer'/></a>
        </div>
      </div>
    </div>
  );
};
