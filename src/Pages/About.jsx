import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import image from "../assets/image.jpeg";
import {
  SiHtml5,
  SiCss3,
  SiReact,
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";

const About = () => {
  return (
    <section className="flex flex-col items-center justify-center px-8 py-16 bg-gradient-to-b from-pink-100 via-rose-100 to-pink-50 dark:from-[#2b223a] dark:via-[#3c2e53] dark:to-[#4d3970] text-foreground">
      {/* About Me Section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl">
        {/* Left side — Text content */}
        <div className="md:w-1/2 text-left space-y-6">
          <h1 className="font-fancy text-5xl font-bold text-pink-600 dark:text-pink-300 mb-4">
            About 
          </h1>
          <p className="text-lg leading-relaxed">
            Hi! I’m <span className="font-semibold text-pink-500">Ananya</span>,
            a second-year Software Engineering student at McMaster University.
          </p>
          <p className="text-lg leading-relaxed">
            This site was vibe-coded — but trust me, I can make it myself too 😎
          </p>

          {/* Social icons */}
          <div className="flex space-x-4 mt-4">
            <a
              href="shara281@mcmaster.ca"
              className="text-3xl text-pink-500 dark:text-pink-300 hover:scale-125 transition-transform"
            >
              <MdEmail />
            </a>
            <a
              href="https://github.com/ANANYASHARMA3064"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-pink-500 dark:text-pink-300 hover:scale-125 transition-transform"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ananya-sharma-463b53344/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-pink-500 dark:text-pink-300 hover:scale-125 transition-transform"
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
            className="w-[26rem] h-[26rem] object-cover rounded-full shadow-[0_0_40px_-10px_rgba(255,105,180,0.7)] border-4 border-pink-400"
          />
        </div>
      </div>

      {/* Skills Section */}
      <motion.div
        className="mt-24 text-center w-full max-w-5xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-pink-600 dark:text-pink-300 mb-8">
          My Skills 💻
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          I love building things that look good and actually work — here’s what I
          use to make that happen:
        </p>

        {/* Floating skill icons */}
        <div className="relative flex flex-wrap justify-center gap-10">
          {[
            { icon: <SiHtml5 />, color: "#E44D26", label: "HTML" },
            { icon: <SiCss3 />, color: "#1572B6", label: "CSS" },
            { icon: <SiJavascript />, color: "#F7DF1E", label: "JavaScript" },
            { icon: <SiReact />, color: "#61DBFB", label: "React" },
            { icon: <SiNodedotjs />, color: "#68A063", label: "Node.js" },
            { icon: <SiExpress />, color: "#808080", label: "Express.js" },
            { icon: <SiPostgresql />, color: "#336791", label: "PostgreSQL" },
            { icon: <SiMongodb />, color: "#4DB33D", label: "MongoDB" },
            { icon: <SiPython />, color: "#3776AB", label: "Python" },
            { icon: <SiCplusplus />, color: "#00599C", label: "C++" },
          ].map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center space-y-2"
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 2 + index * 0.2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <div
                className="p-6 rounded-full shadow-lg hover:scale-110 transition-transform"
                style={{
                  background: `radial-gradient(circle at top left, ${skill.color}33, transparent 70%)`,
                  boxShadow: `0 0 25px ${skill.color}55`,
                }}
              >
                <div className="text-5xl" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
              </div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {skill.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
