import { useContext, useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import RecentvideoCard from "../Components/RecentvideoCard";
import { providecontext } from "./Contextprovider";
import api from "../api.js";
const Dashboard = () => {
  const [Theam] = useContext(providecontext);

  const [Higher, setHigher] = useState([]);
  const [Recent, setRecent] = useState([]);
  const [Total, setTotal] = useState([]);
  const [TotalIdea, setTotalIdea] = useState([]);
  const [TotalEditing, setTotalEditing] = useState([]);
  const [TotalUploded, setTotalUploded] = useState([]);

  useEffect(() => {
    async function fetchNotes() {
      try {
        const res = await api.get("/note/getpriorityNotes");
        setHigher(res.data.higher);
        setRecent(res.data.recent);
        console.log(res.data.higher);
      } catch (err) {
        console.log(err.response?.data);
      }
    }

    fetchNotes();

    async function fetchTotal() {
      try {
        const res = await api.get("/note/getNotes");
        setTotal(res.data.notes);
        console.log(res.data.notes);
      } catch (err) {
        console.log(err.response?.data);
      }
    }
    fetchTotal();

    async function fetchTotalEditing() {
      try {
        const res = await api.get("/note/getEditingNotes");
        setTotalEditing(res.data.editing);
        // console.log(res.data.notes);
      } catch (err) {
        console.log(err.response?.data);
      }
    }
    fetchTotalEditing();

    async function fetchTotalUploded() {
      try {
        const res = await api.get("/note/getUploadedNotes");
        setTotalUploded(res.data.uploded);
        // console.log(res.data.notes);
      } catch (err) {
        console.log(err.response?.data);
      }
    }

    fetchTotalUploded();

    async function fetchTotalIdea() {
      try {
        const res = await api.get("/note/getIdeaNotes");
        setTotalIdea(res.data.idea);
        // console.log(res.data.notes);
      } catch (err) {
        console.log(err.response?.data);
      }
    }

    fetchTotalIdea();
  }, []); // [] = sirf ek baar chalega

  // const totalVideos = myIdeas.length;

  return (
    <div className="h-screen w-screen ">
      <div>
        <Navbar />

        <div className={Theam == "dark" ? "bg-[#1c1c1c] " : "bg-[#faf7f0]"}>
          <div className=" flex flex-col items-center">
            <div className="  w-[92vw] pt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="rounded-3xl min-h-[120px] flex justify-center gap-2 text-2xl pl-9 flex-col bg-emerald-500">
                <p className="text-5xl font-bold text-[#F8FAFC]">
                  {Total.length}
                </p>
                <h2 className="text-[#F8FAFC] text-2xl font-bold">
                  Total Videos
                </h2>
              </div>
              <div className="rounded-3xl min-h-[120px] flex justify-center gap-2 text-2xl pl-9 flex-col bg-cyan-500">
                <p className="text-5xl font-bold text-[#F8FAFC]">
                  {TotalIdea.length}
                </p>
                <h2 className="text-[#F8FAFC] text-2xl font-bold">Ideas</h2>
              </div>
              <div className="rounded-3xl min-h-[120px] flex justify-center gap-2 text-2xl pl-9 flex-col bg-yellow-400">
                <p className="text-5xl font-bold text-[#F8FAFC]">
                  {TotalEditing.length}
                </p>
                <h2 className="text-[#F8FAFC] text-2xl font-bold">Editing</h2>
              </div>
              <div className="rounded-3xl min-h-[120px] flex justify-center gap-2 text-2xl pl-9 flex-col bg-red-400">
                <p className="text-5xl font-bold text-[#F8FAFC]">
                  {TotalUploded.length}
                </p>
                <h2 className="text-[#F8FAFC] text-2xl font-bold">Uploaded</h2>
              </div>
            </div>

            <div
              className={
                Theam == "dark"
                  ? "text-[#fafafa] min-h-[195px] w-[92vw] gap-5 mt-20"
                  : "text-[#1c1c1c] min-h-[195px] w-[92vw] gap-5 mt-20"
              }
            >
              <div className="pl-1 sm:pl-5 lg:pl-5 xl:pl-5">
                <p className="mb-3  text-2xl">Your Recent videos </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-4 ">
                {Recent.map((elem, idx) => {
                  return (
                    <RecentvideoCard
                      idx={idx}
                      title={elem.title}
                      discription={elem.description}
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
                // style={{ display: == 0 ? "block" : "none" }}
                className="w-[92vw] flex  gap-x-4 gap-y-5 gap-10"
              >
                <p
                  className={
                    Theam == "dark"
                      ? "w-[92vw] text-center text-[#a1a1aa] text-[5vw] sm:text-2xl lg:text-2xl xl:text-2xl pt-12"
                      : "w-[92vw] text-center text-[#1c1c1c] text-[5vw] sm:text-2xl lg:text-2xl xl:text-2xl pt-12"
                  }
                >
                  You have no any content. Click on +add content!
                </p>
              </div>
            </div>

            <div
              className={
                Theam == "dark"
                  ? "bg-[#1c1c1c] pb-10 flex justify-center  "
                  : "bg-[#faf7f0] pb-10 flex justify-center "
              }
            >
              <div
                className={
                  Theam == "dark"
                    ? "text-[#fafafa]  w-[92vw] gap-5 mt-10"
                    : "text-[#1c1c1c]  w-[92vw] gap-5 mt-10"
                }
              >
                <div className="pl-1 sm:pl-5 lg:pl-5 xl:pl-5">
                  <p className="mb-3  text-2xl">Some Importent Contents </p>
                </div>

                <div
                  className={
                    Theam == "dark"
                      ? " grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-4 "
                      : " grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-4 "
                  }
                >
                  {Higher.map((elem, idx) => {
                    return (
                      <RecentvideoCard
                        idx={idx}
                        title={elem.title}
                        discription={elem.description}
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
                  style={
                    {
                      // display: highprioritylength == 0 ? "block" : "none",
                    }
                  }
                  className="w-full flex gap-x-4 gap-y-5 gap-10"
                >
                  <p
                    className={
                      Theam == "dark"
                        ? "w-[92vw] text-center text-[#a1a1aa] text-[5vw] sm:text-2xl lg:text-2xl xl:text-2xl pt-12"
                        : "w-[92vw] text-center text-[#1c1c1c] text-[5vw] sm:text-2xl lg:text-2xl xl:text-2xl pt-12"
                    }
                  >
                    You have no any higher priority content. Click on +add
                    content!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 22222222222222222222222222 Priority Card show page 222222222222222222222222222222222 */}
    </div>
  );
};

export default Dashboard;
