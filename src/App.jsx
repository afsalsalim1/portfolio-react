


import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Internship from "./Internship";
import Contact from "./Contact";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;