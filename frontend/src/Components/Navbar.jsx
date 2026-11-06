import { useContext } from "react";
import { Link } from "react-router-dom";
import { providecontext } from "../pages/Contextprovider";
// import { useEffect, useState } from "react";
const Navbar = () => {
  const [Theam, changeTheam] = useContext(providecontext);

  const user = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <nav
      className={
        Theam == "dark"
          ? "lg:h-[15vh] md:h-[10vh] sm:h-[8vh]  px-4 md:px-17 sm:px-7 flex justify-between items-center pt-6 text-white bg-[#1c1c1c]"
          : "lg:h-[15vh] md:h-[10vh] sm:h-[8vh] px-4 md:px-17 sm:px-7 flex justify-between items-center pt-6 text-bhack bg-[#faf7f0]"
      }
    >
      <div className="">
        <h1
          id="hello_text"
          className="md:text-[1.7vw] text-[4vw]   text-[#afafb8] font-bold"
        >
          Hello{" "}
          <span
            onClick={changeTheam}
            className="cursor-pointer text-[3vw] sm:text-[1.1vw] lg:text-[1.1vw] xl:text-[1.1vw]"
          >
            {Theam == "dark" ? "☀️" : "🌙"}
          </span>
          <p
            id="creator_name"
            className={
              Theam == "dark"
                ? "text-xl md:text-4xl sm:text-2xl  font-Outfit capitalize text-[#ffffff]"
                : "text-xl md:text-4xl sm:text-2xl font-Outfit capitalize text-[#1c1c1c]"
            }
          >
            {user?.Regname}👋
          </p>
        </h1>
      </div>

      <div className="flex  gap-3 sm:gap-8 md:gap-10 lg:gap-12 pt-7 text-md font-semibold">
        <Link
          className="text-[2.2vw] sm:text-[1.1vw] md:text-[1.1vw] lg:text-[1.1vw]"
          to={"/Dashboard"}
        >
          Dashboard
        </Link>
        <Link
          to={"/Allcontents"}
          className="text-[2.2vw] sm:text-[1.1vw] md:text-[1.1vw] lg:text-[1.1vw]"
        >
          All Contents
        </Link>
        <Link
          className="text-[2.2vw] sm:text-[1.1vw] md:text-[1.1vw] lg:text-[1.1vw]"
          to={"/Addcontent"}
        >
          +Add Content
        </Link>
        <Link
          className="text-[2.2vw] sm:text-[1.1vw] md:text-[1.1vw] lg:text-[1.1vw] hover:text-red-500"
          to={"/"}
        >
          Log out
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
