import Link from 'next/link';
import Image from 'next/image';
import TechStackList from '@/data/tech-stack';

export default function Experiences() {
    return(
        <div className="w-full min-h-screen flex flex-col justify-center items-center overflow-x-hidden bg-gradient-to-br from-lavender-floral via-periwinkle to-seashell">
          <div className='w-full flex justify-evenly grid grid-cols-1 md:grid-cols-2 gap-8 p-8 mt-20'>
            {TechStackList.map((techStack, index) => (
              <div key={index} className='w-full flex flex-col items-center bg-white/25 rounded-lg p-10 shadow-md hover:shadow-lg transition-shadow duration-300'>
                <h2 className='text-3xl font-bold mb-4'>{techStack.name}</h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                  {techStack.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className='flex items-center space-x-4 w-full p-4'>
                      <Image 
                        src={tech.icon} 
                        alt={tech.name} 
                        width={100}
                        height={100}
                        className='w-10 h-10' 
                        />
                      <span className='text-lg'>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <Link 
          href='/experiences/resume'
          className='flex items-center justify-between w-fit p-4 m-4 bg-white/25 rounded-lg transition duration-700 transform hover: cursor-pointer hover:scale-105 shadow-md hover:shadow-lg transition-shadow duration-300 text-2xl font-bold'>
            View Resume
          </Link>
        </div>
    )
};