import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

import digitizingImage1 from "../../assets/Twenty/Digitize_2.png"; 
import digitizingImage2 from "../../assets/Twenty/Digitize_1.png";
import digitizingImage3 from "../../assets/Twenty/Digitize_3.png";  
import vectorArtImage1 from "../../assets/Twenty/Vector_1.png"; 
import vectorArtImage2 from "../../assets/Twenty/Vector_2.png";
import vectorArtImage3 from "../../assets/Twenty/Vector_3.jpg";  
import patchesImage1 from "../../assets/Twenty/Patches_1.jpg"; 
import patchesImage2 from "../../assets/Twenty/Patches_2.jpg";
import patchesImage3 from "../../assets/Twenty/Patches_3.png";  

const Twenty = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      easing: 'ease-in-out', // Easing function
    });
  }, []);

  // Slider logic for each card
  const [activeSlideDigitizing, setActiveSlideDigitizing] = useState(0);
  const [activeSlideVector, setActiveSlideVector] = useState(0);
  const [activeSlidePatches, setActiveSlidePatches] = useState(0);

  const slidesDigitizing = [digitizingImage1, digitizingImage2, digitizingImage3];
  const slidesVector = [vectorArtImage1, vectorArtImage2, vectorArtImage3];
  const slidesPatches = [patchesImage1, patchesImage2, patchesImage3];

  useEffect(() => {
    const intervalDigitizing = setInterval(() => {
      setActiveSlideDigitizing((prev) => (prev + 1) % slidesDigitizing.length);
    }, 5000);

    const intervalVector = setInterval(() => {
      setActiveSlideVector((prev) => (prev + 1) % slidesVector.length);
    }, 5000);

    const intervalPatches = setInterval(() => {
      setActiveSlidePatches((prev) => (prev + 1) % slidesPatches.length);
    }, 5000);

    return () => {
      clearInterval(intervalDigitizing);
      clearInterval(intervalVector);
      clearInterval(intervalPatches);
    };
  }, []);

  return (
    <div
      className="container mx-auto px-4 py-0 mt-0"
      style={{
        backgroundColor: "rgba(37, 99, 235, 0.1)", // Lighter version color
        paddingBottom: '20px', // Increased padding from below
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"> {/* Reduced gap between cards */}
        
        {/* Digitizing Card */}
        <div className="text-center sm:mt-5 sm:mb-4 flex flex-col" data-aos="fade-up">
          <h2 className="text-xl font-bold mb-4 sm:mb-2 mt-1 text-blue-700">DIGITIZING</h2>
          <div
            className="bg-white rounded-lg shadow-md h-[350px] w-[300px] mx-auto overflow-hidden border border-[#2563eb33] hover:border-[rgb(30,64,175)]"
            style={{
              boxShadow: "-10px 10px 12px rgba(37, 99, 235, 0.6)",
            }}
          >
            <div className="relative w-full h-full">
              {slidesDigitizing.map((slide, index) => (
                <img
                  key={index}
                  src={slide}
                  alt={`Digitizing Slide ${index + 1}`}
                  className={`absolute w-full h-full object-contain transition-all duration-700 ease-in-out ${
                    activeSlideDigitizing === index
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-90"
                  }`}
                />
              ))}
            </div>
          </div>
          <p className="text-sm text-blue-600 mt-4 sm:mt-6">High-quality digitizing services for embroidery and more.</p>
        </div>

        {/* Vector Art Card */}
        <div className="text-center sm:mt-5 sm:mb-4 flex flex-col" data-aos="fade-up">
          <h2 className="text-xl font-bold mb-4 sm:mb-2 text-blue-700">VECTOR</h2>
          <div
            className="bg-white rounded-lg shadow-md h-[350px] w-[300px] mx-auto overflow-hidden border border-[#2563eb33] hover:border-[rgb(30,64,175)]"
            style={{
              boxShadow: "-10px 10px 12px rgba(37, 99, 235, 0.6)",
            }}
          >
            <div className="relative w-full h-full">
              {slidesVector.map((slide, index) => (
                <img
                  key={index}
                  src={slide}
                  alt={`Vector Art Slide ${index + 1}`}
                  className={`absolute w-full h-full object-contain transition-all duration-700 ease-in-out ${
                    activeSlideVector === index
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-90"
                  }`}
                />
              ))}
            </div>
          </div>
          <p className="text-sm text-blue-600 mt-4 sm:mt-6">Custom vector art creation for logos, illustrations, and more.</p>
        </div>

        {/* Patches Card */}
        <div className="text-center sm:mt-5 sm:mb-4 flex flex-col" data-aos="fade-up">
          <h2 className="text-xl font-bold mb-4 sm:mb-2 text-blue-700">PATCHES</h2>
          <div
           className="bg-white rounded-lg shadow-md h-[350px] w-[300px] mx-auto overflow-hidden border border-[#2563eb33] hover:border-[rgb(30,64,175)]"
           style={{
             boxShadow: "-10px 10px 12px rgba(37, 99, 235, 0.6)",
           }}
          >
            <div className="relative w-full h-full">
              {slidesPatches.map((slide, index) => (
                <img
                  key={index}
                  src={slide}
                  alt={`Patches Slide ${index + 1}`}
                  className={`absolute w-full h-full object--contain transition-all duration-700 ease-in-out ${
                    activeSlidePatches === index
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-90"
                  }`}
                />
              ))}
            </div>
          </div>
          <p className="text-sm text-blue-600 mt-4 sm:mt-6">Durable, custom patches for clothing and accessories.</p>
        </div>

      </div>
    </div>
  );
};

export default Twenty;
