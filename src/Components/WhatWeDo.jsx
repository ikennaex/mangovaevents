import React from "react";
import {
  Calendar,
  Palette,
  Truck,
  Lightbulb,
  Utensils,
  Users,
  Camera,
  Baby,
  Briefcase,
  Globe,
} from "lucide-react";
import FadeIn from "./Fadein";

const services = [
  {
    icon: <Calendar className="text-pink-500" size={28} />,
    title: "Event Planning & Management",
  },
  {
    icon: <Palette className="text-yellow-500" size={28} />,
    title: "Event Styling & Decoration",
  },
  {
    icon: <Truck className="text-indigo-500" size={28} />,
    title: "Event Rentals",
  },
  {
    icon: <Lightbulb className="text-blue-500" size={28} />,
    title: "Event Production & Lighting",
  },
  {
    icon: <Utensils className="text-red-500" size={28} />,
    title: "Catering & Cuisine Planning",
  },
  {
    icon: <Users className="text-green-500" size={28} />,
    title: "Ushers & Hospitality Staff",
  },
  {
    icon: <Baby className="text-purple-500" size={28} />,
    title: "Kiddies Parties & Entertainment",
  },
  {
    icon: <Camera className="text-pink-600" size={28} />,
    title: "Photography & Videography",
  },
  {
    icon: <Globe className="text-orange-500" size={28} />,
    title: "Logistics & Support",
  },
  {
    icon: <Briefcase className="text-cyan-500" size={28} />,
    title: "Corporate & Private Events",
  },
  {
    icon: <Briefcase className="text-cyan-500" size={28} />,
    title: "Training & Consultancy",
  },
];

const WhatWeDo = () => {
  return (
    <section className="w-full py-20 bg-gray-50" id="what-we-do">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Header */}
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
          What We <span className="text-customYellow">Do</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          At Magnova Events, we blend creativity, precision, and professionalism to deliver unforgettable experiences for every occasion.
        </p>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <FadeIn duration={100}>
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-pink-200"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
