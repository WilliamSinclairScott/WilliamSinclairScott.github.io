import { Routes, Route } from "react-router-dom";
import Home from "./templates/Home";
import About from "./templates/About";
import Work from "./templates/Contact";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<About />} />
        <Route path="/" element={<Work />} />
      </Routes>
    </>
  );
}

export default App;
