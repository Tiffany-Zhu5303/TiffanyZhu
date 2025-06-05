import ProjectsList from "../../../data/projects"; 
import ImageCarousel from "../../../components/ImageCarousel";
import { ProjectPageProps } from "@/data/types";

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { projectroute } = params;

  const project = ProjectsList.find(
    project => project.title.toLowerCase().replace(/\s+/g, "") === projectroute
  );

  if (!project) return <p>Project not found.</p>;

  return (
    <div className="p-4 mt-20 w-full flex flex-col items-center">
      <h1 className="text-4xl font-bold">{project.title}</h1>
      <p className="mt-2 w-4/5 lg:w-3/5 p-4 leading-[2vh]">{project.longDescription}</p>
      <ImageCarousel 
        images={project.carousel!.images} 
        titles={project.carousel!.titles}
        descriptions={project.carousel!.descriptions}/>
    </div>
  );
}