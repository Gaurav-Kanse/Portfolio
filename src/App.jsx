import { useState } from "react";
import ClickSpark from "./ClickSpark.jsx";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import BlenderSection from "./sections/BlenderSection.jsx";
import BlenderGallery from "./pages/BlenderGallery";
import Snowfall from "react-snowfall";
import Antigravity from "./components/Antigravity";

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
  const [snowEnabled, setSnowEnabled] = useState(true);
  const [cursorEnabled, setCursorEnabled] = useState(true);

  return (
    <Router>

      {/* Snow */}
      {snowEnabled && (
        <Snowfall
          color="#c9e4f5"
          snowflakeCount={80}
          style={{
            position: "fixed",
            width: "100vw",
            height: "100vh",
            zIndex: 30,
            pointerEvents: "none"
          }}
        />
      )}

      {/* Cursor / Antigravity */}
      {cursorEnabled && (
        <Antigravity
          count={120}
          magnetRadius={6}
          ringRadius={7}
          waveAmplitude={0.5}
          particleSize={1.2}
          color="#707070"
          autoAnimate
        />
      )}

      {/* Toggle Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">

        <button
          onClick={() => setSnowEnabled(!snowEnabled)}
          className="px-6 py-3 rounded-full bg-black text-white text-sm font-medium transition-all duration-300 hover:scale-105 hover:bg-gray-800"
        >
          {snowEnabled ? "Snow: On ❄️" : "Snow: Off"}
        </button>

        <button
          onClick={() => setCursorEnabled(!cursorEnabled)}
          className="px-6 py-3 rounded-full bg-white border border-gray-300 text-sm font-medium transition-all duration-300 hover:scale-105"
        >
          {cursorEnabled ? "Cursor: On ✨" : "Cursor: Off"}
        </button>

      </div>

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/blender-gallery" element={<BlenderGallery />} />
      </Routes>

    </Router>
  );
}

export default App;
