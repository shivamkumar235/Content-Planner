// import React from 'react
import { RiSmartphoneLine } from "@remixicon/react";
import { useContext } from "react";
import { providecontext } from "../pages/Contextprovider";
const PlatformShow = (propes) => {
  const [Theam] = useContext(providecontext);

  return (
    <span
      className={
        Theam == "dark"
          ? " flex items-center w-fit gap-1 border-3 border-[#4b4949] rounded-2xl px-3 py-[0.1vw]  text-[#b4b4be]"
          : " flex items-center bg-[#f5f4f0] w-fit gap-1 border-3 border-[#e0ded8] rounded-2xl px-3 py-[0.1vw]  text-[#5f5e5a]"
      }
    >
      <RiSmartphoneLine size={14} />
      <p>{propes.name}</p>
    </span>
  );
};

export default PlatformShow;
