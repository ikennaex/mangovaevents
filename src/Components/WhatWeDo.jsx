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
  Sparkle,
} from "lucide-react";
import FadeIn from "./Fadein";

const services = [
  {
    icon: <Calendar className="text-pink-500" size={28} />,
    title: "Event Planning & Management",
    description:
      "From concept development to flawless execution, we handle every aspect of event coordination. Our expert planners design unique experiences tailored to your vision, purpose, and budget. Includes budgeting, scheduling, vendor coordination, and on-site management.",
  },
  {
    icon: <Palette className="text-yellow-500" size={28} />,
    title: "Event Styling & Decoration",
    description:
      "We transform ordinary spaces into extraordinary venues. Our decoration team blends aesthetics with innovation, creating bespoke designs that reflect your theme and personality. From weddings to corporate dinners, our décor adds elegance, color, and ambience.",
  },
  {
    icon: <Truck className="text-indigo-500" size={28} />,
    title: "Rentals & Logistics Support",
    description:
      "Magnova offers a full range of event rental services including tents, chairs, tables, sound systems, lighting equipment, and more. Our stylish and well-maintained inventory complements your event’s theme perfectly.",
  },
  {
    icon: <Lightbulb className="text-blue-500" size={28} />,
    title: "Event Production & Lighting",
    description:
      "Bring your event to life with world-class production and lighting. We specialize in stage setup, sound engineering, visual effects, and lighting design to create the perfect atmosphere and elevate guest experiences.",
  },
  {
    icon: <Utensils className="text-red-500" size={28} />,
    title: "Catering & Cuisine Planning",
    description:
      "Delight your guests with exceptional culinary experiences. Our catering team delivers delicious, high-quality meals — from local and continental dishes to gourmet specialties. Includes menu planning, buffet setup, live cooking, and bar services.",
  },
  {
    icon: <Users className="text-green-500" size={28} />,
    title: "Ushers & Hospitality Staff",
    description:
      "Our professional ushers and hospitality team ensure guests feel welcomed and comfortable. Trained in etiquette, communication, and protocol, our staff represent your brand with professionalism and warmth.",
  },
  {
    icon: <Baby className="text-purple-500" size={28} />,
    title: "Kiddies Parties & Entertainment",
    description:
      "We make children’s celebrations magical! From creative themes and mascots to games and entertainment, Magnova ensures every kid’s event is colorful, safe, and full of joy — perfect for birthdays, schools, and family occasions.",
  },
  {
    icon: <Camera className="text-pink-600" size={28} />,
    title: "Photography & Videography",
    description:
      "We offer professional photography and videography through creative partnerships to ensure every special moment is beautifully captured and preserved in timeless quality.",
  },
  {
    icon: <Globe className="text-orange-500" size={28} />,
    title: "Logistics & Support",
    description:
      "We provide reliable event logistics and transportation services, covering delivery, setup, and removal of materials and equipment for all event types — ensuring smooth operations from start to finish.",
  },
  {
    icon: <Briefcase className="text-cyan-500" size={28} />,
    title: "Corporate & Private Events",
    description:
      "We handle conferences, product launches, gala nights, weddings, anniversaries, birthdays, and charity events. Each project is managed with creativity, precision, and attention to detail for guaranteed success.",
  },
  {
    icon: <Briefcase className="text-cyan-500" size={28} />,
    title: "Training & Consultancy",
    description:
      "Magnova Events will soon offer training and consultancy for aspiring event planners and hospitality professionals — sharing knowledge, best practices, and hands-on experience to empower the next generation.",
  },
  {
    icon: <Sparkle className="text-cyan-500" size={28} />,
    title: "MagnovaMoment",
    description:
      "",
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
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <FadeIn duration={100} key={index}>
              <div className="relative bg-white rounded-2xl shadow-md p-6 border border-transparent hover:border-pink-200 transition-all duration-300 group">
                <div className="flex flex-col items-center justify-center">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {service.title}
                  </h3>

                  {/* Hidden description that shows on hover */}
                  <p className="text-gray-600 text-sm leading-relaxed max-h-0 overflow-hidden opacity-0 group-hover:max-h-60 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
