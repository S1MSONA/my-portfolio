import React from "react";
import { TypeAnimation } from "react-type-animation";
import img12 from "../assets/img/img12.png";
const Hero = () => {
  return (
    <main className="flex flex-col md:flex-row justify-between items-center dark:bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] dark:text-[#e8e8e8] transition-all duration-300 xl:px-28 z-0">
      <div className="pt-[2rem] sm:pt-[4rem] pb-8 flex flex-col gap-2 w-full px-8 sm:px-12 md:px-12">
        <p className="text-xl">Welcome to my portfolio</p>
        <h1 className="uppercase text-3xl font-semibold bg-gradient-to-r from-blue-600 to-pink-500 text-transparent bg-clip-text">
          Hello, i'm Sona
        </h1>
        <TypeAnimation
          sequence={[
            "I am a  web developer",
            1500,
            "I am a Front end developer",
            1500,
            "I am a fullstack developer",
            1500,
            "I am a Graphic designer",
            1500,
          ]}
          wrapper="span"
          speed={200}
          style={{ fontSize: "1.5rem", display: "inline-block" }}
          repeat={Infinity}
        />
        <p>
          Welcome to my portfolio website. My name is Sona I am new web front
          end developer, and this is my first web portfolio that using React js
          and tailwindcss. I really happy to create this template. I want to
          practice my front end skills with any technology programming
          languages, and its framworks. and you will see more things in this
          website.
        </p>
        <a
          className="bg-gradient-to-tr from-blue-400 to-sky-800 py-2 px-4 w-40 text-center text-xl font-semibold rounded-lg mt-6 hover:scale-110 transition-all duration-300 text-white"
          href=""
        >
          Let's Start!
        </a>
      </div>
      <div className=" md:w-1/2 flex justify-center items-center relative pb-24 md:mr-24 xl:mr-16 lg:w-1/2 px-8">
        <img
          className="rounded-3xl shadow-custom shadow-blue-300 h-[450px] md:h-[300px] lg:h-[450px] mt-24"
          src={img12}
          alt=""
        />
      </div>
    </main>
  );
};

export default Hero;
