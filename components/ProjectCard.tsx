import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import Image from "next/image";
import Link from "next/link";
import { Project } from "../data/types";
import { DialogTitle } from "@radix-ui/react-dialog";

export default function ProjectCard({ 
    title, 
    shortDescription, 
    longDescription, 
    technologies, 
    image, 
    link, 
    github, 
    collaborators, 
    projectroute } : Project) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Card className="flex flex-col md:flex-row items-center justify-between w-4/5 m-4 bg-white/25 rounded-lg transition duration-700 transform hover: cursor-pointer hover:scale-105 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="w-full md:w-1/2 h-full">
                        <Image 
                            src={image} 
                            alt={title} 
                            width={700}
                            height={700}
                            className="w-full h-full object-cover rounded-lg" />
                    </div>

                    <div className="flex flex-col justify-center items-center w-5/6 md:w-1/2 text-dark-purple">
                        <CardHeader className="flex justify-center items-center w-fit">
                            <CardTitle className="text-xl md:text-2xl lg:text-4xl font-bold text-center">{title}</CardTitle>
                            <CardDescription className="text-md md:text-lg w-full text-center">{shortDescription}</CardDescription>
                        </CardHeader>
                    </div>
                </Card>
            </DialogTrigger>
            <DialogTitle className="hidden">
                {title} Details
            </DialogTitle>
            <DialogContent className="h-[90vh] w-[90vw] max-w-sm md:max-w-md lg:max-w-lg bg-magnolia rounded-lg overflow-y-auto">
                <h1 className="font-bold">{title}</h1>
                <p>{longDescription}</p>
                <div>
                    <p className="text-lg font-bold pb-4">Tech Stack:</p>
                    <ul className="list-disc pl-5">
                        {technologies.map((tech, index) => (
                            <li key={index} className="text-sm">{tech}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <p className="text-lg font-bold pb-4">Collaborators:</p>
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
                </div>
                <div className="flex justify-center items-center">
                    <a href={github} target="_blank" rel="noopener noreferrer" className="m-4 inline-block px-4 py-2 w-fit bg-lavender-floral/30 rounded hover:bg-wisteria hover:text-white transition duration-300">
                        View Code
                    </a>
                    
                    {link ?
                    <a href={link} target="_blank" rel="noopener noreferrer" className="m-4 inline-block px-4 py-2 w-fit bg-lavender-floral/30 rounded hover:bg-wisteria hover:text-white transition duration-300">
                        View Project
                    </a>    
                    : 
                    <Link href={`/projects/${projectroute}`} className="m-4 inline-block px-4 py-2 w-fit bg-lavender-floral/30 rounded hover:bg-wisteria hover:text-white transition duration-300">
                        View Project
                    </Link>                  
                    }
                </div>
            </DialogContent>
        </Dialog>
    );
}