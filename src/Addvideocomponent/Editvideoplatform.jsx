import { useContext, useState } from "react";
import { providecontext } from "../pages/Contextprovider";

const Editvideoplatform = (propes) => {
  const [Theam] = useContext(providecontext);

  const [youtube, setYoutube] = useState(propes.youtube);
  const [instagram, setinstagram] = useState(propes.instagram);
  const [facebook, setfacebook] = useState(propes.facebook);
  //   console.log(propes.obj);
  // useEffect(() => {
  //   propes.setYoutube(youtube);
  //   propes.setinstagram(instagram);
  //   propes.setfacebook(facebook);
  // }, [youtube, instagram, facebook]);

  return (
    <div
      className={
        Theam == "dark"
          ? "w-full py-5 px-8 border-3 rounded-2xl border-[#3a3a3a] mt-4 bg-[#262626]"
          : "w-full py-5 px-8 border-3 rounded-2xl border-[#e0ded8] mt-4 bg-[#ffffff]"
      }
    >
      <h1
        id="specalfont"
        className={
          Theam == "dark"
            ? "uppercase text-xl font-semibold text-[#cdcdd5]"
            : "uppercase text-xl font-semibold text-[#2d5a52]"
        }
      >
        For which platform
      </h1>

      <div className="flex flex-col mt-5 text-xl">
        <label
          className={Theam == "dark" ? "text-[#cdcdd5]" : "text-[#2c2c2a]"}
        >
          <input
            checked={youtube}
            onChange={
              (e) => setYoutube(e.target.checked)
              // console.log(e.target.checked)
            }
            className="w-4 h-4 accent-emerald-500"
            type="checkbox"
          />{" "}
          Youtube
        </label>
        <label
          className={Theam == "dark" ? "text-[#cdcdd5]" : "text-[#2c2c2a]"}
        >
          <input
            checked={instagram}
            onChange={(e) => setinstagram(e.target.checked)}
            className="w-4 h-4 accent-emerald-500"
            type="checkbox"
          />{" "}
          Instagram
        </label>
        <label
          className={Theam == "dark" ? "text-[#cdcdd5]" : "text-[#2c2c2a]"}
        >
          <input
            checked={facebook}
            onChange={(e) => setfacebook(e.target.checked)}
            className="w-4 h-4 accent-emerald-500"
            type="checkbox"
          />{" "}
          Facebook
        </label>
      </div>
    </div>
  );
};

export default Editvideoplatform;
