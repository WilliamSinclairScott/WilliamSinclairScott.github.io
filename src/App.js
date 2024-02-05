import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import About from "./pages/About/About";
import Example from "./pages/Example/Example";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Example" element={<Example />} />
      </Routes>
    </>
  );
}

export default App;
