import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";

export default function ProjectCard({ title, shortDescription, longDescription, technologies, image, link, video, github, collaborators }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Card className="flex items-center justify-between w-4/5 p-4 m-4 bg-white/25 rounded-lg transition duration-700 transform hover: cursor-pointer hover:scale-105 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <Image 
                        src={image} 
                        alt={title} 
                        width={600}
                        height={600}
                        className="w-1/2 h-1/2 object-cover rounded-t-lg" />

                    <div className="flex flex-col justify-center items-center w-1/2">
                        <CardHeader className="flex justify-center items-center w-fit">
                            <CardTitle className="text-2xl font-bold">{title}</CardTitle>
                            <CardDescription className="text-sm w-5/6 text-center">{shortDescription}</CardDescription>
                        </CardHeader>
                    </div>
                </Card>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md bg-magnolia rounded-lg">
                <h1 className="font-bold">{title}</h1>
                <p>{longDescription}</p>
                <p className="text-lg font-bold">Tech Stack:</p>
                <ul className="list-disc pl-5">
                    {technologies.map((tech, index) => (
                        <li key={index} className="text-sm">{tech}</li>
                    ))}
                </ul>
                <p className="text-lg font-bold">Collaborators:</p>
                <ul className="list-disc pl-5">
                    {collaborators.map((collab, index) => (
                        <li key={index} className="text-sm">
                            {collab.link ? (
                                <a href={collab.link} target="_blank" rel="noopener noreferrer" className="text-wisteria hover:underline">
                                    {collab.name}
                                </a>
                            ) : (
                                collab.name
                            )}
                            {collab.role && ` (${collab.role})`}
                        </li>
                    ))}
                </ul>
                <div className="flex justify-center items-center">
                    <a href={github} target="_blank" rel="noopener noreferrer" className="m-4 inline-block px-4 py-2 w-fit bg-lavender-floral/30 rounded hover:bg-wisteria hover:text-white transition duration-300">
                        View Code
                    </a>
                    <a href={link} target="_blank" rel="noopener noreferrer" className="m-4 inline-block px-4 py-2 w-fit bg-lavender-floral/30 rounded hover:bg-wisteria hover:text-white transition duration-300">
                        View Project
                    </a>                    
                </div>
            </DialogContent>
        </Dialog>
    );
}