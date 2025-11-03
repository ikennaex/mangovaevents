import React from "react";
import { Star } from "lucide-react";
import FadeIn from "./Fadein";

const testimonials = [
  {
    name: "Esther Makinwa",
    role: "Bride",
    image: "https://cdn-icons-png.flaticon.com/128/847/847969.png",
    text: "Magnova Events made our wedding day truly magical! Every detail was beyond perfect, and the team handled everything with so much care and creativity.",
    rating: 5,
  },
  {
    name: "Micheal Okoro",
    role: "Corporate Client",
    image: "https://cdn-icons-png.flaticon.com/128/847/847969.png",
    text: "Professional, creative, and extremely organized. They transformed our product launch into an unforgettable experience that impressed our clients and partners.",
    rating: 5,
  },
  {
    name: "Haruna Amina",
    role: "Event Host",
    image: "https://cdn-icons-png.flaticon.com/128/847/847969.png",
    text: "From planning to execution, Magnova delivered excellence. Their passion and attention to detail are unmatched. I’ll definitely work with them again!",
    rating: 4,
  },
  {
    name: "Tunde Adewale",
    role: "Groom",
    image: "https://cdn-icons-png.flaticon.com/128/847/847969.png",
    text: "They handled our entire wedding flawlessly! The decor, organization, and timing were spot on — truly exceeded our expectations.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-10">
          What Our <span className="text-customYellow">Clients Say</span>
        </h2>

        {/* Responsive Grid with equal height cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {testimonials.map((t, index) => (
            <FadeIn duration={100} key={index}>
              <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition duration-300 h-full">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-customYellow"
                />

                <p className="text-gray-600 italic mb-4 text-sm leading-relaxed flex-grow">
                  “{t.text}”
                </p>

                <div className="flex justify-center mb-2">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                <h3 className="text-lg font-semibold text-gray-900">{t.name}</h3>
                <p className="text-customYellow font-medium text-sm">{t.role}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
