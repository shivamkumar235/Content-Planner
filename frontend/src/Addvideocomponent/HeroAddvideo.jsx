import { useContext } from "react";
import HeroAddvideoLeft from "./HeroAddvideoLeft";
import { providecontext } from "../pages/Contextprovider";

const HeroAddvideo = () => {
  const [Theam] = useContext(providecontext);

  return (
    <div className={Theam == "dark" ? "bg-[#1c1c1c]" : "bg-[#faf7f0] "}>
      <h1
        className={
          Theam == "dark"
            ? "text-center text-2xl font-semibold pt-5 text-[#ffffff]"
            : "text-center text-2xl font-semibold pt-5 text-[#2c2c2a]"
        }
      >
        Add new content.
      </h1>
      <div className="w-full flex justify-center mt-5 ">
        <div className=" w-[92vw] flex gap-10  text-white ">
          <HeroAddvideoLeft />
        </div>
      </div>
    </div>
  );
};

export default HeroAddvideo;
