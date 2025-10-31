import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="flex justify-between items-center p-6 rounded-b-xl shadow-md
    bg-gradient-to-r from-[#FFC1C1] via-[#FFB3B3] to-[#FFA5A5] 
    dark:bg-gradient-to-r dark:from-[#5D4E7A] dark:via-[#6E5D8A] dark:to-[#7F6C9A]
    text-gray-800 dark:text-white">
  <div className="text-2xl">🐼</div>
  <div className="space-x-4">
    <Link to="/" className="hover:text-accent transition">About</Link>
    <Link to="/projects" className="hover:text-accent transition">Projects</Link>
    <Link to="/blogs" className="hover:text-accent transition">Blogs</Link>
    <Link to="/hackathons" className="hover:text-accent transition">Hackathons</Link>
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="px-3 py-1 rounded bg-primary text-white font-semibold hover:bg-accent transition-colors"
    >
      {darkMode ? "Light" : "Dark"}
    </button>
  </div>
</nav>

  );
};

export default Navbar;
