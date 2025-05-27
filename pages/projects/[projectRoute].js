import { useRouter } from "next/router";
import ProjectsList from "../../data/projects"; 

export default function ProjectPage() {
  const router = useRouter();
  const { projectRoute } = router.query;

  const project = ProjectsList.find(
    project => project.title.toLowerCase().replace(/\s+/g, "") === projectRoute
  );

  if (!project) return <p>Project not found.</p>;

  return (
    <div className="p-4 mt-20">
      <h1 className="text-4xl font-bold">{project.title}</h1>
      <p className="mt-2">{project.description}</p>
      {project.slidesImages?.map((src, i) => (
        <img key={i} src={src} alt={project.title} className="my-4" />
      ))}
      {project.slidesCaption && (
        <p>{project.slidesCaption}</p>
      )}
    </div>
  );
}