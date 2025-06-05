import Link from 'next/link';

export default function Experiences() {
    return(
        <div className="w-full min-h-screen flex flex-col justify-center items-center overflow-x-hidden bg-gradient-to-br from-lavender-floral via-periwinkle to-seashell">
          <Link 
          href='/experiences/resume'
          className='flex items-center justify-between w-fit p-4 m-4 bg-white/25 rounded-lg transition duration-700 transform hover: cursor-pointer hover:scale-105 shadow-md hover:shadow-lg transition-shadow duration-300 text-2xl font-bold'>
            View Resume
          </Link>
        </div>
    )
};