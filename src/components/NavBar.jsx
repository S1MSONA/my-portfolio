import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import DarkMode from "./DarkMode";
import profile from "../assets/img/profile_pic.jpg";
const lists = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "about",
  },
  {
    label: "Services",
    path: "services",
  },
  {
    label: "Skills",
    path: "skills",
  },
];

const NavBar = () => {
  const [isToggle, setIsToggle] = useState(false);
  return (
    <nav className="dark:bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] dark:text-[#e8e8e8] transition-all duration-300 z-20 sticky top-0">
      <div className="flex justify-between items-center px-8 sm:px-14 md:px-20 xl:px-40 py-6">
        <h2 className="ml-1 uppercase font-sans text-2xl font-bold bg-gradient-to-tr from-blue-500 to-green-600 text-transparent bg-clip-text">
          Sona
        </h2>
        <ul className="md:flex gap-4 md:gap-8 xl:gap-16 uppercase font-semibold hidden">
          {lists.map((list) => (
            <li key={list.label}>
              <Link to={list.path}>{list.label}</Link>
            </li>
          ))}
        </ul>
        <div className="flex justify-center items-center gap-4">
          <span className="hidden md:flex gap-2 font-semibold">
            <button className="bg-blue-600 text-slate-300 px-3 py-1 rounded-md transition-all duration-200 hover:bg-blue-500 hover:text-white hover:scale-110">
              Sing In
            </button>
            <button className="bg-blue-600 text-slate-300 px-3 py-1 rounded-md transition-all duration-200 hover:bg-blue-500 hover:text-white hover:scale-110">
              Log In
            </button>
          </span>
          <button className="transition-all duration-200">
            <DarkMode />
          </button>
          <button
            onClick={() => setIsToggle(!isToggle)}
            className="flex md:hidden transition-all duration-300"
          >
            {isToggle ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        onClick={() => setIsToggle(false)}
        className={
          isToggle
            ? "bg-slate-200 absolute top-0 left-0 h-screen flex flex-col items-center dark:bg-slate-800 transition-all duration-500 w-[15rem] sm:w-[24rem] md:hidden"
            : "bg-slate-200 absolute top-0 left-[-20rem] h-screen flex flex-col items-center dark:bg-slate-800 transition-all duration-500"
        }
      >
        <div className="flex justify-center items-center gap-6 mt-6 relative right-3">
          <img className="w-16 rounded-full " src={profile} alt="profile" />
          <h2 className="uppercase">Sona</h2>
        </div>
        <ul className="px-28 flex flex-col gap-6 uppercase font-semibold md:hidden mt-8 relative right-11">
          {lists.map((list) => (
            <li key={list.label}>
              <Link to={list.path}>{list.label}</Link>
            </li>
          ))}
        </ul>
        <span className="flex gap-4 mt-8 font-semibold">
          <button className="bg-blue-500 text-white px-3 py-1 rounded-md transition-all duration-200 hover:scale-110">
            Sing In
          </button>
          <button className="bg-blue-500 text-white px-3 py-1 rounded-md transition-all duration-200 hover:scale-110">
            Log In
          </button>
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
