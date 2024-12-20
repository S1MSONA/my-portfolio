import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
const DarkMode = () => {
  const [them, setThem] = useState(
    localStorage.getItem("them") ? localStorage.getItem("them") : "light"
  );

  const element = document.documentElement;

  useEffect(() => {
    localStorage.setItem("them", them);
    if (them == "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("light");
      element.classList.remove("dark");
    }
  });
  return (
    <>
      {them == "dark" ? (
        <Sun onClick={() => setThem("light")} />
      ) : (
        <Moon onClick={() => setThem("dark")} />
      )}
    </>
  );
};

export default DarkMode;
