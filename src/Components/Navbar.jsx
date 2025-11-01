import React, { useState } from "react";
import { Link } from "react-router";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { logo } from "../imports";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "About Us", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Why Choose Us", link: "/whychooseus" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="h-12 sm:h-14 object-contain transition-transform duration-300 hover:scale-105"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          {menuItems.map((menu, index) =>
            menu.link.includes("#") ? (
              <a
                key={index}
                href={menu.link}
                className="text-gray-800 hover:text-customYellow font-semibold transition duration-300 relative group"
              >
                {menu.name}
                <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-customYellow transition-all duration-300 group-hover:w-full"></span>
              </a>
            ) : (
              <Link
                key={index}
                to={menu.link}
                className="text-gray-800 hover:text-customYellow font-semibold transition duration-300 relative group"
              >
                {menu.name}
                <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-customYellow transition-all duration-300 group-hover:w-full"></span>
              </Link>
            )
          )}

          {/* Phone Number */}
          <a
            href="tel:+2348079325361"
            className="flex items-center gap-2 text-customYellow font-semibold hover:text-yellow-500 transition"
          >
            <FaPhoneAlt className="text-lg" />
            +234 807 932 5361
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          {open ? (
            <IoClose
              size={36}
              className="text-gray-800 cursor-pointer"
              onClick={() => setOpen(false)}
            />
          ) : (
            <IoIosMenu
              size={36}
              className="text-gray-800 cursor-pointer"
              onClick={() => setOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`lg:hidden bg-white/95 backdrop-blur-lg shadow-inner transition-all duration-500 overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-start gap-4 px-6 py-4">
          {menuItems.map((menu, index) =>
            menu.link.includes("#") ? (
              <a
                key={index}
                href={menu.link}
                onClick={() => setOpen(false)}
                className="w-full text-gray-800 hover:text-customYellow font-medium border-b border-gray-200 pb-2 transition"
              >
                {menu.name}
              </a>
            ) : (
              <Link
                key={index}
                to={menu.link}
                onClick={() => setOpen(false)}
                className="w-full text-gray-800 hover:text-customYellow font-medium border-b border-gray-200 pb-2 transition"
              >
                {menu.name}
              </Link>
            )
          )}

          {/* Mobile Phone Number */}
          <a
            href="tel:+2348079325361"
            className="flex items-center gap-2 text-customYellow font-semibold pt-2"
          >
            <FaPhoneAlt className="text-lg" />
            +234 807 932 5361
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
