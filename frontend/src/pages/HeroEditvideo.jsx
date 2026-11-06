import { useContext } from "react";
import { providecontext } from "./Contextprovider";
import Navbar from "../Components/Navbar";
import HeroEditvideoLef from "../Addvideocomponent/HeroEditVideoLef";

const HeroEditvideo = () => {
  const [Theam] = useContext(providecontext);

  return (
    <div className="h-screen  w-full">
      <Navbar />
      <div className={Theam == "dark" ? "bg-[#1c1c1c] " : "bg-[#faf7f0] "}>
        <h1
          className={
            Theam == "dark"
              ? "text-center text-2xl font-semibold pt-5 text-[#ffffff]"
              : "text-center text-2xl font-semibold pt-5 text-[#2c2c2a]"
          }
        >
          Edit old content.
        </h1>
        <div className="w-full flex justify-center mt-5 ">
          <div className=" w-[92vw] pb-8 flex gap-10 text-white ">
            <HeroEditvideoLef />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroEditvideo;
