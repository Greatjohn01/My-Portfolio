import React from 'react'
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Projects = [
    {
        title: "Real Estate Platform",
        description: "A modern real estate web app for browsing, searching, and listing properties, featuring advanced filters and a seamless user experience.",
        image: "/Image/estate-hub.jpeg",
        tech: ["React", "Tailwind CSS", "React-Icons"],
        link: { demo: "#", github: "https://github.com/Greatjohn01/EstateHub.git" }
    },
    {
        title: "Software Developers App",
        description: "A robust dashboard for software teams to manage projects, track progress, and collaborate efficiently, built with React and Express.",
        image: "/Image/dev-connect.jpeg",
        tech: ["React", "JavaScript", "Tailwind CSS"],
        link: { demo: "#", github: "#" }
    },
    {
        title: "Book Store App",
        description: "An online bookstore platform for discovering, reviewing, and purchasing books, with a clean UI and fast search capabilities.",
        tech: ["React", "Next.js", "JavaScript", "Tailwind CSS", "React-Icons"],
        image: "/Image/bookstore.jpg",
        link: { demo: "#", github: "#" }
    }
];


const FeaturedProjects = () => {
    return (
        <div className="bg-gray-800 text-white py-16 px-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
                </div>

                <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
                    {Projects.map((project, idx) => (
                        <div key={idx} className="bg-gray-700 rounded-xl overflow-hidden shadow-lg transition transform hover:scale-105">
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                                <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, techIdx) => (
                                        <span key={techIdx} className="bg-blue-800 text-sm px-3 py-1 rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4">
                                    <a href={project.link.demo} target="_blank" rel="noopener noreferrer" className="
                                    flex items-center gap-2 text-blue-600 hover:text-blue-300 hover:underline"><BsBoxArrowUpRight />Live Demo</a>

                                    <a href={project.link.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-gray-300 hover:underline"><FaGithub/>Github</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default FeaturedProjects
