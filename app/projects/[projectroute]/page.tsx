import ProjectsList from "@/data/projects"; 
import ImageCarousel from "@/components/ImageCarousel";

interface ProjectPageProps{
  params: 
    Promise<{
      projectroute: string
    }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const projectroute = await params;

  const project = ProjectsList.find(
    project => project.title.toLowerCase().replace(/\s+/g, "") === projectroute.projectroute
  );

  if (!project) return <p>Project not found.</p>;

  return (
    <div className="p-4 mt-20 w-full flex flex-col items-center">
      <h1 className="text-4xl md:text-6xl font-bold text-center">{project.title}</h1>
      <p className="mt-4 w-5/6 leading-none text-md lg:text-xl">{project.longDescription}</p>
      <ImageCarousel 
        images={project.carousel!.images} 
        titles={project.carousel!.titles}
        descriptions={project.carousel!.descriptions}/>
    </div> 
  );
}