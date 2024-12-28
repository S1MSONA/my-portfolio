import React from "react";
import { motion } from "framer-motion";
import img2 from "../assets/project_img/img2.jpg";
import img3 from "../assets/project_img/img3.jpg";
import img4 from "../assets/project_img/img4.jpg";
import img8 from "../assets/project_img/img8.jpg";
import img9 from "../assets/project_img/img9.jpg";
import img10 from "../assets/project_img/img10.jpg";

const lists = [
  {
    img: img2,
    title: "Video Editing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    index: 1,
  },
  {
    img: img3,
    title: "Shop Website",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    index: 2,
  },
  {
    img: img4,
    title: "Online Store",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    index: 3,
  },
  {
    img: img8,
    title: "School Management System",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    index: 4,
  },
  {
    img: img9,
    title: "Ecormmerce Website",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    index: 5,
  },
  {
    img: img10,
    title: "Portfolio Website",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    index: 6,
  },
];
const Project = () => {
  return (
    <main className="dark:bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] mx-auto pb-12 px-8 md:px-20 xl:px-40 transition-all duration-300">
      <h2 className="dark:text-white text-2xl font-bold text-center mb-12 pt-9 group">
        Our Projects
      </h2>
      <article className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {lists.map(({ img, title, description }, index) => (
          <motion.div
            key={index}
            className="bg-gray-200 p-2 rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative flex flex-col items-center justify-center bg-gray-700 rounded-lg overflow-hidden group">
              <div className="overflow-hidden">
                <img
                  className="h-[250px] w-full object-cover rounded-lg transform group-hover:scale-110 transition-transform duration-300"
                  src={img}
                  alt="project_img"
                />
              </div>
              <span className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl font-semibold text-white px-4">
                  {title}
                </h3>
                <p className="text-xl text-white px-4 text-center">
                  {description}
                </p>
              </span>
            </div>
          </motion.div>
        ))}
      </article>
    </main>
  );
};

export default Project;
