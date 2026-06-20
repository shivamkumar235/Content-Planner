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
          <div className="w-[92vw] flex flex-wrap gap-x-4 gap-y-5 gap-10">
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
        </div>
      </div>
    </div>
  );
};

export default Videos;
