import Link from 'next/link';
import Image from 'next/image';
import TechStackList from '@/data/tech-stack';

export default function Experiences() {
    return(
        <div className="w-full min-h-screen flex flex-col justify-center items-center overflow-x-hidden bg-gradient-to-br from-lavender-floral via-periwinkle to-seashell">
          <p className='text-4xl md:text-6xl font-bold p-4 md:p-8 mt-16 md:mt-20'>Technical Skills</p>
          <div className='w-full flex justify-evenly grid grid-cols-1 md:grid-cols-2 gap-8 p-4 md:p-8'>
            {TechStackList.map((techStack, index) => (
              <div key={index} className='w-full flex flex-col items-center bg-white/25 rounded-lg p-10 transition duration-700 transform hover: cursor-pointer hover:scale-105 shadow-md hover:shadow-lg transition-shadow duration-300'>
                <h2 className='text-xl md:text-2xl lg:text-4xl font-bold mb-4'>{techStack.name}</h2>
                <div className={`grid ${techStack.technologies.length == 1 ? 'lg:grid-cols-1 place-items-center' : 'grid-cols-1 lg:grid-cols-2'} gap-4`}>
                  {techStack.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className='flex items-center space-x-4 w-full p-4'>
                      <Image 
                        src={tech.icon} 
                        alt={tech.name} 
                        width={100}
                        height={100}
                        className='w-10 h-10' 
                        />
                      <span className='text-lg md:text-xl'>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <Link 
          href='/experiences/resume'
          className='md:self-start flex items-center justify-between w-fit p-4 md:p-8 mt-4 ml-8 mb-8 bg-white/25 rounded-lg transition duration-700 transform hover: cursor-pointer hover:scale-105 shadow-md hover:shadow-lg transition-shadow duration-300 text-2xl md:text-4xl font-bold'>
            View Resume
          </Link>
        </div>
    )
};