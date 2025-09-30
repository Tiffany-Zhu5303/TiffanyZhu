import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';

export default function HomePage() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <div className="w-full min-h-screen flex flex-col justify-center items-center overflow-x-hidden">
        <div className='text-center flex flex-col items-center'>
          <h1 className="font-bold text-[10vw] leading-tight">
            I'm 
            <span className='block md:inline md: p-0'> Tiffany</span>            
            <span className='block pb-4 md:inline md: p-0'> Zhu</span>
            </h1>
          <p className="text-lg lg:text-2xl pb-4 leading-snug w-2/3">
            A developer who enjoys creating user-friendly, fun web experiences and exploring data to tell meaningful stories and make lives easier.
          </p>
        </div>
        <div className="flex">
          <a
            href="https://www.linkedin.com/in/tiffany-zhu-tz"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="text-3xl md:text-4xl lg:text-5xl hover:text-pomp-and-power hover:cursor-pointer" />
          </a>
          <a
            href="https://github.com/Tiffany-Zhu5303"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithubSquare className="text-3xl md:text-4xl lg:text-5xl hover:text-pomp-and-power hover:cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
}