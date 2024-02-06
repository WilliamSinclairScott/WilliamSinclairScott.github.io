import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import About from "./pages/About/About";
import Example from "./pages/Example/Example";
import { DropdownMenu, Navbar, NavItem } from "./Navbar.js";
import { ReactComponent as ArrowIcon } from './images/icons/arrow.svg';

function App() {
  return (
    <>
      <Navbar>
        <NavItem icon={<ArrowIcon />} />
        <NavItem icon="Y" />
        <NavItem icon="Z" />

        <NavItem icon="A'">
          <DropdownMenu>

          </DropdownMenu>
        </NavItem>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Example" element={<Example />} />
      </Routes>
    </>
  );
}

export default App;
