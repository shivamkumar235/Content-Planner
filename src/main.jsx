import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Contextprovider from "./pages/Contextprovider.jsx";

createRoot(document.getElementById("root")).render(
  <Contextprovider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Contextprovider>,
);
