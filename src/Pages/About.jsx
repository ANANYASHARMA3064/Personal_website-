import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import image from "../assets/image.jpeg";

const About = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-background text-foreground">
      {/* Left side — Text content */}
      <div className="md:w-1/2 text-left space-y-6">
        <h1 className="font-fancy text-5xl font-bold text-primary dark:text-accent mb-4">
          About Me
        </h1>
        <p className="text-lg leading-relaxed">
          Hi, I’m Ananya Sharma — a software engineering student at McMaster
          University passionate about full-stack development and cloud
          engineering. I love building modern, clean, and efficient web apps.
        </p>
        <p className="text-lg leading-relaxed">
          This site was vibe-coded — but trust me, I can make it myself too 😎
        </p>

        {/* Social icons */}
        <div className="flex space-x-4 mt-4">
          <a
            href="mailto:your.email@example.com"
            className="text-2xl text-primary dark:text-accent hover:text-secondary transition"
          >
            <MdEmail />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-primary dark:text-accent hover:text-secondary transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-primary dark:text-accent hover:text-secondary transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Right side — Circle image */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <img
  src={image}
  alt="Ananya"
  className="w-[25rem] h-[25rem] object-cover rounded-full shadow-lg border-4 border-primary"
/>

      </div>
    </section>
  );
};

export default About;
