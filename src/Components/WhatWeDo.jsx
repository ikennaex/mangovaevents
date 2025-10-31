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

const services = [
  {
    icon: <Calendar className="text-pink-500" size={28} />,
    title: "Event Planning & Management",
    description:
      "From concept to flawless execution, we handle every aspect of event coordination, including budgeting, scheduling, vendor coordination, and on-site management.",
  },
  {
    icon: <Palette className="text-yellow-500" size={28} />,
    title: "Event Styling & Decoration",
    description:
      "We transform spaces into extraordinary venues, blending aesthetics with innovation. Our décor adds elegance, color, and ambience to every celebration.",
  },
  {
    icon: <Truck className="text-indigo-500" size={28} />,
    title: "Event Rentals",
    description:
      "We offer tents, chairs, tables, lighting, and sound systems, all stylish, well-maintained, and customizable to match your event theme.",
  },
  {
    icon: <Lightbulb className="text-blue-500" size={28} />,
    title: "Event Production & Lighting",
    description:
      "Bring your event to life with professional stage setups, lighting, sound engineering, and visual effects that elevate your guests’ experience.",
  },
  {
    icon: <Utensils className="text-red-500" size={28} />,
    title: "Catering & Cuisine Planning",
    description:
      "Delight your guests with premium catering, from buffets to fine dining, with menu planning, live cooking stations, and bar services.",
  },
  {
    icon: <Users className="text-green-500" size={28} />,
    title: "Ushers & Hospitality Staff",
    description:
      "Our trained ushers ensure every guest feels welcomed and well-attended, representing your brand with grace and professionalism.",
  },
  {
    icon: <Baby className="text-purple-500" size={28} />,
    title: "Kiddies Parties & Entertainment",
    description:
      "We make kids’ events magical with creative themes, mascots, games, and activities for unforgettable birthdays and school celebrations.",
  },
  {
    icon: <Camera className="text-pink-600" size={28} />,
    title: "Photography & Videography",
    description:
      "Capture timeless moments with professional photo and video coverage, beautifully preserving every memory in high quality.",
  },
  {
    icon: <Globe className="text-orange-500" size={28} />,
    title: "Logistics & Support",
    description:
      "We manage delivery, setup, and removal of materials, ensuring smooth operations and timely support for all event types.",
  },
  {
    icon: <Briefcase className="text-cyan-500" size={28} />,
    title: "Corporate & Private Events",
    description:
      "We manage corporate and private events like conferences, weddings, and galas with tailored creativity and flawless execution.",
  },
  {
    icon: <Briefcase className="text-cyan-500" size={28} />,
    title: "Training & Consultancy",
    description:
      "In the near future, Magnova Events will offer training and consultancy programs for aspiring event planners, decorators, and hospitality professionals, sharing industry knowledge, best practices, and hands-on experience to empower the next generation of event experts.",
  },
];

const WhatWeDo = () => {
  return (
    <section className="w-full py-20 bg-gray-50" id="what-we-do">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Header */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
          What We <span className="text-customYellow">Do</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          At Magnova Events, we blend creativity, precision, and professionalism to deliver unforgettable experiences for every occasion.
        </p>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
