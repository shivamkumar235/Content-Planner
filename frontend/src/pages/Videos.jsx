import { useContext, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import VideosCard from "../Components/VideosCard";
import { providecontext } from "./Contextprovider";
import api from "../api";

const Videos = () => {
  // async hata diya
  const [Theam] = useContext(providecontext);
  const [note, setNotes] = useState([]);

  useEffect(() => {
    async function fetchNotes() {
      try {
        const res = await api.get("/note/getNotes");
        setNotes(res.data.notes);
        console.log(res.data.notes);
      } catch (err) {
        console.log(err.response?.data);
      }
    }

    fetchNotes();
  }, []); // [] = sirf ek baar chalega

  async function handleDelete(id) {
    try {
      await api.delete(`/note/deleteNote/${id}`);
      setNotes((prev) => prev.filter((n) => n._id !== id)); // screen se turant hatao
    } catch (err) {
      alert(err.response?.data?.message || "Delete nahi hua");
    }
  }

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
        <div className="flex justify-center pt-10 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center gap-4">
            {note.map((elem, idx) => (
              <VideosCard
                key={elem._id}
                // index={idx}
                {...elem}
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
                onDelete={() => handleDelete(elem._id)}
              />
            ))}
          </div>

          {note.length === 0 && (
            <div className="w-[92vw] flex gap-x-4 gap-y-5">
              <p className="text-center text-[#a1a1aa] text-[5vw] sm:text-2xl pt-12">
                You have no any content. Click on +add content!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Videos;
