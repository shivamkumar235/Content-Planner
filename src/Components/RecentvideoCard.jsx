// import { RiCircleFill, RiEditLine, RiDeleteBin6Line } from "@remixicon/react";
import { RiCircleFill } from "@remixicon/react";
import PlatformShow from "./PlatformShow";
import Statusshow from "./Statusshow";
import Priorityshow from "./Priorityshow";
import { useContext } from "react";
import { providecontext } from "../pages/Contextprovider";
const RecentvideoCard = (propes) => {
  const [Theam] = useContext(providecontext);

  const darkstatusColors = {
    Idea: "text-yellow-400 bg-yellow-900/30",
    Scripting: "text-purple-400 bg-purple-900/30",
    Recording: "text-blue-400 bg-blue-900/30",
    Editing: "text-orange-400 bg-orange-900/30",
    Uploaded: "text-green-400 bg-green-900/30",
  };

  const lightstatusColors = {
    Idea: "text-yellow-700 bg-yellow-100",
    Scripting: "text-purple-700 bg-purple-100",
    Recording: "text-blue-700   bg-blue-100",
    Editing: "text-orange-700 bg-orange-100",
    Uploaded: "text-green-700  bg-green-100",
  };

  const topMainBorder = {
    Idea: "border-t-yellow-500",
    Scripting: "border-t-purple-500",
    Recording: "border-t-blue-500",
    Editing: "border-t-orange-500",
    Uploaded: "border-t-green-500",
  };

  const MainBorder = {
    Idea: "hover:border-yellow-700",
    Scripting: "hover:border-purple-700",
    Recording: "hover:border-blue-700",
    Editing: "hover:border-orange-700",
    Uploaded: "hover:border-green-700",
  };

  const prioritycolor = {
    High: "text-[#ffffff] bg-red-500",
    Medium: "text-[#ffffff] bg-yellow-500",
    Low: "text-[#ffffff] bg-green-500",
  };

  const setDarkStatus = darkstatusColors[propes.status];
  const setLightStatus = lightstatusColors[propes.status];

  const prioritycolorclass = prioritycolor[propes.priority];
  const setTopMainBorder = topMainBorder[propes.status];
  const setMainBorder = MainBorder[propes.status];

  return (
    <div
      className={
        Theam == "dark"
          ? `w-[100%] min-h-[340px] rounded-3xl p-8 flex flex-col justify-between bg-[#262626] border-2 flex flex-col justify-between ${setMainBorder} border-[#3a3a3a]`
          : `w-[100%] min-h-[340px] rounded-3xl p-8 flex flex-col justify-between bg-[#262626] border-2 flex flex-col justify-between ${setMainBorder} border-[#e0ded8]`
      }
    >
      <div>
        <h1
          className={
            Theam == "dark"
              ? `w-full border-t-4 pt-2 text-2xl uppercase font-semibold text-[#ffffff] ${setTopMainBorder}`
              : `w-full border-t-4 pt-2 text-2xl uppercase font-semibold text-[#2c2c2a] ${setTopMainBorder}`
          }
        >
          {propes.title}
        </h1>
        <p
          className={
            Theam == "dark" ? "text-[#ffffff] mb-3" : "text-[#888780] mb-3"
          }
        >
          {" "}
          {propes.discription}
        </p>

        <div className="flex gap-2   flex-wrap">
          <span
            className={
              Theam == "dark"
                ? " flex items-center w-fit gap-1 border-3 border-[#4b4949] rounded-2xl px-3 py-[0.1vw]  text-[#b4b4be]"
                : " flex items-center w-fit gap-1 border-3 bg-[#f5f4f0] border-[#e0ded8] rounded-2xl px-3 py-[0.1vw]  text-[#5f5e5a]"
            }
          >
            <RiCircleFill size={11} color="purple" />
            <p> {propes.cotegory}</p>
          </span>

          <div className="flex flex-wrap gap-2">
            {propes.youtube && <PlatformShow name="YouTube" />}
            {propes.instagram && <PlatformShow name="Instagram" />}
            {propes.facebook && <PlatformShow name="Facebook" />}
          </div>

          <Statusshow
            status={propes.status}
            setDarkStatus={setDarkStatus}
            setLightStatus={setLightStatus}
          />

          <Priorityshow
            priority={propes.priority}
            prioritycolor={prioritycolorclass}
          />
        </div>
      </div>

      <div
        className={
          Theam == "dark"
            ? " pt-5 mt-3 border-t-2  flex justify-between border-t-[#44444a] "
            : " pt-5 mt-3 border-t-2  flex justify-between border-t-[#cbc7c9] "
        }
      >
        <p className=" text-[#a1a1aa]">{propes.date}</p>
      </div>
    </div>
  );
};

export default RecentvideoCard;
