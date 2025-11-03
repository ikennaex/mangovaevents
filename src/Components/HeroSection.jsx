import React from "react";
import { Play, Calendar, Briefcase, Users, Mail } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import { herovideo } from "../imports";
import FadeIn from "./Fadein";

const HeroSection = () => {
  return (
    <section className="pt-36 relative w-full min-h-screen flex flex-col justify-center bg-cover bg-center text-white pb-7">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={herovideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <FadeIn duration = {100} >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Welcome to Magnova <span className="text-customYellow">Events</span>
        </h1>

        </FadeIn>
        <p className=" fade-in mt-6 text-lg max-w-2xl mx-auto text-gray-200">
          Crafting unforgettable experiences from intimate gatherings to grand
          celebrations. At{" "}
          <span className="font-semibold text-white">Magnova Events</span>, we
          turn your ideas into timeless moments that inspire, connect, and last
          a lifetime.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://wa.me/+2348079325361" target="_blank">
            <button className="px-6 py-3 flex items-center gap-2 rounded-full bg-white text-gray-900 font-semibold hover:bg-gray-100 transition">
              <BsWhatsapp /> Message Us
            </button>
          </a>

          <a href="mailto:info@magnovaevents.com.ng?subject=Inquiry%20from%20Website">
            <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-customYellow text-white font-semibold hover:bg-yellow-600 transition">
              <Mail size={18} /> Send an Email
            </button>
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          <FadeIn duration={100}>
          <ServiceCard
            icon={<Calendar className="text-blue-500" />}
            title="Wedding Party"
            text="Our wedding services include all stages of planning, from start to finish."
          />
          </FadeIn>

          <FadeIn duration={100}>
          <ServiceCard
            icon={<Calendar className="text-red-500" />}
            title="Birthday"
            text="From concept to execution, we ensure every detail is perfect."
          />
          </FadeIn>

          <FadeIn duration={100}>
          <ServiceCard
            icon={<Briefcase className="text-yellow-500" />}
            title="Corporate Events"
            text="We curate professional, impactful experiences for your organization."
          />
          </FadeIn>

          <FadeIn duration={100}>
          <ServiceCard
            icon={<Users className="text-indigo-500" />}
            title="Parties & Events"
            text="We plan and manage parties and events for families and companies."
          />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon, title, text }) => (
  <div className="bg-white text-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition flex flex-col h-full">
    <div className="flex items-center gap-3 mb-4">
      {icon}
      <h3 className="font-semibold text-lg">{title}</h3>
    </div>
    <p className="text-sm text-gray-600 mt-auto">{text}</p>
  </div>
);

export default HeroSection;
