import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="flex justify-between items-center p-6 bg-primary dark:bg-gray-800 text-white rounded-b-xl shadow-md">
      <div className="text-xl font-bold">My Portfolio</div>
      <div className="space-x-4">
        <Link to="/" className="hover:text-secondary">About</Link>
        <Link to="/projects" className="hover:text-secondary">Projects</Link>
        <Link to="/blogs" className="hover:text-secondary">Blogs</Link>
        <Link to="/hackathons" className="hover:text-secondary">Hackathons</Link>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-3 py-1 rounded bg-secondary text-primary font-semibold hover:bg-accent transition-colors"
        >
          {darkMode ? "Light" : "Dark"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
