import ProjectsList from "../../data/projects";
import ProjectCard from "../../components/ProjectCard";

export default function Projects() {
    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center overflow-x-hidden bg-gradient-to-br from-lavender-floral via-periwinkle to-seashell">
            <div className='w-full size-up size-down flex flex-col items-center m-20'>
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