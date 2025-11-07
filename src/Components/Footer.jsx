import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Phone,
  Mail,
  MapPin,
  Globe,
  MessageCircle,
} from "lucide-react";
import { BsLinkedin, BsTiktok, BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-16 pb-8 relative overflow-hidden">
      {/* Decorative blobs */}
      {/* <div className="absolute top-0 left-0 w-64 h-64 bg-customYellow/10 blur-3xl rounded-full"></div> */}
      {/* <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-500/10 blur-3xl rounded-full"></div> */}

      <div className="relative container mx-auto px-6 z-10">
        {/* Brand & Tagline */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            Magnova <span className="text-customYellow">Events</span>
          </h2>
          <p className="mt-2 text-gray-400 text-lg">
            Where Vision Meets Perfection, Let’s create something unforgettable together.
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-10 text-center md:text-left">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex justify-center md:justify-start items-center gap-3">
                <MapPin className="w-5 h-5 text-customYellow" />
                Road A, Iroko Estate, Lasu/Igando Road, Lagos, Nigeria.
              </li>
              <li className="flex justify-center md:justify-start items-center gap-3">
                <Mail className="w-5 h-5 text-customYellow" />
                info@magnovaevents.com.ng / magnovaevents@gmail.com
              </li>
              <li className="flex justify-center md:justify-start items-center gap-3">
                <Phone className="w-5 h-5 text-customYellow" />
                +234 807 932 5361
              </li>
              <li className="flex justify-center md:justify-start items-center gap-3">
                <Globe className="w-5 h-5 text-customYellow" />
                www.magnovaevents.com.ng
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3 text-gray-300">
              <li><Link  to="/" className="hover:text-customYellow transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-customYellow transition">About</Link></li>
              <li><Link to="/services" className="hover:text-customYellow transition">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-customYellow transition">Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-customYellow transition">Contact</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/magnovaevents_ltd?igsh=Zm94aHpydWJhbHQ4&utm_source=qr" target="_blank" className="p-3 bg-customYellow/20 rounded-full hover:bg-customYellow/40 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="http://www.tiktok.com/@magnovaevents" target="_blank" className="p-3 bg-customYellow/20 rounded-full hover:bg-customYellow/40 transition">
                <BsTiktok className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/magnova-events/" target="_blank" className="p-3 bg-customYellow/20 rounded-full hover:bg-customYellow/40 transition">
                <BsLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/+2348079325361" target="_blank"
                className="p-3 bg-customYellow/20 rounded-full hover:bg-customYellow/40 transition"
              >
                <BsWhatsapp className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} Magnova Events. All rights reserved.  
            Designed by <span className="text-customYellow font-semibold"><a target="_blank" href="https://xmotivotechnologies.com/viewportfolio">xMotivo Technologies</a></span>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
