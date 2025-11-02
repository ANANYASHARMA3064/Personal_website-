import React from "react";
import { FaTrophy } from "react-icons/fa";
import hack1Img from "../assets/image.jpeg";
import hack2Img from "../assets/image.jpeg";
import hack3Img from "../assets/image.jpeg";

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
];

const Hackathons = () => {
  return (
    <div className="min-h-screen bg-[#FFF8F0] dark:bg-[#1B1B1F] text-[#3D3D3D] dark:text-gray-100 p-10">
      <h1 className="text-5xl font-fancy text-center mb-10 text-[#D4A5A5] dark:text-[#AEC6CF]">
        Hackathons
      </h1>

      {/* Intro Section */}
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          I absolutely love going to hackathons — they’re where I meet inspiring
          women in tech, learn from hands-on experiences, and get motivated to
          chase my big software engineering dreams. From volunteering at
          <span className="text-[#C2A7E2] font-semibold"> DeltaHacks</span> to
          attending <span className="text-[#A7C7A9] font-semibold">ElleHacks</span>,
          each event has helped me grow and find my path in tech.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {hackathons.map((hack, index) => (
          <div
            key={index}
            className="bg-[#FFF5E4] dark:bg-[#2D2A32] rounded-3xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-[#f6e7de]/60 dark:border-[#444]"
          >
            <img
              src={hack.image}
              alt={hack.name}
              className="w-full h-48 object-cover rounded-t-3xl"
            />
            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                <h2 className="text-2xl font-bold text-[#C2A7E2] dark:text-[#BFA2DB] mb-2">
                  {hack.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-2 text-sm italic">
                  {hack.date} — {hack.role}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {hack.description}
                </p>
              </div>

              <div className="mt-auto">
                <a
                  href={hack.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#C8E4B2] hover:bg-[#B6DFA7] text-[#3D3D3D] font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  <FaTrophy className="text-xl" />
                  View Event
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hackathons;
