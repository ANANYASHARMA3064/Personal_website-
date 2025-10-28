import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-primary dark:bg-gray-800 text-white py-6 mt-16 rounded-t-xl shadow-inner">
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
