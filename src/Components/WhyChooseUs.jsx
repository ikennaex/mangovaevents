import React from "react";
import { CheckCircle } from "lucide-react"; // Lucide icon for checkmarks
import FadeIn from "./fadein";

const WhyChooseUs = () => {
  const reasons = [
    "Full-service event solutions under one roof",
    "Creative, professional, and experienced team",
    "Attention to detail and customized planning",
    "Reliable vendor network and logistics support",
    "Commitment to client satisfaction and excellence",
  ];

  return (
    <section className="relative bg-white py-20 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-customYellow/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-pink-400/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative container mx-auto px-6 text-center z-10">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Why Choose <span className="text-customYellow">Magnova Events</span>
        </h2>

        <p className="max-w-2xl mx-auto text-gray-700 mb-12">
          We are more than event planners — we are creators of unforgettable experiences. 
          Here’s why clients trust us to bring their visions to life:
        </p>

        {/* List of reasons */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <FadeIn duration={200}>
            <div
              key={index}
              className="flex items-start gap-4 bg-customYellow/10 rounded-3xl p-6 shadow-md hover:shadow-lg transition"
            >
              <CheckCircle className="w-6 h-6 text-customYellow flex-shrink-0 mt-1" />
              <p className="text-gray-800 font-medium leading-relaxed">{reason}</p>
            </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
