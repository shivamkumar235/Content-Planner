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
          ? "h-[15vh] px-18 flex justify-between items-center pt-6 text-white bg-[#1c1c1c]"
          : "h-[15vh] px-18 flex justify-between items-center pt-6 text-bhack bg-[#faf7f0]"
      }
    >
      <div className="">
        <h1 id="hello_text" className="text-xl text-[#afafb8] font-bold">
          Hello{" "}
          <span onClick={changeTheam} className="cursor-pointer text-[1.1vw]">
            {Theam == "dark" ? "☀️" : "🌙"}
          </span>
          <p
            id="creator_name"
            className={
              Theam == "dark"
                ? "text-4xl font-Outfit capitalize text-[#ffffff]"
                : "text-4xl font-Outfit capitalize text-[#1c1c1c]"
            }
          >
            {user?.Regname}👋
          </p>
        </h1>
      </div>

      <div className="flex gap-12 pt-7 text-md font-semibold">
        <Link className="text-[1.1vw]" to={"/Dashboard"}>
          Dashboard
        </Link>
        <Link to={"/Allcontents"} className="text-[1.1vw]">
          All Contents
        </Link>
        <Link className="text-[1.1vw]" to={"/Addcontent"}>
          +Add Content
        </Link>
        <Link className="text-[1.1vw] hover:text-red-500" to={"/"}>
          Log out
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
