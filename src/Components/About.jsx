import React from "react";
import { img1, ceoImg } from "../imports";
import { Link } from "react-router";
import FadeIn from "./Fadein";

const About = () => {
  return (
    <section className="relative bg-customYellow/30 py-16 overflow-hidden">
      {/* Floating colorful blobs */}
      <div className="absolute top-10 left-10 w-56 h-56 bg-pink-400/40 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-400/40 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-400/30 rounded-full blur-3xl animate-pulse -translate-x-1/2 -translate-y-1/2"></div>

      {/* About Section */}
      <FadeIn duration={100}>
      <div className="relative container mx-auto px-6 flex flex-col md:flex-row items-center gap-10 z-10">
        {/* About Image */}
        <img
          className="rounded-[50%_20%_90%_70%_/_60%_30%_70%_40%] border-8 border-customYellow w-full md:w-1/2 object-cover shadow-xl relative z-10"
          src={img1}
          alt="About Magnova Events"
        />

        {/* About Text */}
        <div className="md:w-1/2 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="text-2xl md:text-4xl">About</span>{" "}
            <span className="text-customYellow">Magnova Events</span>
          </h1>

          <p className="mt-4 text-gray-700 leading-relaxed">
            At Magnova Events, we are passionate about transforming ideas into
            unforgettable experiences, whether you are planning an intimate
            gathering, a high-profile corporate event, or a grand celebration.
            Our team brings creativity, precision, and professionalism to every
            detail. We do not just plan events; we create moments that inspire,
            connect, and last a lifetime.
          </p>
        </div>
      </div>
      </FadeIn>

      {/* Our Story Section */}
      <div className="relative container mx-auto px-6 mt-20 flex flex-col md:flex-row items-center gap-10 z-10">
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-customYellow">Story</span>
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Founded on the belief that no two moments should ever feel the same,
            Magnova Events was born from a passion for creativity, precision,
            and unforgettable experiences. We do not just plan events; we design
            immersive stories that connect people, evoke emotion, and leave
            lasting impressions.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            From intimate gatherings to grand corporate celebrations, our team
            blends artistry, strategy, and flawless execution. Every detail,
            from lighting and layout to music and mood, aligns perfectly with
            your vision.
          </p>

        </div>

        {/* CEO Image */}
        <div className="md:w-1/2 flex justify-center relative z-10">
          {/* Floating vibrant blob */}
          <div className="absolute -top-10 -right-10 w-60 h-60 bg-orange-400/30 rounded-full blur-3xl animate-pulse"></div>

          {/* Image container */}
          <div className="relative z-20 inline-block">
            <img
              src={ceoImg}
              alt="CEO of Magnova Events"
              className="w-80 h-80 object-cover rounded-[60%_30%_70%_40%_/_50%_40%_60%_30%] border-8 border-customYellow shadow-lg"
            />

            {/* CEO Tag */}
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm border border-customYellow text-gray-900 px-4 py-2 rounded-lg shadow-md flex items-center gap-2">
              <div className="w-2 h-2 bg-customYellow rounded-full"></div>
              <span className="font-semibold text-sm">
                CEO - Magnova Events
              </span>
            </div>
          </div>
        </div>
      </div>

        <Link to={"/about"}>
          <button className="mx-auto mt-5 px-6 py-3 flex items-center gap-2 rounded-full bg-white text-gray-900 font-semibold hover:bg-gray-100 transition">
            Read more
          </button>
        </Link>
    </section>
  );
};

export default About;
