import { TypeAnimation } from "react-type-animation";
import img12 from "../assets/img/img12.png";
import { motion } from "framer-motion";

const Introduce = () => {
  return (
    <main className="flex flex-col md:flex-row justify-between items-center dark:bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] dark:text-[#e8e8e8] transition-all duration-300 z-0 px-8 sm:px-14 md:px-20 xl:px-40">
      <div className="pt-[2rem] sm:pt-[4rem] pb-8 flex flex-col gap-2 w-full md:w-1/2">
        <p className="text-xl">Welcome to my portfolio</p>
        <h1 className="uppercase text-3xl font-semibold bg-gradient-to-r from-blue-600 to-pink-500 text-transparent bg-clip-text">
          Hi There!
        </h1>
        <TypeAnimation
          sequence={[
            "I am a  web developer",
            1500,
            "I am a web designer",
            1500,
            "I am a video editor",
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
          I create this portfolio to practice my front end skills with any
          technology programming languages, and its framworks.
        </p>
        <a
          className="bg-gradient-to-tr from-blue-400 to-sky-800 py-2 px-4 w-40 text-center text-xl font-semibold rounded-lg mt-6 hover:scale-110 transition-all duration-300 text-white"
          href=""
        >
          Let's Start!
        </a>
      </div>
      <div className="md:w-1/2 flex justify-center items-center relative pb-24">
        <motion.img
          className="rounded-3xl shadow-custom shadow-blue-300 h-[450px] md:h-[400px] md:w-full lg:h-[500px] mt-24"
          src={img12}
          alt=""
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
        />
      </div>
    </main>
  );
};

export default Introduce;
