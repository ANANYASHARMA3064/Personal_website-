import React from "react";
import { FaBookOpen } from "react-icons/fa";
import blog1Img from "../assets/image.jpeg";
import blog2Img from "../assets/image.jpeg";
import blog3Img from "../assets/image.jpeg";

const blogs = [
  {
    title: " ",
    description:
      "I just want to sleep  ",
    image: blog1Img,
    date: "Jan 2026",
    link: "https://yourbloglink.com/react-app-journey",
  },
  {
    title: "papa",
    description:
      "papa bear",
    image: blog2Img,
    date: "September 30, 2025",
    link: "https://yourbloglink.com/code-and-college",
  }
 
];

const Blogs = () => {
  return (
    <div className="min-h-screen bg-[#FFF8F0] dark:bg-[#1B1B1F] text-[#3D3D3D] dark:text-gray-100 p-10">
      <h1 className="text-5xl font-fancy text-center mb-10 text-[#D4A5A5] dark:text-[#AEC6CF]">
        Blogs
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-[#FFF5E4] dark:bg-[#2D2A32] rounded-3xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-[#f6e7de]/60 dark:border-[#444]"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover rounded-t-3xl"
            />
            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                <h2 className="text-2xl font-bold text-[#C2A7E2] dark:text-[#BFA2DB] mb-2">
                  {blog.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm italic">
                  {blog.date}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {blog.description}
                </p>
              </div>

              <div className="mt-auto">
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#C8E4B2] hover:bg-[#B6DFA7] text-[#3D3D3D] font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  <FaBookOpen className="text-xl" />
                  Read Blog
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
