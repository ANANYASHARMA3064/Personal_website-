import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center p-6 rounded-b-xl shadow-md
    bg-gradient-to-r from-[#FFC1C1] via-[#FFB3B3] to-[#FFA5A5] 
    dark:bg-gradient-to-r dark:from-[#5D4E7A] dark:via-[#6E5D8A] dark:to-[#7F6C9A]
    text-gray-800 dark:text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        <p className="text-sm mb-4 md:mb-0">
          © 2025 Ananya Sharma. Built by me with ❤️ — vibe-coded vibes optional 😎
        </p>
        <div className="flex space-x-4 text-2xl">
          <a
            href="mailto:your.email@example.com"
            className="text-white hover:text-accent transition"
          >
            <MdEmail />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-accent transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-accent transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
