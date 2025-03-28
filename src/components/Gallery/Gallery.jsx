import React, { useState } from 'react';

// Importing images
import Image1 from '../../assets/Digitizing/3_Birds.png';
import Image2 from '../../assets/Digitizing/5_TH_5_LOGO.png';
import Image3 from '../../assets/Digitizing/BEAR.png';
import Image4 from '../../assets/Digitizing/Car.png';
import Image5 from '../../assets/Digitizing/FROG_LOGO.png';
import Image6 from '../../assets/Digitizing/PANDA.png';
import Image7 from '../../assets/Digitizing/PISSVIPEP.png';
import Image8 from '../../assets/Digitizing/POLICE.png';
import Image9 from '../../assets/Digitizing/SKEGEE_JB_LOGO.png';
import Image10 from '../../assets/Digitizing/THE-CHEMICAL_ROMANCE.png';
import Image11 from '../../assets/Digitizing/Hero_8.jpg';
import Image12 from '../../assets/Digitizing/Hero_9.jpg';
import Image13 from '../../assets/Digitizing/Hero_10.jpg';
import Image14 from '../../assets/Digitizing/Hero_11.jpg';
import Image15 from '../../assets/Digitizing/Hero_12.jpg';
import Image16 from '../../assets/Digitizing/Hero_13.jpg';
import Image17 from '../../assets/Digitizing/Hero_14.jpg';
import Image18 from '../../assets/Digitizing/Hero_15.jpg';
import Image19 from '../../assets/Digitizing/Hero_16.jpg';
import Image20 from '../../assets/Digitizing/Hero_17.jpg';
import Image21 from '../../assets/Digitizing/Hero_18.jpg';
import Image22 from '../../assets/Digitizing/Hero_1.png';
import Image23 from '../../assets/Digitizing/Hero_2.png';
import Image24 from '../../assets/Digitizing/Hero_3.png';
import Image25 from '../../assets/Digitizing/Hero_4.png';
import Image26 from '../../assets/Digitizing/Hero_5.png';
import Image27 from '../../assets/Digitizing/Hero_6.png';
import Image28 from '../../assets/Digitizing/Hero_7.png';
import Image29 from '../../assets/Vector/Vector_1.jpg';
import Image30 from '../../assets/Vector/Vector_2.jpg';
import Image31 from '../../assets/Vector/Vector_3.png';
import Image32 from '../../assets/Vector/Vector_4.png';
import Image33 from '../../assets/Vector/Vector_5.jpg';
import Image34 from '../../assets/Vector/Vector_6.png';
import Image35 from '../../assets/Vector/Vector_7.jpg';
import Image36 from '../../assets/Vector/Vector_8.jpg';
import Image37 from '../../assets/Vector/Vector_9.jpg';
import Image38 from '../../assets/Vector/Vector_10.png';
import Image39 from '../../assets/Vector/Vector_11.jpg';
import Image40 from '../../assets/Vector/Vector_12.jpg';
import Image41 from '../../assets/Vector/Vector_13.jpg';
import Image42 from '../../assets/Patches/Patches_1.jpg';
import Image43 from '../../assets/Patches/Patches_2.jpg';
import Image44 from '../../assets/Patches/Patches_3.jpg';
import Image45 from '../../assets/Patches/Patches_4.jpg';
import Image46 from '../../assets/Patches/Patches_5.jpg';
import Image47 from '../../assets/Patches/Patches_7.png';
import Image48 from '../../assets/Patches/Patches_8.png';

// Sample Data for the Gallery
const galleryData = [
  { id: 1, imgSrc: Image1, category: 'Digitizing' },
  { id: 2, imgSrc: Image2, category: 'Digitizing' },
  { id: 3, imgSrc: Image3, category: 'Digitizing' },
  { id: 4, imgSrc: Image4, category: 'Digitizing' },
  { id: 5, imgSrc: Image5, category: 'Digitizing' },
  { id: 6, imgSrc: Image6, category: 'Digitizing' },
  { id: 7, imgSrc: Image7, category: 'Digitizing' },
  { id: 8, imgSrc: Image8, category: 'Digitizing' },
  { id: 9, imgSrc: Image9, category: 'Digitizing' },
  { id: 10, imgSrc: Image10, category: 'Digitizing' },
  { id: 11, imgSrc: Image11, category: 'Digitizing' },
  { id: 12, imgSrc: Image12, category: 'Digitizing' },
  { id: 13, imgSrc: Image13, category: 'Digitizing' },
  { id: 14, imgSrc: Image14, category: 'Digitizing' },
  { id: 15, imgSrc: Image15, category: 'Digitizing' },
  { id: 16, imgSrc: Image16, category: 'Digitizing' },
  { id: 17, imgSrc: Image17, category: 'Digitizing' },
  { id: 18, imgSrc: Image18, category: 'Digitizing' },
  { id: 19, imgSrc: Image19, category: 'Digitizing' },
  { id: 20, imgSrc: Image20, category: 'Digitizing' },
  { id: 21, imgSrc: Image21, category: 'Digitizing' },
  { id: 22, imgSrc: Image22, category: 'Digitizing' },
  { id: 23, imgSrc: Image23, category: 'Digitizing' },
  { id: 24, imgSrc: Image24, category: 'Digitizing' },
  { id: 25, imgSrc: Image25, category: 'Digitizing' },
  { id: 26, imgSrc: Image26, category: 'Digitizing' },
  { id: 27, imgSrc: Image27, category: 'Digitizing' },
  { id: 28, imgSrc: Image28, category: 'Digitizing' },
  { id: 29, imgSrc: Image29, category: 'Vector' },
  { id: 30, imgSrc: Image30, category: 'Vector' },
  { id: 31, imgSrc: Image31, category: 'Vector' },
  { id: 32, imgSrc: Image32, category: 'Vector' },
  { id: 33, imgSrc: Image33, category: 'Vector' },
  { id: 34, imgSrc: Image34, category: 'Vector' },
  { id: 35, imgSrc: Image35, category: 'Vector' },
  { id: 36, imgSrc: Image36, category: 'Vector' },
  { id: 37, imgSrc: Image37, category: 'Vector' },
  { id: 38, imgSrc: Image38, category: 'Vector' },
  { id: 39, imgSrc: Image39, category: 'Vector' },
  { id: 40, imgSrc: Image40, category: 'Vector' },
  { id: 41, imgSrc: Image41, category: 'Vector' },
  { id: 42, imgSrc: Image42, category: 'Patches' },
  { id: 43, imgSrc: Image43, category: 'Patches' },
  { id: 44, imgSrc: Image44, category: 'Patches' },
  { id: 45, imgSrc: Image45, category: 'Patches' },
  { id: 46, imgSrc: Image46, category: 'Patches' },
  { id: 47, imgSrc: Image47, category: 'Patches' },
  { id: 48, imgSrc: Image48, category: 'Patches' },
];

const ITEMS_PER_PAGE = 8;

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('Digitizing');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = galleryData.filter((item) => item.category === activeCategory);

  // Calculate paginated data
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedData = filteredData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Calculate total pages
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  return (
    <div className="gallery-section mt-6 pb-0" id="Services">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-2xl font-bold text-blue-700">GALLERY</h1>
        <div className="flex justify-center space-x-4 mt-4">
          <button
            className={`${
              activeCategory === 'Digitizing' ? 'text-blue-700 font-bold' : 'text-blue-600'
            } hover:underline`}
            onClick={() => {
              setActiveCategory('Digitizing');
              setCurrentPage(1);
            }}
          >
            Digitizing
          </button>
          <button
            className={`${
              activeCategory === 'Vector' ? 'text-blue-700 font-bold' : 'text-blue-600'
            } hover:underline`}
            onClick={() => {
              setActiveCategory('Vector');
              setCurrentPage(1);
            }}
          >
            Vector
          </button>
          <button
            className={`${
              activeCategory === 'Patches' ? 'text-blue-700 font-bold' : 'text-blue-600'
            } hover:underline`}
            onClick={() => {
              setActiveCategory('Patches');
              setCurrentPage(1);
            }}
          >
            Patches
          </button>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="flex justify-center mt-8">
        <div className="gallery-grid grid grid-cols-2 md:grid-cols-4 gap-14">
          {paginatedData.map((item) => (
            <div
              key={item.id}
              className="gallery-item border border-gray-300 shadow-lg rounded-md overflow-hidden"
              style={{ width: '150px', height: '200px' }}
            >
              <img
                src={item.imgSrc}
                alt={item.category}
                className="w-full h-full object-contain"
                style={{ display: 'block' }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center space-x-2 mt-6">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-3 py-1 rounded-md ${
              currentPage === index + 1
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
