import ClickSpark from "./ClickSpark.jsx";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import BlenderSection from "./sections/BlenderSection.jsx";

function App() {
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

export default App;
