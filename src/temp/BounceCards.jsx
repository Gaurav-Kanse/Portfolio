import BubbleMenu from "./BubbleMenu.jsx";

export default function Projects() {

  const projectItems = [
    {
      label: "AI Voice Assistant",
      href: "https://github.com/Gaurav-Kanse",
      rotation: -6,
      hoverStyles: { bgColor: "#111", textColor: "#fff" }
    },
    {
      label: "Fake News Detection",
      href: "https://github.com/Gaurav-Kanse",
      rotation: 6,
      hoverStyles: { bgColor: "#111", textColor: "#fff" }
    },
    {
      label: "AI Business Manager",
      href: "https://github.com/Gaurav-Kanse",
      rotation: -6,
      hoverStyles: { bgColor: "#111", textColor: "#fff" }
    },
    {
      label: "Emotion Analyzer",
      href: "https://github.com/Gaurav-Kanse",
      rotation: 6,
      hoverStyles: { bgColor: "#111", textColor: "#fff" }
    },
    {
      label: "Loan Prediction Model",
      href: "https://github.com/Gaurav-Kanse",
      rotation: -6,
      hoverStyles: { bgColor: "#111", textColor: "#fff" }
    }
  ];

  return (
    <section className="min-h-screen bg-[#f4efe6] text-[#111] flex flex-col items-center justify-center py-32">

      <h2 className="text-5xl md:text-6xl font-bold tracking-wide mb-20 text-center">
        Programming Projects
      </h2>

      <BubbleMenu
        items={projectItems}
        menuBg="#ffffff"
        menuContentColor="#111111"
        animationEase="back.out(1.5)"
        animationDuration={0.6}
        staggerDelay={0.1}
        useFixedPosition={false}
      />

    </section>
  );
}
