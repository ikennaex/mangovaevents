import React, { useState } from "react";
import {
  herovideo,
  portfolioImg,
  portfolioimg2,
  portfoliovideo1,
  portfoliovideo2,
  portfoliovideo3,
  portfoliovideo4,
  portfoliovideo5,
  portfoliovideo6,
} from "../imports";
import { Link } from "react-router";
import FadeIn from "./Fadein";

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imgSrc) => {
    setSelectedImage(imgSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="relative bg-white py-20 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-customYellow/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-400/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative container mx-auto px-6 text-center z-10">
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
          Our <span className="text-customYellow">Portfolio</span>
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed mb-12 text-sm">
          Magnova Events is a full-service event planning, design, and
          production company based in Nigeria, specializing in creating
          exceptional experiences for corporate, social, and private clients.
          Since inception, we’ve been redefining elegance, creativity, and
          professionalism by bringing visions to life through innovative design,
          flawless coordination, and outstanding execution.
        </p>

        {/* Video / Image section */}
        <FadeIn>
          <div className="flex justify-center mb-16">
            <div className="relative w-full md:w-3/4 rounded-3xl overflow-hidden shadow-xl border-4 border-customYellow p-2">
              {/* Grid: 1 per row on mobile, more on larger screens */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  portfolioImg,
                  portfolioimg2,
                  portfoliovideo1,
                  portfoliovideo2,
                  portfoliovideo3,
                  portfoliovideo4,
                  portfoliovideo5,
                  portfoliovideo6,
                  herovideo,
                ].map((item, index) =>
                  item.endsWith(".mp4") ? (
                    <video
                      key={index}
                      src={item}
                      controls
                      className="w-full aspect-[16/9] object-cover rounded-xl"
                    />
                  ) : (
                    <img
                      key={index}
                      src={item}
                      alt={`Event ${index + 1}`}
                      onClick={() => handleImageClick(item)}
                      className="w-full aspect-[16/9] object-cover rounded-xl cursor-pointer hover:opacity-90 transition"
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Fullscreen Modal for Image */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <img
              src={selectedImage}
              alt="Full view"
              className="max-w-full max-h-[90vh] rounded-lg shadow-lg"
            />
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-white text-2xl font-bold bg-black/60 px-3 py-1 rounded-full"
            >
              ×
            </button>
          </div>
        )}

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-10 text-left">
          {/* Mission */}
          <FadeIn duration={200}>
            <div className="bg-customYellow/10 rounded-3xl p-8 shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-customYellow mb-3">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                To craft unforgettable event experiences that reflect
                creativity, culture, and excellence, while ensuring seamless
                coordination, exceptional service, and client satisfaction at
                every stage.
              </p>
            </div>
          </FadeIn>

          {/* Vision */}
          <FadeIn duration={300}>
            <div className="bg-customYellow/10 rounded-3xl p-8 shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-customYellow mb-3">
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                To become Nigeria’s leading event management and design brand,
                recognized across Africa for innovation, reliability, and
                timeless elegance in every celebration.
              </p>
            </div>
          </FadeIn>

          {/* Core Values */}
          <FadeIn duration={400}>
            <div className="bg-customYellow/10 rounded-3xl p-8 shadow-md hover:shadow-lg transition text-sm">
              <h3 className="text-2xl font-semibold text-customYellow mb-3">
                Our Core Values
              </h3>
              <ul className="text-gray-700 leading-relaxed space-y-2">
                <li>
                  • <strong>Creativity</strong> – We transform ideas into
                  extraordinary realities.
                </li>
                <li>
                  • <strong>Professionalism</strong> – We uphold high standards
                  in service and execution.
                </li>
                <li>
                  • <strong>Innovation</strong> – We embrace modern event
                  technologies.
                </li>
                <li>
                  • <strong>Communication</strong> – We build trust through
                  clear collaboration.
                </li>
                <li>
                  • <strong>Sustainability</strong> – We promote eco-friendly
                  event solutions.
                </li>
                <li>
                  • <strong>Excellence</strong> – We go beyond expectations,
                  always.
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>

        <Link to={"/portfolio"}>
          <button className="mt-5 px-6 py-3 flex items-center gap-2 rounded-full bg-customYellow text-gray-900 mx-auto font-semibold hover:bg-gray-100 transition">
            View more
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Portfolio;
