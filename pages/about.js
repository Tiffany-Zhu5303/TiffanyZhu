import Image from "next/image"
export default function About() {
    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center overflow-x-hidden bg-gradient-to-br from-lavender-floral via-periwinkle to-seashell">
            <div className='size-up size-down flex flex-col items-center justify-evenly'>
                <div className="flex justify-between items-center w-full p-8 m-8">                
                    <Image 
                        src='/Profile-pic-flowers.JPG' 
                        alt='Tiffany `&quot;`s profile picture'
                        width={500}
                        height={500} 
                        className='mx-auto border-2 w-fit h-fit rounded-full'
                    />
                    <div className="flex flex-col items-center justify-center w-1/2 mx-auto">
                        <p className='text-lg font-bold text-center'>
                            Hello World! I’m Tiffany Zhu 👋🏼
                        </p>
                        <p className="text-lg text-center">
                            I’m a data engineering intern at the Metropolitan Transportation Authority.
                            I’m about to graduate from CUNY Hunter college with bachelor's degree in Computer Science and minor in mathematics and Japanese language. 
                            My favorite courses were web development, symbolic logic, database management and Japanese language. 
                            <br/>As an aspiring software developer and data engineer, I look forward to working on various projects with different tech stacks to learn and grow my skills! 
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
};