import porscheFront from "../assets/renders/porsche-front.png";
import porscheSide from "../assets/renders/porsche-side.png";
import lambo from "../assets/renders/lamborghini.png";
import bike from "../assets/renders/bike.png";
import cyberpunk from "../assets/renders/cyberpunk.png";
import factory1 from "../assets/renders/factory1.png";
import factory2 from "../assets/renders/factory2.png";
import scifi from "../assets/renders/scifi.png";

export default function BlenderGallery() {
  const images = [
    porscheFront,
    porscheSide,
    lambo,
    bike,
    cyberpunk,
    factory1,
    factory2,
    scifi
  ];

  return (
    <section className="min-h-screen bg-[#f4efe6] text-[#111] px-10 md:px-20 py-28">

      <h2 className="text-5xl md:text-6xl font-bold mb-20 text-center tracking-tight">
        Full Resolution Renders
      </h2>

      <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
        {images.map((img, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={img}
              alt={`render-${index}`}
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>

    </section>
  );
}
