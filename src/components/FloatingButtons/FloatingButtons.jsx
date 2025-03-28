import React, { useState, useEffect } from 'react';
import whatsappIcon from '../../assets/icons/whatsapp.png';  // Replace with your WhatsApp icon
import phoneIcon from '../../assets/icons/phone-call.png';   // Replace with your phone icon
import upArrowIcon from '../../assets/icons/scroll-up.png';   // Replace with your up arrow icon

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll up
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Handle scroll visibility
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      {/* WhatsApp Floating Button */}
      {isVisible && (
        <a
          href="https://wa.me/+923102179329" // Replace with your WhatsApp number link
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-36 right-4 transition duration-300"
        >
          <img src={whatsappIcon} alt="WhatsApp" className="w-8 h-8" /> {/* Smaller WhatsApp icon */}
        </a>
      )}

      {/* Phone Floating Button */}
      {isVisible && (
        <a
          href="tel:+923102179329" // Replace with your phone number
          className="fixed bottom-24 right-4 transition duration-300"
        >
          <img src={phoneIcon} alt="Phone" className="w-8 h-8" /> {/* Smaller Phone icon */}
        </a>
      )}

      {/* Scroll Up Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-2  rounded-full p-2   hover:bg-sky-200 transition duration-300"
        >
          <img src={upArrowIcon} alt="Scroll Up" className="w-8 h-8" /> {/* Smaller Up Arrow icon */}
        </button>
      )}
    </div>
  );
};

export default FloatingButtons;
