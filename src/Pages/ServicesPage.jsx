import React from "react";
import {
  Calendar,
  Palette,
  Truck,
  Lightbulb,
  Utensils,
  Users,
  Baby,
  Camera,
  Globe,
  Briefcase,
} from "lucide-react";
import FadeIn from "../Components/Fadein";

const services = [
  {
    icon: <Calendar className="text-pink-500" size={28} />,
    title: "Event Planning & Management",
    description:
      "From concept development to flawless execution, we handle every aspect of event coordination — budgeting, scheduling, vendor coordination, and on-site management — ensuring your event runs seamlessly from start to finish.",
  },
  {
    icon: <Palette className="text-yellow-500" size={28} />,
    title: "Event Styling & Decoration",
    description:
      "We transform ordinary spaces into extraordinary venues through bespoke décor designs that blend creativity, color, and elegance, tailored to reflect your theme and personality.",
  },
  {
    icon: <Truck className="text-indigo-500" size={28} />,
    title: "Event Rentals",
    description:
      "We provide stylish, well-maintained event rentals — including tents, chairs, tables, sound systems, and lighting — all designed to complement your event’s theme perfectly.",
  },
  {
    icon: <Lightbulb className="text-blue-500" size={28} />,
    title: "Event Production & Lighting",
    description:
      "Bring your event to life with professional stage setup, sound engineering, lighting, and visual effects — all tailored to create an unforgettable atmosphere.",
  },
  {
    icon: <Utensils className="text-red-500" size={28} />,
    title: "Catering & Cuisine Planning",
    description:
      "Delight your guests with high-quality local and continental dishes, gourmet options, and buffet setups. We handle menu planning, live cooking stations, and bar services for every occasion.",
  },
  {
    icon: <Users className="text-green-500" size={28} />,
    title: "Ushers & Hospitality Staff",
    description:
      "Our professional ushers and hospitality team ensure guests are warmly welcomed and well-attended, reflecting your brand with class, etiquette, and professionalism.",
  },
  {
    icon: <Baby className="text-purple-500" size={28} />,
    title: "Kiddies Parties & Entertainment",
    description:
      "We make children’s celebrations magical with creative themes, mascots, games, and fun activities — creating safe, joyful experiences for birthdays and school events.",
  },
  {
    icon: <Camera className="text-pink-600" size={28} />,
    title: "Photography & Videography",
    description:
      "Capture every moment beautifully with our professional photo and video services — ensuring your memories are preserved with timeless quality.",
  },
  {
    icon: <Globe className="text-orange-500" size={28} />,
    title: "Logistics & Support",
    description:
      "We ensure smooth delivery, setup, and removal of materials and equipment — covering every logistical detail for seamless event operations.",
  },
  {
    icon: <Briefcase className="text-cyan-500" size={28} />,
    title: "Corporate & Private Events",
    description:
      "From conferences and product launches to weddings and galas, we manage all event types with precision, creativity, and attention to detail.",
  },
  {
    icon: <Briefcase className="text-cyan-500" size={28} />,
    title: "Training & Consultancy",
    description:
      "Magnova Events will soon offer hands-on training and consultancy programs for aspiring event professionals — empowering the next generation of event experts.",
  },
];

const ServicesPage = () => {
  return (
    <section className="pt-36 w-full py-20 bg-gray-50" id="what-we-do">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Header */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
          What We <span className="text-customYellow">Do</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          At Magnova Events, we blend creativity, precision, and professionalism
          to deliver unforgettable experiences for every occasion.
        </p>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <FadeIn duration={100}>
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-pink-200"
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

export default ServicesPage;
