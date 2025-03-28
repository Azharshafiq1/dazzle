import React from 'react';
import { FiChevronsRight } from "react-icons/fi"; // Double arrow icon
import '../../index.css'; // Import global styles

const AboutUs = () => {
  return (
    <div 
      id="about-us" 
      className="py-3 pb-16 relative bg-blue-300" // Add 'relative' for positioning the button inside this container
      style={{ backgroundColor: '#2563eb33' }}
    >
      <div className="container mx-auto px-6 lg:px-12">

        {/* Centered Header Section */}
        <div
          className="text-center mb-14"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1 className="text-4xl font-extrabold text-blue-700">
            About Us
          </h1>
          <p className="mt-2 text-lg text-blue-700">
            Our story, mission, values, and expertise
          </p>
        </div>

        {/* Flex Container for Left and Right Content */}
        <div>
          {/* Left Content Section */}
          <div>
            <div className="gap-2 items-center mb-6">
              <div
                className="text-blue-700"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <h2 className="text-2xl font-semibold mt-2">
                  Who We Are
                </h2>
                <p className="mt-2 text-base leading-6">
                  At Dazzles Punch, we're passionate about transforming your ideas into stunning digital realities. As a leading provider of digitizing and vector art services, we specialize in converting your designs into precision-crafted digital files that shine.
                </p>
                <p className="mt-2 text-base leading-6">
                  Our company was built on a simple yet powerful vision: to deliver exceptional quality, timely solutions, and unparalleled customer service. With years of experience in the industry, our team of skilled digitizers and vector artists has honed their expertise to cater to diverse clients worldwide.
                </p>
              </div>
            </div>

            {/* Our Mission & Values Section */}
            <div
              className="text-blue-700"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h2 className="text-2xl font-semibold mb-2 mt-6">
                Our Mission
              </h2>
              <p className="text-base leading-6 mb-2">
                Our mission is to empower businesses, entrepreneurs, and artists to unlock the full potential of their creative visions. We strive to:
              </p>
              <ul className="list-disc list-inside text-base leading-6">
                <li>Deliver top-notch digitizing and vector art solutions that exceed client expectations.</li>
                <li>Foster long-term relationships built on trust, reliability, and open communication.</li>
                <li>Stay at the forefront of industry trends and technological advancements.</li>
                <li>Inclusivity and Diversity.</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-6 mb-2">
                Our Values
              </h2>
              <ul className="list-disc list-inside text-base leading-6">
                <li>Customer-Centric Approach</li>
                <li>Quality and Integrity</li>
                <li>Innovation and Creativity</li>
                <li>Inclusivity and Diversity</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Left Button Section */}
        <div className="absolute bottom-3 left-0 ml-12">
          <a 
            href="#more-info" 
            className="inline-block py-1 px-3 bg-[#1e40af] text-white text-base font-semibold hover:bg-[#2563eb66] transition"
          >
            Read More <FiChevronsRight className="inline-block ml-1" />
          </a>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
