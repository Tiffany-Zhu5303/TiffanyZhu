"use client";
import ProjectsList from "../../data/projects";
import ProjectCard from "../../components/ProjectCard";
import { useState } from "react";

export default function Projects() {
    const [tags, setTags] = useState("All");

    // Get unique tags
    const uniqueTags = ["All", ...new Set(ProjectsList.flatMap((i) => i.tags))];

    // Apply filters
    const filtered = ProjectsList.filter((item) => {
        const matchestags = tags === "All" || item.tags.includes(tags);
        return matchestags;
    });

    return (
        <div className="w-full min-h-screen flex flex-col items-center overflow-x-hidden bg-gradient-to-br from-lavender-floral via-periwinkle to-seashell">
            <p className="text-4xl md:text-6xl font-bold p-4 mt-16 md:mt-20 text-center">
                Featured Projects
            </p>
            <div className='w-full flex flex-col items-center m-8'>
                {/* tags dropdown */}
                <div className="flex gap-4 mb-6 justify-center items-center">
                    <p className="text-xl">Filter By:</p>
                    <select
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    className="border p-2 rounded bg-white/50">
                    {uniqueTags.map((tag) => (
                        <option key={tag} value={tag}>
                        {tag}
                        </option>
                    ))}
                    </select>
                </div>
                { filtered.map((project, index) => (
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