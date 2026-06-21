// import { useEffect } from "react";
import { useContext } from "react";
import Navbar from "../Components/Navbar";
import VideosCard from "../Components/VideosCard";
import { providecontext } from "./Contextprovider";
const Videos = () => {
  const [Theam] = useContext(providecontext);
  // useEffect(() => {
  const ideas = JSON.parse(localStorage.getItem("ideas")) || [];
  console.log(ideas);

  const currentUser = JSON.parse(localStorage.getItem("currentUser")) || [];

  const myIdeas = ideas.filter((item) => item.email === currentUser.Regemail);
  // }, ["ideas"]);
  const recentlength = myIdeas.length;
  console.log(recentlength);

  return (
    <div className="h-screen w-full">
      <Navbar />

      <div
        id="videoscrollcard"
        className={
          Theam == "dark"
            ? "bg-[#1c1c1c] h-[85vh] overflow-y-auto "
            : "bg-[#faf7f0] h-[85vh] overflow-y-auto "
        }
      >
        <div className=" flex justify-center pt-10  w-full">
          <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 flex justify-center gap-4">
            {myIdeas.map((elem, idx) => {
              return (
                <VideosCard
                  key={idx}
                  index={idx}
                  {...elem}
                  idx={idx}
                  title={elem.title}
                  discription={elem.discription}
                  cotegory={elem.cotegory}
                  status={elem.status}
                  instagram={elem.instagram}
                  facebook={elem.facebook}
                  youtube={elem.youtube}
                  priority={elem.priority}
                  date={elem.date}
                />
              );
            })}
          </div>

          <div
            style={{ display: recentlength == 0 ? "block" : "none" }}
            className="w-[92vw] flex  gap-x-4 gap-y-5 gap-10"
          >
            <p className="text-center text-[#a1a1aa] text-[5vw] sm:text-2xl lg:text-2xl xl:text-2xl pt-12 pt-12">
              You have no any content. Click on +add content!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
