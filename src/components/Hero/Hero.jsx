import React, { useState } from "react";
import Image1 from "../../assets/Hero/Banner_1.jpg";
import Image2 from "../../assets/Hero/Banner_2.jpg";
import Image3 from "../../assets/Hero/Banner_3.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ImageList = [
  { id: 1, img: Image1 },
  { id: 2, img: Image2 },
  { id: 3, img: Image3 },
];

// Custom Arrow Components
const CustomPrevArrow = ({ onClick }) => (
  <div
    className="absolute left-4 sm:left-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-white bg-transparent p-2 rounded-full shadow-md hover:bg-blue-500 transition-all"
    onClick={onClick}
  >
    <FaArrowLeft size={16} />
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div
    className="absolute right-4 sm:right-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-white bg-transparent p-2 rounded-full shadow-md hover:bg-blue-500 transition-all"
    onClick={onClick}
  >
    <FaArrowRight size={16} />
  </div>
);

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0); // Track active slide index

  const settings = {
    arrows: true,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    beforeChange: (current, next) => {
      setActiveSlide(next); // Update active slide on change
    },
  };

  return (
    <div
      className="relative"
      style={{ backgroundColor: "#2563eb33" }} // Set the background color here
    >
      <Slider {...settings}>
        {ImageList.map((data) => (
          <div key={data.id} className="relative w-full h-full">
            <img
              src={data.img}
              alt={`Slide ${data.id}`}
              className="w-full h-full object-cover"
            />

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-1">
              {ImageList.map((_, index) => (
                <span
                  key={index}
                  className={`h-2 w-2 rounded-full ${
                    activeSlide === index
                      ? "bg-blue-500"
                      : "bg-gray-300"
                  }`}
                ></span>
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
