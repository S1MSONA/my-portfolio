import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import backgroundImage from "../assets/img/img3.jpg";
const Hero = () => {
  return (
    <section className="relative dark:bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] dark:text-[#e8e8e8] transition-all duration-300 z-0 px-8 sm:px-14 md:px-20 xl:px-40">
      <main
        className="bg-cover bg-center h-screen sticky top-0"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className=" text-white w-full h-full bg-opacity-50 p-4 rounded flex justify-between items-center">
          <div>
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
          </div>
          <div>
            <p>Additional text can go here.</p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Hero;
