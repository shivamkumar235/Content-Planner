import { useContext } from "react";
import { providecontext } from "../pages/Contextprovider";

const Editvideopriority = (propes) => {
  let Highopacity = "";
  let Mediumopacity = "";
  let Lowopacity = "";
  if (propes.priority == "High") {
    Highopacity = "opacity-100";
    Mediumopacity = "opacity-50";
    Lowopacity = "opacity-50";
  } else if (propes.priority == "Medium") {
    Highopacity = "opacity-50";
    Mediumopacity = "opacity-100";
    Lowopacity = "opacity-50";
  } else if (propes.priority == "Low") {
    Highopacity = "opacity-50";
    Mediumopacity = "opacity-50";
    Lowopacity = "opacity-100";
  }
  const [Theam] = useContext(providecontext);
  return (
    <div
      className={
        Theam == "dark"
          ? "w-full py-5 px-8  border-3 rounded-2xl border-[#3a3a3a] mt-4 bg-[#262626]"
          : "w-full py-5 px-8  border-3 rounded-2xl border-[#e0ded8] mt-4 bg-[#ffffff]"
      }
    >
      <h1
        id="specalfont"
        className={
          Theam == "dark"
            ? "uppercase text-xl font-semibold text-[#cdcdd5]"
            : "uppercase text-xl font-semibold text-[#8a6d1f]"
        }
      >
        Priority
      </h1>

      <div className="flex gap-2 justify-between mt-5 text-[4vw] sm:text-xl lg:text-xl xl:text-xl">
        <p
          onClick={() => {
            propes.setpriority("High");
          }}
          className={`bg-red-500 ${Highopacity} px-6 text-center active:scale-95 cursor-pointer py-1 text-[#ffffff] rounded-3xl w-1/3 sm:w-1/3 lg:w-1/4 xl:w-1/4`}
        >
          High
        </p>
        <p
          onClick={() => {
            propes.setpriority("Medium");
          }}
          className={`bg-yellow-500 px-6 ${Mediumopacity} active:scale-95 text-center cursor-pointer text-[#ffffff] py-1 rounded-3xl w-1/3 sm:w-1/3 lg:w-1/4 xl:w-1/4`}
        >
          Medium
        </p>
        <p
          onClick={() => {
            propes.setpriority("Low");
            console.log("clicked");
          }}
          className={`bg-green-500 px-6 text-center ${Lowopacity} cursor-pointer active:scale-95 text-[#ffffff] py-1 rounded-3xl w-1/3 sm:w-1/3 lg:w-1/4 xl:w-1/4`}
        >
          Law
        </p>
      </div>
    </div>
  );
};

export default Editvideopriority;
