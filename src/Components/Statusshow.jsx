import { useContext } from "react";
import { providecontext } from "../pages/Contextprovider";

const Statusshow = (propes) => {
  const [Theam] = useContext(providecontext);
  return (
    <span
      className={
        Theam == "dark"
          ? `flex items-center w-fit gap-1 ${propes.setDarkStatus}  font-semibold border-[#4b4949] rounded-2xl px-4 py-[0.2vw] `
          : `flex items-center w-fit gap-1 ${propes.setLightStatus}  font-semibold border-[#4b4949] rounded-2xl px-4 py-[0.2vw] `
      }
    >
      <p> {propes.status}</p>
    </span>
  );
};

export default Statusshow;
