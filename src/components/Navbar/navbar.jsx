import React, { useState, useEffect, useRef } from "react";
import { FaCaretDown } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/Logo.png";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "#",  // Scroll to the Home section
  },
  {
    id: 2,
    name: "About Us",
    link: "#about-us",  // Scroll to the About Us section
  },
];

const DropDownLinks = [
  {
    id: 1,
    name: "Digitizing",
    link: "#Services",  // Scroll to the Raster section
  },
  {
    id: 2,
    name: "Vector",
    link: "#Services",  // Scroll to the Vector section
  },
  {
    id: 3,
    name: "Patches",
    link: "#Services",  // Scroll to the Badges section
  },
];

function Navbar({ setActiveCategory }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownHovered, setIsDropdownHovered] = useState(false); // For mobile hover effect
  const [scrolling, setScrolling] = useState(false);
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);

  // Track scroll position for jelly effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && menuRef.current && !menuRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`sticky-navbar shadow-md bg-blue-500 text-white relative z-40 transition-all duration-500 ease-in-out ${scrolling ? "transform scale-y-100 translate-y-[-20px]" : "transform scale-y-100"}`}
    >
      {/* Main navigation container */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <img src={Logo} alt="Logo" className="w-20 sm:w-24" />
          <a href="" className="font-bold text-2xl sm:text-3xl">Dazzles Punch</a>
        </div>

        {/* Hamburger icon for mobile */}
        <div className="sm:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white text-2xl">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden sm:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {Menu.map((data) => (
              <li key={data.id}>
                <a href={data.link} className="text-white hover:text-blue-600 font-medium duration-200 text-xl">
                  {data.name}
                </a>
              </li>
            ))}
            {/* Dropdown Menu */}
            <li className="group relative cursor-pointer">
              <a href="#" className="flex items-center gap-1 text-white hover:text-blue-600 font-medium duration-200 text-xl">
                Services
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </a>
              <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-blue-500 p-2 text-white shadow-md">
                <ul>
                  {DropDownLinks.map((data) => (
                    <li key={data.id}>
                      <a
                        href={data.link}
                        className="block rounded-md p-2 hover:bg-blue-600 hover:text-white"
                        onClick={() => {
                          setActiveCategory(data.name); // Set the active category when clicked
                          if (data.name === "Digitizing") {
                            document.getElementById("embroidery-section").scrollIntoView({ behavior: "smooth" });
                          } else if (data.name === "Vector") {
                            document.getElementById("vector-section").scrollIntoView({ behavior: "smooth" });
                          } else if (data.name === "Patches") {
                            document.getElementById("patches-section").scrollIntoView({ behavior: "smooth" });
                          }
                        }}
                      >
                        {data.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      <div className={`sm:hidden ${isMenuOpen ? "block" : "hidden"} absolute top-16 left-0 w-full bg-blue-600 p-4`} ref={menuRef}>
        <ul className="space-y-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a href={data.link} className="text-white hover:text-blue-300 font-medium text-xl" onClick={() => setIsMenuOpen(false)}>
                {data.name}
              </a>
            </li>
          ))}
          {/* Mobile Dropdown Menu */}
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => {
                setIsDropdownOpen(!isDropdownOpen);
                setIsDropdownHovered(!isDropdownHovered);
              }}
              className={`flex items-center gap-1 text-white font-medium w-full text-left ${isDropdownHovered ? 'bg-blue-700' : ''}`}
            >
              Services
              <FaCaretDown className={`transition-all duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 w-full bg-blue-600 p-2 text-white rounded-md shadow-md">
                <ul>
                  {DropDownLinks.map((data) => (
                    <li key={data.id}>
                      <a
                        href={data.link}
                        className="block rounded-md p-2 hover:bg-blue-700"
                        onClick={() => {
                          setActiveCategory(data.name);
                          setIsMenuOpen(false); // Close menu after clicking
                          if (data.name === "Digitizing") {
                            document.getElementById("embroidery-section").scrollIntoView({ behavior: "smooth" });
                          } else if (data.name === "Vector") {
                            document.getElementById("vector-section").scrollIntoView({ behavior: "smooth" });
                          } else if (data.name === "Patches") {
                            document.getElementById("patches-section").scrollIntoView({ behavior: "smooth" });
                          }
                        }}
                      >
                        {data.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
