import { useState } from "react";
import ClickSpark from "./ClickSpark.jsx";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import BlenderSection from "./sections/BlenderSection.jsx";
import BlenderGallery from "./pages/BlenderGallery";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function MainPage() {
  return (
    <ClickSpark
      sparkColor="#111"
      sparkSize={8}
      sparkRadius={20}
      sparkCount={10}
      duration={500}
    >
      <div className="bg-[#f4efe6]">
        <Home />
        <About />
        <Skills />
        <Projects />
        <BlenderSection />
      </div>
    </ClickSpark>
  );
}

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/blender-gallery" element={<BlenderGallery />} />
      </Routes>

    </Router>
  );
}

export default App;
