import { createContext, useState } from "react";

export const providecontext = createContext();
const Contextprovider = (propes) => {
  const [Theam, setTheam] = useState("dark");
  const changeTheam = () => {
    if (Theam == "dark") {
      setTheam("light");
    } else {
      setTheam("dark");
    }
  };

  return (
    <div>
      <providecontext.Provider value={[Theam, changeTheam]}>
        {propes.children}
      </providecontext.Provider>
    </div>
  );
};

export default Contextprovider;
