import React, { useState, useEffect } from "react";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import BannerImage1 from "../../assets/Banner/Banner_1.png";
import BannerImage2 from "../../assets/Banner/Banner_2.jpg";

const Banner = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [BannerImage1, BannerImage2];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="min-h-[550px] flex justify-center items-center py-6 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* Image Section */}
          <div
            className="relative overflow-hidden max-w-[400px] h-[420px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]"
            data-aos="zoom-in"
          >
            <div className="relative w-full h-full">
              {slides.map((slide, index) => (
                <img
                  key={index}
                  src={slide}
                  alt={`Slide ${index + 1}`}
                  className={`absolute w-full h-full object-contain transition-all duration-700 ease-in-out ${
                    activeSlide === index
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-90"
                  }`}
                />
              ))}
            </div>
            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {slides.map((_, index) => (
                <span
                  key={index}
                  className={`h-2 w-2 rounded-full cursor-pointer ${
                    activeSlide === index
                      ? "bg-blue-500"
                      : "bg-gray-300"
                  }`}
                  onClick={() => setActiveSlide(index)} // Change slide on dot click
                ></span>
              ))}
            </div>
          </div>

          {/* Text Detail Section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1
              data-aos="fade-up"
              className="text-3xl sm:text-4xl font-bold text-blue-700"
            >
              Why Choose Us?
            </h1>
            <p
              data-aos="fade-up"
              className="text-sm text-blue-600 tracking-wide leading-5"
            >
              We offer unmatched quality and meticulous attention to detail,
              ensuring excellence in every project. With fast turnaround times,
              we maintain high standards without compromise. Our competitive
              pricing is transparent, with no hidden fees. Benefit from
              personalized support provided by our dedicated team, committed to
              delivering a seamless and satisfying experience.
            </p>
            <div className="flex flex-col gap-4">
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-blue-100 dark:bg-blue-400" />
                <p className="text-blue-800">Quality Products</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-blue-200 dark:bg-blue-500" />
                <p className="text-blue-800">Fast Delivery</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-blue-300 dark:bg-blue-600" />
                <p className="text-blue-800">Easy Payment Method</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-blue-400 dark:bg-blue-700" />
                <p className="text-blue-800">Get Offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
