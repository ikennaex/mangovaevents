import React from "react";
import {
  portfolioImg,
  portfolioimg2,
  portfoliovideo1,
  portfoliovideo2,
  portfoliovideo3,
  portfoliovideo4,
  portfoliovideo5,
  portfoliovideo6,
} from "../imports";
import FadeIn from "../Components/Fadein";

const PortfolioPage = () => {
  const portfolioItems = [
    { type: "image", src: portfolioImg, title: "Birthday Event" },
    { type: "image", src: portfolioimg2, title: "Wedding Event" },
    { type: "video", src: portfoliovideo1, title: "Magnova Events" },
    { type: "video", src: portfoliovideo2, title: "Wedding Reception" },
    { type: "video", src: portfoliovideo3, title: "Magnova Events" },
    { type: "video", src: portfoliovideo4, title: "Wedding Reception" },
    { type: "video", src: portfoliovideo5, title: "Wedding Reception" },
    { type: "video", src: portfoliovideo6, title: "Magnova Events" },
  ];

  return (
    <section className="bg-gray-50 py-16 pt-36">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">
          Our <span className="text-customYellow">Portfolio</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <FadeIn duration={100}>
            <div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer"
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <video
                  src={item.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold">
                  {item.title}
                </h3>
              </div>
            </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;
