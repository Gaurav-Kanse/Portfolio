import { useState, useEffect, useRef } from "react";
import CircularGallery from "../components/CircularGallery.jsx";

import porscheFront from "../assets/renders/porsche-front.png";
import porscheSide from "../assets/renders/porsche-side.png";
import lambo from "../assets/renders/lamborghini.png";
import bike from "../assets/renders/bike.png";
import cyberpunk from "../assets/renders/cyberpunk.png";
import factory1 from "../assets/renders/factory1.png";
import factory2 from "../assets/renders/factory2.png";
import scifi from "../assets/renders/scifi.png";


export default function BlenderSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const items = [
  { image: porscheFront, text: "Porsche Front" },
  { image: porscheSide, text: "Porsche Side" },
  { image: lambo, text: "Lamborghini Studio" },
  { image: bike, text: "Sport Bike Render" },
  { image: cyberpunk, text: "Cyberpunk Street" },
  { image: factory1, text: "Industrial Factory" },
  { image: factory2, text: "Factory Interior" },
  { image: scifi, text: "Sci-Fi Environment" },
];


  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-[#f4efe6] text-[#111] flex flex-col items-center justify-center py-32"
    >
      <h2 className="text-5xl md:text-6xl font-bold tracking-wide mb-20 text-center">
        Blender Renders
      </h2>

      <div className="w-full h-[600px]">
        {isVisible && (
          <CircularGallery
            items={items}
            bend={3}
            textColor="#222"
            borderRadius={0.05}
            font="bold 28px Figtree"
            scrollSpeed={2}
            scrollEase={0.05}
          />
        )}
      </div>
    </section>
  );
}
