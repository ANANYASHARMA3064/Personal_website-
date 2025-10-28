import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer"; // import the footer
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Blogs from "./Pages/Blogs";
import Hackathons from "./Pages/Hackathons";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  React.useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <Router>
      {/* Make root a flex column and full height */}
      <div className="flex flex-col min-h-screen transition-colors duration-500 text-gray-900 dark:text-gray-100
    bg-gradient-to-br from-[#FFF5E4] via-[#FFEAD1] to-[#FFD9C7] 
    dark:bg-gradient-to-br dark:from-[#1F1B24] dark:via-[#2B2730] dark:to-[#39343F]">
        
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        
        {/* Main content grows to fill space */}
        <main className="flex-grow p-6">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/hackathons" element={<Hackathons />} />
          </Routes>
        </main>

        {/* Footer sticks at bottom if content is short */}
        <Footer />
      </div>
    </Router>
  );
}
