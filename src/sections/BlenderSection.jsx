import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
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

    if (sectionRef.current) observer.observe(sectionRef.current);
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
      className="relative min-h-screen px-10 md:px-24 py-40 bg-[#f4e7ce] text-[#111] overflow-hidden"
    >
      {/* Soft cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#e6d3b0]/40 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="flex items-baseline gap-6 mb-24">
          <span className="text-6xl font-light text-gray-400 tracking-tight">
            04
          </span>
          <h2 className="text-6xl font-semibold tracking-tight">
            Blender Renders
          </h2>
        </div>

        {/* Cinematic Intro */}
        <div className="grid md:grid-cols-2 gap-16 mb-28">
          <p className="text-xl leading-relaxed text-gray-700">
            A curated selection of my 3D visualization work —
            focused on lighting, cinematic framing, material realism,
            and atmospheric storytelling.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Each render explores depth, contrast, and mood —
            blending technical precision with creative direction.
            From automotive studio shots to sci-fi environments,
            I experiment with visual narrative and composition.
          </p>
        </div>

        {/* Gallery */}
        <div className="w-full h-[650px] mb-32">
          {isVisible && (
            <CircularGallery
              items={items}
              bend={2.5}
              textColor="#222"
              borderRadius={0.06}
              font="bold 28px Figtree"
              scrollSpeed={2}
              scrollEase={0.05}
            />
          )}
        </div>

        {/* Premium CTA */}
        <div className="flex justify-center">
          <Link
            to="/blender-gallery"
            className="group relative px-14 py-5 rounded-full 
                       bg-black text-white font-medium tracking-wide
                       transition-all duration-500
                       hover:scale-105"
          >
            <span className="relative z-10">Enter Full Gallery</span>

            {/* Subtle glow */}
            <span className="absolute inset-0 rounded-full 
                             bg-gradient-to-r from-white/10 to-transparent
                             opacity-0 group-hover:opacity-100
                             transition duration-500" />
          </Link>
        </div>

        {/* Cinematic Divider */}
        <div className="mt-32 flex justify-center">
          <div className="w-32 h-[1px] bg-black/20" />
        </div>

      </div>
    </section>
  );
}