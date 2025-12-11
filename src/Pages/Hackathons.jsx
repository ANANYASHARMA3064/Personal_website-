import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaTrophy } from "react-icons/fa";
import hack1Img from "../assets/DeltaHacks.png";
import hack2Img from "../assets/ElleHacks.png";
import hack3Img from "../assets/HTV.png";
import mecImg from "../assets/Mec.png";


const hackathons = [
  {
    name: "DeltaHacks X",
    description:
      "Volunteered and helped manage the event. Met inspiring women in tech who motivated me to grow as a developer.",
    image: hack1Img,
    role: "Volunteer",
    date: "January 2025",
    link: "https://deltahacks.com",
  },
  {
    name: "ElleHacks 2025",
    description:
      "Attended workshops, connected with passionate women engineers, and got inspired to chase big goals.",
    image: hack2Img,
    role: "Attendee",
    date: "February 2025",
    link: "https://ellehacks.com",
  },
  {
    name: "Hack the North 2025",
    description:
      "Joined Canada’s biggest hackathon — worked with an amazing team to bring an idea to life in just 36 hours!",
    image: hack3Img,
    role: "Participant",
    date: "September 2025",
    link: "https://hackthenorth.com",
  },
  {
    name: "MEC McMaster 2025",
    description:
      "Participated in MEC McMaster, collaborated with peers, and explored creative project ideas.",
    image: mecImg,
    role: "Participant",
    date: "March 2025",
    link: "https://www.instagram.com/macengcomp/?hl=en", // replace with actual link
  },
  {
    name: "DeltaHacks XI",
    description:
      "Volunteered and helped manage the event. Met inspiring women in tech who motivated me to grow as a developer.",
    image: hack1Img,
    role: "participant",
    date: "January 2025",
    link: "https://deltahacks.com",
  },
];

// Updated container and bubble size
const containerWidth = 600;
const containerHeight = 600;
const bubbleSize = 180;

const generatePositions = (count) => {
  const positions = [];
  const maxAttempts = 1000;

  for (let i = 0; i < count; i++) {
    let attempts = 0;
    let valid = false;
    let x = 0;
    let y = 0;

    while (!valid && attempts < maxAttempts) {
      x = Math.random() * (containerWidth - bubbleSize);
      y = Math.random() * (containerHeight - bubbleSize);

      valid = positions.every(
        (pos) =>
          Math.hypot(pos.x - x, pos.y - y) > bubbleSize // prevent overlap
      );

      attempts++;
    }

    positions.push({ x, y });
  }

  return positions;
};

const Hackathons = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    setPositions(generatePositions(hackathons.length));
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF8F0] dark:bg-[#1B1B1F] text-[#3D3D3D] dark:text-gray-100 px-10 py-16 flex flex-col lg:flex-row gap-16 relative">
      {/* Left Section - Centered */}
      <div className="lg:w-1/2 flex flex-col items-center justify-center text-center lg:text-center">
        <h1 className="text-6xl font-fancy mb-6 text-[#D4A5A5] dark:text-[#AEC6CF]">
          Hackathons
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl">
          I absolutely love going to hackathons — they’re where I meet inspiring
          women in tech, learn from hands-on experiences, and get motivated to
          chase my big software engineering dreams. From volunteering at{" "}
          <span className="text-[#C2A7E2] font-semibold">DeltaHacks</span> to
          attending <span className="text-[#A7C7A9] font-semibold">ElleHacks</span>,
          each event has helped me grow and find my path in tech.
        </p>
      </div>

      {/* Right Section - Floating Bubbles */}
      <div
        className="lg:w-1/2 relative"
        style={{ width: containerWidth, height: containerHeight }}
      >
        {positions.map((pos, i) => (
          <motion.a
            key={i}
            href={hackathons[i].link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute block"
            style={{ top: pos.y, left: pos.x }}
            animate={{
              x: [0, Math.random() * 80 - 40, 0],
              y: [0, Math.random() * 80 - 40, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Bubble Circle */}
            <div className="relative w-[180px] h-[180px] bg-[#FFF5E4] dark:bg-[#2D2A32] rounded-full shadow-lg overflow-hidden border border-[#f6e7de]/60 dark:border-[#444]">
              <img
                src={hackathons[i].image}
                alt={hackathons[i].name}
                className="w-full h-full object-cover rounded-full opacity-80 transition duration-300"
              />
            </div>

            {/* Text Below Bubble */}
            <div className="mt-3 text-center">
              <h2 className="text-sm font-bold text-[#C2A7E2] dark:text-[#BFA2DB]">
                {hackathons[i].name}
              </h2>
              <p className="text-xs text-gray-600 dark:text-gray-400 italic">
                {hackathons[i].date} — {hackathons[i].role}
              </p>
              <FaTrophy className="text-[#C8E4B2] dark:text-[#B6DFA7] text-sm mx-auto mt-1" />
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Hackathons;
