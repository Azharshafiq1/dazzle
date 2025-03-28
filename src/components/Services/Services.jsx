import React from "react";
import DigitizingIcon from "../../assets/icons/Digitizing.png";
import EmbroideryIcon from "../../assets/icons/Embroidery.png";
import CustomDesignIcon from "../../assets/icons/customdesign.png";
import FileConversionIcon from "../../assets/icons/fileconversion.png";
import VectorArtIcon from "../../assets/icons/vectorart.png";
import PatchesIcon from "../../assets/icons/patches.png";
import "aos/dist/aos.css";

const ServicesData = [
  {
    id: 1,
    img: DigitizingIcon,
    title: "Digitizing",
    description:
      "\"Dazzle Punch\" offers high-quality Digitizing for embroidery, appliqué, and other decorative techniques.",
    aosDelay: "0",
  },
  {
    id: 2,
    img: EmbroideryIcon,
    title: "Embroidery",
    description:
      "In order to make your clothing truly stand out, \"Dazzle Punch\" offers premium embroidery services designed to elevate your brand with precision and quality.",
    aosDelay: "200",
  },
  {
    id: 3,
    img: CustomDesignIcon,
    title: "Custom Design",
    description:
      "\"Dazzle Punch\" provides expert custom illustration and design services, creating unique, high-quality visuals tailored to your needs.",
    aosDelay: "400",
  },
  {
    id: 4,
    img: FileConversionIcon,
    title: "File Conversion",
    description:
      "\"Dazzle Punch\" offers professional file conversion and optimization services for seamless use across various formats.",
    aosDelay: "600",
  },
  {
    id: 5,
    img: VectorArtIcon,
    title: "Vector Art",
    description:
      "\"Dazzle Punch\" specializes in vector art creation for logos, graphics and illustrations",
    aosDelay: "800",
  },
  {
    id: 6,
    img: PatchesIcon,
    title: "Patches",
    description:
      "\"Dazzle Punch\" offers custom embroidery patch designs, delivering high-quality, detailed, and stitched artwork.",
    aosDelay: "1000",
  },
];

const Services = () => {
  return (
    <div
      id="services"
      className="mt-6 mb-0"
      style={{
        backgroundColor: "rgba(37, 99, 235, 0.1)", // Light background color
        paddingBottom: "0.2in", // Extra space at the bottom
        paddingTop: "0.2in",
      }}
    >
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h1
            data-aos="fade-up"
            className="text-3xl font-bold text-blue-700"
          >
            OUR PROFESSIONAL SERVICES
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-4 text-gray-600"
          >
            "Dazzle Punch" is a leading professional embroidery digitizing service, offering high-quality digitizing solutions for logos, designs, and custom artwork for over a decade.
          </p>
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ServicesData.map((service) => (
            <div
              key={service.id}
              data-aos="fade-up"
              data-aos-delay={service.aosDelay}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 hover:border-[rgb(30,64,175)]" // Added hover effect here
              style={{
                boxShadow: "-10px 10px 12px rgba(37, 99, 235, 0.5)", // Subtle drop-shadow
              }}
            >
              <img
                src={service.img}
                alt={service.title}
                className="h-16 w-16 object-contain mx-auto mb-4"
              />
              <h3 className="font-semibold text-blue-800 text-center">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 text-center mt-2">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
