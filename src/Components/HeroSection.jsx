import React from "react";
import { Calendar, Briefcase, Users, Mail } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import { herosection1 } from "../imports";
import FadeIn from "./Fadein";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center text-white overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover object-center"
          src={herosection1}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/60 md:bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-40 md:pt-60">
        <FadeIn duration={200}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight max-w-3xl">
            Welcome to{" "}
            <span className="text-customYellow">Magnova Events</span>
          </h1>
        </FadeIn>

        <p className="mt-5 text-base sm:text-lg text-gray-200 max-w-2xl">
          Crafting unforgettable experiences from intimate gatherings to grand
          celebrations. We turn your ideas into timeless moments that inspire,
          connect, and last a lifetime.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/+2348079325361"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-7 py-3 flex items-center gap-2 rounded-full bg-white text-gray-900 font-semibold hover:bg-gray-200 transition-all">
              <BsWhatsapp /> Message Us
            </button>
          </a>

          <a href="mailto:info@magnovaevents.com.ng?subject=Inquiry%20from%20Website">
            <button className="px-7 py-3 flex items-center gap-2 rounded-full bg-customYellow text-white font-semibold hover:bg-yellow-600 transition-all">
              <Mail size={18} /> Send an Email
            </button>
          </a>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-20 w-full max-w-5xl px-4">
          <FadeIn duration={200}>
            <ServiceCard
              icon={<Calendar className="text-blue-500" />}
              title="Weddings"
              text="From intimate ceremonies to grand celebrations — we handle it all."
            />
          </FadeIn>
          <FadeIn duration={250}>
            <ServiceCard
              icon={<Calendar className="text-red-500" />}
              title="Birthdays"
              text="Celebrate life’s milestones with elegance and fun."
            />
          </FadeIn>
          <FadeIn duration={300}>
            <ServiceCard
              icon={<Briefcase className="text-yellow-500" />}
              title="Corporate Events"
              text="Professional events with seamless execution and impact."
            />
          </FadeIn>
          <FadeIn duration={350}>
            <ServiceCard
              icon={<Users className="text-indigo-500" />}
              title="Private Parties"
              text="We create memorable, stylish experiences for your guests."
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon, title, text }) => (
  <div className="bg-white/90 backdrop-blur-sm text-gray-800 p-5 sm:p-6 rounded-2xl shadow-md hover:shadow-xl transition-all flex flex-col items-start h-full">
    <div className="flex items-center gap-3 mb-2">
      {icon}
      <h3 className="font-semibold text-lg">{title}</h3>
    </div>
    <p className="text-sm text-gray-600">{text}</p>
  </div>
);

export default HeroSection;
