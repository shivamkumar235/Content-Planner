import Login from "./Auth/Login";
import { Route, Routes } from "react-router-dom";

import Register from "./Auth/Register";
import Dashboard from "./pages/Dashboard";
import Addvideos from "./pages/Addvideos";
import Videos from "./pages/Videos";
import Notfound from "./pages/Notfound";
import HeroEditvideo from "./pages/HeroEditvideo";

const App = () => {
  return (
    <div className="w-full">
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Allcontents" element={<Videos />} />
        <Route path="/Addcontent" element={<Addvideos />} />
        <Route path="/Editcontent" element={<HeroEditvideo />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
};

export default App;
