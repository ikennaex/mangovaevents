import React from "react";
import { Star, ShieldCheck, Smile, Users } from "lucide-react";
import CountUp from "react-countup";

const Stats = () => {
  const stats = [
    { icon: <Star size={40} />, number: 98, suffix: "%", label: "5 Star Customer Ratings" },
    { icon: <ShieldCheck size={40} />, number: 98, suffix: "%", label: "Service Guaranteed" },
    { icon: <Smile size={40} />, number: 100, suffix: "+", label: "Happy Clients" },
    { icon: <Users size={40} />, number: 5, suffix: "+", label: "Years Of Experience" },
  ];

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 text-center"
      style={{
        backgroundImage: "url('/src/assets/img1.jpg')", // replace with your actual image path
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Stats Content */}
      <div className="relative z-10 container mx-auto px-6 ">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 justify-center items-center ">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-3 text-white"
            >
              <div className="text-customYellow">{stat.icon}</div>
              <h2 className="text-2xl font-bold text-customYellow">
                <CountUp end={stat.number} duration={2.5} /> {stat.suffix}
              </h2>
              <p className="text-lg font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
