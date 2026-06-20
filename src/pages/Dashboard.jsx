import { useContext } from "react";
import Navbar from "../Components/Navbar";
import RecentvideoCard from "../Components/RecentvideoCard";
import { providecontext } from "./Contextprovider";

const Dashboard = () => {
  const [Theam] = useContext(providecontext);

  const ideas = JSON.parse(localStorage.getItem("ideas")) || [];
  const currentUser = JSON.parse(localStorage.getItem("currentUser")) || [];
  const myIdeas = ideas.filter((item) => item.email === currentUser.Regemail);

  const ideacount = myIdeas.filter((e) => e.status === "Idea").length;
  const editingdcount = myIdeas.filter((e) => e.status === "Editing").length;
  const uploadcount = myIdeas.filter((e) => e.status === "Uploaded").length;
  const highpriority = myIdeas.filter((e) => e.priority === "High");
  const totalvideos = myIdeas.length;

  const recentcontent = myIdeas.splice(0, 4);
  const highpriorityshow = highpriority.splice(0, 4);

  const recentlength = recentcontent.length;
  const highprioritylength = highpriorityshow.length;
  console.log(highpriorityshow.length);

  // const totalVideos = myIdeas.length;

  return (
    <div className="h-screen w-full">
      <div>
        <Navbar />

        <div className={Theam == "dark" ? "bg-[#1c1c1c]" : "bg-[#faf7f0]"}>
          <div className="h-[85vh] flex flex-col items-center">
            <div className="  w-[92vw] pt-5 flex justify-between gap-3 h-35">
              <div className="h-full w-1/4 rounded-3xl flex justify-center gap-2 text-2xl pl-9 flex-col bg-emerald-500">
                <p className="text-5xl font-bold text-[#F8FAFC]">
                  {totalvideos}
                </p>
                <h2 className="text-[#F8FAFC] text-2xl font-bold">
                  Total Videos
                </h2>
              </div>
              <div className="h-full w-1/4 rounded-3xl flex justify-center gap-2 text-2xl pl-9 flex-col bg-cyan-500">
                <p className="text-5xl font-bold text-[#F8FAFC]">{ideacount}</p>
                <h2 className="text-[#F8FAFC] text-2xl font-bold">Ideas</h2>
              </div>
              <div className="h-full w-1/4 rounded-3xl flex justify-center gap-2 text-2xl pl-9 flex-col bg-yellow-400">
                <p className="text-5xl font-bold text-[#F8FAFC]">
                  {editingdcount}
                </p>
                <h2 className="text-[#F8FAFC] text-2xl font-bold">Editing</h2>
              </div>
              <div className="h-full w-1/4 rounded-3xl flex justify-center gap-2 text-2xl pl-9 flex-col bg-red-400">
                <p className="text-5xl font-bold text-[#F8FAFC]">
                  {uploadcount}
                </p>
                <h2 className="text-[#F8FAFC] text-2xl font-bold">Uploaded</h2>
              </div>
            </div>

            <div
              className={
                Theam == "dark"
                  ? "text-[#fafafa]  w-[92vw] gap-5 mt-20"
                  : "text-[#888780]  w-[92vw] gap-5 mt-20"
              }
            >
              <div className="pl-5">
                <p className="mb-3  text-2xl">Your Recent videos </p>
              </div>
              <div className="w-[92vw] flex flex-wrap   gap-x-4 gap-y-5 gap-10">
                {recentcontent.map((elem, idx) => {
                  return (
                    <RecentvideoCard
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
                <p className="text-center text-[#a1a1aa] text-2xl pt-12">
                  You have no any content. Click on +add content!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 22222222222222222222222222 Priority Card show page 222222222222222222222222222222222 */}

      <div className="h-screen w-full ">
        <div
          className={
            Theam == "dark"
              ? "bg-[#1c1c1c] flex justify-center h-screen"
              : "bg-[#faf7f0] flex justify-center h-screen"
          }
        >
          <div
            className={
              Theam == "dark"
                ? "text-[#fafafa]  w-[92vw] gap-5 mt-10"
                : "text-[#888780]  w-[92vw] gap-5 mt-10"
            }
          >
            <div className="pl-5">
              <p className="mb-3  text-2xl">Some Importent Contents </p>
            </div>
            <div
              className={
                Theam == "dark"
                  ? "w-[92vw] flex flex-wrap bg-[#1c1c1c]   gap-x-4 gap-y-5 gap-10"
                  : "w-[92vw] flex flex-wrap bg-[#faf7f0]   gap-x-4 gap-y-5 gap-10"
              }
            >
              {highpriorityshow.map((elem, idx) => {
                return (
                  <RecentvideoCard
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
              style={{ display: highprioritylength == 0 ? "block" : "none" }}
              className="w-full flex gap-x-4 gap-y-5 gap-10"
            >
              <p className="w-[92vw] text-center text-[#a1a1aa] text-2xl pt-12">
                You have no any higher priority content. Click on +add content!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
