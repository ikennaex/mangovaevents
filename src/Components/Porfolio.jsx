import React from "react";
import { portfolioImg } from "../imports"; // replace with actual import for your image or video thumbnail

const Portfolio = () => {
  return (
    <section className="relative bg-white py-20 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-customYellow/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-400/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative container mx-auto px-6 text-center z-10">
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          Our <span className="text-customYellow">Portfolio</span>
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed mb-12">
          Magnova Events is a full-service event planning, design, and production company based in Nigeria,
          specializing in creating exceptional experiences for corporate, social, and private clients. 
          Since inception, we’ve been redefining elegance, creativity, and professionalism by bringing 
          visions to life through innovative design, flawless coordination, and outstanding execution.
        </p>

        {/* Video / Image section */}
        <div className="flex justify-center mb-16">
          <div className="relative w-full md:w-3/4 h-[400px] rounded-3xl overflow-hidden shadow-xl border-4 border-customYellow">
            {/* Example: Replace with your video or image */}
            <video
              className="w-full h-full object-cover"
              src="/videos/past-events.mp4"
              autoPlay
              muted
              loop
              playsInline
            ></video>
            {/* If you prefer image:
            <img src={portfolioImg} alt="Past events" className="w-full h-full object-cover" /> */}
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-10 text-left">
          {/* Mission */}
          <div className="bg-customYellow/10 rounded-3xl p-8 shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-customYellow mb-3">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To craft unforgettable event experiences that reflect creativity, culture, and excellence,
              while ensuring seamless coordination, exceptional service, and client satisfaction at every stage.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-customYellow/10 rounded-3xl p-8 shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-customYellow mb-3">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To become Nigeria’s leading event management and design brand, recognized across Africa for
              innovation, reliability, and timeless elegance in every celebration.
            </p>
          </div>

          {/* Core Values */}
          <div className="bg-customYellow/10 rounded-3xl p-8 shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-customYellow mb-3">Our Core Values</h3>
            <ul className="text-gray-700 leading-relaxed space-y-2">
              <li>• <strong>Creativity</strong> – We transform ideas into extraordinary realities.</li>
              <li>• <strong>Professionalism</strong> – We uphold high standards in service and execution.</li>
              <li>• <strong>Innovation</strong> – We embrace modern event technologies.</li>
              <li>• <strong>Communication</strong> – We build trust through clear collaboration.</li>
              <li>• <strong>Sustainability</strong> – We promote eco-friendly event solutions.</li>
              <li>• <strong>Excellence</strong> – We go beyond expectations, always.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
