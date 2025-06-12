import ProjectsList from "../../data/projects";
import ProjectCard from "../../components/ProjectCard";

export default function Projects() {
    return (
        <div className="w-full min-h-screen flex flex-col items-center overflow-x-hidden bg-gradient-to-br from-lavender-floral via-periwinkle to-seashell">
            <p className="text-2xl md:text-4xl font-bold p-4 mt-16 md:mt-20">
                Project Showcase
            </p>
            <div className='w-full size-up size-down flex flex-col items-center m-8'>
                { ProjectsList.map((project, index) => (
                    <ProjectCard 
                        key={index}
                        {...project}
                    />
                ))
                }
            </div>
        </div>
    )
};