import { useRouter } from "next/router";
import ProjectsList from "../../data/projects"; 
import ImageCarousel from "@/components/ImageCarousel";

export default function ProjectPage() {
  const router = useRouter();
  const { projectRoute } = router.query;

  const project = ProjectsList.find(
    project => project.title.toLowerCase().replace(/\s+/g, "") === projectRoute
  );

  if (!project) return <p>Project not found.</p>;

  return (
    <div className="p-4 mt-20 w-full flex flex-col items-center">
      <h1 className="text-4xl font-bold">{project.title}</h1>
      <p className="mt-2 w-3/5 p-4 leading-[2vh]">{project.longDescription}</p>
      <ImageCarousel 
        images={project.carousel.images} 
        titles={project.carousel.titles}
        descriptions={project.carousel.descriptions}/>
    </div>
  );
}