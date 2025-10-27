import React from "react";
import image from "../assets/image.jpeg"; // adjust this path if needed

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
      </div>

      {/* Right side — Circle image */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <img
          src={image}
          alt="Ananya"
          className="w-80 h-80 object-cover rounded-full shadow-lg border-4 border-primary"
        />
      </div>
    </section>
  );
};

export default About;

