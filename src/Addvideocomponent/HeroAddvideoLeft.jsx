import { useContext, useState } from "react";
import AddvideoRightplatform from "./AddvideoRightplatform";
import AddvideoRightpriority from "./AddvideoFightpriority";
import { RiLightbulbFlashLine } from "@remixicon/react";
import { providecontext } from "../pages/Contextprovider";

const HeroAddvideoLeft = () => {
  const [Theam] = useContext(providecontext);
  const [title, settitle] = useState("");
  const [discription, setdiscription] = useState("");
  const [cotegory, setcotegory] = useState("Vlog");
  const [status, setstatus] = useState("Idea");
  const [youtube, setYoutube] = useState("");
  const [instagram, setinstagram] = useState("");
  const [facebook, setfacebook] = useState("");
  const [priority, setpriority] = useState("Low");
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
  const formsubmit = (e) => {
    e.preventDefault();

    const ideas = JSON.parse(localStorage.getItem("ideas")) || [];
    const currentUser = JSON.parse(localStorage.getItem("currentUser")) || [];
    ideas.push({
      title,
      discription,
      cotegory,
      status,
      youtube,
      instagram,
      facebook,
      priority,
      date,
      email: currentUser.Regemail,
    });
    localStorage.setItem("ideas", JSON.stringify(ideas));
    // console.log(ideas);
    settitle("");
    setdiscription("");
    setYoutube("");
    window.location.reload();
  };

  return (
    <form
      onSubmit={(e) => {
        formsubmit(e);
      }}
      className="flex pb-8 flex-col lg:flex-row w-full gap-6"
    >
      <div
        className={
          Theam == "dark"
            ? "bg-[#262626] border-3 rounded-2xl border-[#3a3a3a] p-5 md:p-8 flex flex-col w-full lg:w-1/2"
            : "bg-[#ffffff] border-3 rounded-2xl border-[#e0ded8] p-5 md:p-8 flex flex-col w-full lg:w-1/2"
        }
      >
        <p className="text-[#858592]">
          <span className="text-orange-500">* </span>Fields marked with * are
          required
        </p>
        <div className="mt-5">
          <p
            className={
              Theam == "dark"
                ? "text-[#cdcdd5] font-semibold"
                : "text-[#2c2c2a] font-semibold"
            }
          >
            Video / content title{" "}
            <span
              className={Theam == "dark" ? "text-orange-500" : "text-red-500"}
            >
              *
            </span>
          </p>
          <input
            required
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
            }}
            className={
              Theam == "dark"
                ? "bg-[#ffffff] px-3 py-2 font-semibold rounded-xl outline-none text-[#000000]  w-full placeholder:text-black"
                : "bg-[#ffffff] px-3 py-2 font-semibold border-2 border-[#bbbbbb] rounded-xl outline-none text-[#000000]  w-full placeholder:text-black"
            }
            type="text"
          />
        </div>
        <div className="mt-5">
          <p
            className={
              Theam == "dark"
                ? "text-[#cdcdd5] font-semibold"
                : "text-[#2c2c2a] font-semibold"
            }
          >
            Idea Description
          </p>
          <textarea
            value={discription}
            onChange={(e) => {
              setdiscription(e.target.value);
            }}
            id="textarea"
            className={
              Theam == "dark"
                ? "bg-[#ffffff] font-semibold  rounded-xl px-3 py-2 h-32 md:h-40 outline-none text-[#000000] w-full"
                : "bg-[#ffffff] font-semibold border-2 border-[#bbbbbb]  rounded-xl px-3 py-2 h-32 md:h-40 outline-none text-[#000000] w-full"
            }
            cols="15"
          ></textarea>
        </div>
        <div className="w-full mt-12 flex flex-col sm:flex-row gap-4 justify-between ">
          <div className="w-full lg:w-1/2">
            <p
              className={
                Theam == "dark"
                  ? "text-[#cdcdd5] font-semibold"
                  : "text-[#2c2c2a] font-semibold"
              }
            >
              Cotegory{" "}
              <span
                className={Theam == "dark" ? "text-orange-500" : "text-red-500"}
              >
                *
              </span>
            </p>
            <select
              required
              className={
                Theam == "dark"
                  ? "font-semibold  px-3 w-full rounded-xl py-2 outline-none bg-[#ffffff] text-[#000000]"
                  : "font-semibold  px-3 w-full rounded-xl py-2 border-2 border-[#bbbbbb] outline-none bg-[#ffffff] text-[#000000]"
              }
              value={cotegory}
              onChange={(e) => setcotegory(e.target.value)}
            >
              <option value="vlog"> Vlog</option>
              <option value="Review"> Review</option>
              <option value="Short / Reel"> Short / Reel</option>
              <option value="Educational"> Educational</option>
              <option value="Tech."> Tech.</option>
              <option value="Entertainment"> Entertainment</option>
              <option value="Podcast"> Podcast</option>
              <option value="Challenged"> Challenge</option>
            </select>
          </div>

          <div className="w-full lg:w-1/2">
            {" "}
            <p
              className={
                Theam == "dark"
                  ? "text-[#cdcdd5] font-semibold"
                  : "text-[#2c2c2a] font-semibold"
              }
            >
              Status{" "}
              <span
                className={Theam == "dark" ? "text-orange-500" : "text-red-500"}
              >
                *
              </span>
            </p>
            <select
              required
              className={
                Theam == "dark"
                  ? "font-semibold  px-3 w-full rounded-xl py-2 outline-none bg-[#ffffff] text-[#000000]"
                  : "font-semibold  px-3 w-full rounded-xl py-2 border-2 border-[#bbbbbb] outline-none bg-[#ffffff] text-[#000000]"
              }
              value={status}
              onChange={(e) => setstatus(e.target.value)}
            >
              <option value="Idea">Idea</option>
              <option value="Scripting">Scripting</option>
              <option value="Recording">Recording</option>
              <option value="Editing">Editing</option>
              <option value="Uploaded">Uploaded</option>
            </select>
          </div>
        </div>
      </div>

      <div className="  flex flex-col w-full lg:w-1/2 ">
        <div
          className={
            Theam == "dark"
              ? "w-full p-6  border-3 rounded-2xl border-[#4c3c15] bg-[#211c12]"
              : "w-full p-6  border-3 rounded-2xl border-[#efd9a0] bg-[#fdf6e8]"
          }
        >
          <div
            className={
              Theam == "dark"
                ? "flex gap-1 text-[#fbbf24]"
                : "flex gap-1 text-[#8a6d1f]"
            }
          >
            <RiLightbulbFlashLine />
            <h2 className="font-bold">Quick tip</h2>
          </div>
          <p className={Theam == "dark" ? "text-[#a1a1aa]" : "text-[#9a7e33]"}>
            Fill in the title and status first — you can always come back to add
            more details later.
          </p>
        </div>
        <AddvideoRightplatform
          setYoutube={setYoutube}
          setinstagram={setinstagram}
          setfacebook={setfacebook}
        />
        <AddvideoRightpriority setpriority={setpriority} />
        <button
          type="submit"
          className="text-center mt-4 active:scale-95 py-4 border-1 text-[#FFFFFF] border-[#059669] rounded-xl w-full font-bold text-xl bg-sky-600"
        >
          Save Content
        </button>
      </div>
    </form>
  );
};

export default HeroAddvideoLeft;
