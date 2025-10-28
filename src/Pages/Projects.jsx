import React from "react";
import { FaGithub } from "react-icons/fa";
import project1Img from "../assets/project1.png";
import project2Img from "../assets/project1.png";
import project3Img from "../assets/project1.png";

const projects = [
  {
    title: "WatchList App",
    description: "A cute little movie tracker with search and save features.",
    image: project1Img,
    tech: ["React", "PostgreSQL", "Supabase", "TailwindCSS"],
    github: "https://github.com/yourusername/watchlist-app",
  },
  {
    title: "Weather Dashboard",
    description: "A calm weather app with gentle animations and live updates.",
    image: project2Img,
    tech: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
    github: "https://github.com/yourusername/weather-dashboard",
  },
  {
    title: "Portfolio Website",
    description: "This exact site — built with good vibes and coffee ☕.",
    image: project3Img,
    tech: ["React", "Vite", "TailwindCSS"],
    github: "https://github.com/yourusername/personal-website",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-[#FFF8F0] dark:bg-[#1B1B1F] text-[#3D3D3D] dark:text-gray-100 p-10">
      <h1 className="text-5xl font-fancy text-center mb-10 text-[#D4A5A5] dark:text-[#AEC6CF]">
        Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#FFF5E4] dark:bg-[#2D2A32] rounded-3xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-[#f6e7de]/60 dark:border-[#444]"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-3xl"
            />
            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                <h2 className="text-2xl font-bold text-[#C2A7E2] dark:text-[#BFA2DB] mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <h3 className="text-lg font-semibold text-[#A7C7A9] dark:text-[#B5E0D3] mb-2">
                  Tech Stack:
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-[#E8F8F5] dark:bg-[#3B3340] text-[#3D3D3D] dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#C8E4B2] hover:bg-[#B6DFA7] text-[#3D3D3D] font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  <FaGithub className="text-xl" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
