import React from "react";
import { motion } from "framer-motion";

const item = [
  {
    title: "Item 1",
    index: 1,
  },
  {
    title: "Item 2",
    index: 2,
  },
  {
    title: "Item 3",
    index: 3,
  },
  {
    title: "Item 4",
    index: 4,
  },
  {
    title: "Item 5",
    index: 5,
  },
  {
    title: "Item 6",
    index: 6,
  },
];
const Project = () => {
  return (
    <article className="dark:bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] mx-auto pb-12 px-44">
      <h2 className="dark:text-white text-2xl font-bold text-center mb-12">
        Our Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {item.map((item, index) => (
          <motion.div
            key={index}
            className="bg-gray-200 p-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {item.title}
          </motion.div>
        ))}
      </div>
    </article>
  );
};

export default Project;
