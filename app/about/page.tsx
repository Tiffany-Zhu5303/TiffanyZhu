import Image from "next/image"
export default function About() {
    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center overflow-x-hidden bg-gradient-to-br from-lavender-floral via-periwinkle to-seashell">
            <div className="flex flex-col md:flex-row justify-between items-between w-full p-4 m-4 md:mt-20">                
                <Image 
                    src='/images/profile-pic-flowers.jpeg' 
                    alt='Tiffany `&quot;`s profile picture'
                    width={500}
                    height={500} 
                    className='mx-auto border-2 w-5/6 h-5/6 md:w-1/2 md:h-1/2 rounded-full m-8 md:m-4 md:float-left'
                />
                <div className="flex flex-col items-center justify-center mx-auto pl-4">
                    <p className='text-4xl md:text-6xl font-bold text-center'>
                        Hello World!
                    </p>
                    <p className="text-lg md:text-2xl p-4 leading-tight">
                        I’m currently a data engineering intern at the Metropolitan Transportation Authority in New York City.
                        <br/><br/>
                        I graduated from CUNY Hunter college with a bachelor's degree in Computer Science and minor in mathematics and Japanese language. 
                        My favorite courses were web development, symbolic logic, database management and Japanese language. 
                        <br/><br/>
                        Currently, I'm working on projects that automate and optimize data workflows at the MTA, leveraging Apache Airflow to improve pipeline efficiency. 
                        I'm also exploring intelligent document processing use cases with Google's Document AI, diving into how AI can streamline data extraction across large-scale systems.
                        When I'm not coding, I enjoy binging shows, reading, and spending time with and friends and family. 
                    </p>
                </div>
            </div>
        </div>
    )
};