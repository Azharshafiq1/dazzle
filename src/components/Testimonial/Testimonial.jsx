import React from 'react'
import Slider from 'react-slick'

const testimonialData = [
  {
    id: 1,
    name: 'Ali',
    text: "I couldn't be happier with the digitizing service for my badges! The quality is exceptional, and the attention to detail is remarkable. The raster-to-vector conversion was flawless, preserving every intricate detail perfectly. I received my completed design.",
    img: 'https://picsum.photos/101/101',
  },
  {
    id: 2,
    name: 'Usman',
    text: 'I was skeptical at first, but the digitizing service for my badges blew me away. The design is sleek, the precision is top-notch, and it feels like it was made just for me. The attention to detail in the raster-to-vector conversion was impressive.',
    img: 'https://picsum.photos/102/102',
  },
  {
    id: 3,
    name: 'Shazaib',
    text: 'This digitizing service has completely transformed my workflow. The quality of the raster-to-vector conversion is outstanding, and the process is so seamless. I’ve noticed a huge difference in the clarity and precision of my badges since I started using it.',
    img: 'https://picsum.photos/103/103',
  },
  {
    id: 4,
    name: 'Ahmer',
    text: 'I’m so impressed with the value this digitizing service offers. The quality of the raster-to-vector conversion is exceptional, and it works exactly as promised. It’s rare to find a service that providing precise and detailed badges that meet all my expectations perfectly.',
    img: 'https://picsum.photos/104/104',
  },
  {
    id: 5,
    name: 'Umer',
    text: 'I’ve tried many digitizing services before, but this one truly stands out. The craftsmanship of the badges and raster-to-vector conversions is impeccable, and the final results feel professional and high-end every time I see them. It’s clear that quality is a top priority.',
    img: 'https://picsum.photos/105/105',
  },
  {
    id: 6,
    name: 'Basit',
    text: 'I wasn’t sure what to expect, but this digitizing service blew me away. It’s rare to find a solution that not only meets but surpasses expectations. The precision in converting raster images to vectors and the attention to detail in creating badges. ',
    img: 'https://picsum.photos/106/106',
  },
]

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className='py-10 '>
      <div className='container mx-auto'>
        {/* Header Section */}
        <div className='text-center mb-10'>
          <p
            data-aos='fade-up'
            className='text-sm uppercase tracking-wider text-blue-600'
          >
            What Our Customers Are Saying
          </p>
          <h1
            data-aos='fade-up'
            className='text-4xl font-bold text-blue-800'
          >
            Testimonials
          </h1>
        </div>
        {/* Testimonial Slider */}
        <div data-aos='zoom-in'>
          <Slider {...settings}>
            {testimonialData.map((data) => (
              <div key={data.id} className='px-4'>
                <div className='flex flex-col items-center mb-2 gap-4 p-6 border-2 border-blue-100 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative'
                style={{
                  boxShadow: "-10px 10px 12px rgba(37, 99, 235, 0.2)", // Subtle drop-shadow
                }}
                >
                  <div className='relative w-24 h-24'>
                    <img
                      src={data.img}
                      alt={data.name}
                      className='w-full h-full rounded-full object-cover border-4 border-blue-700 shadow-xl'
                    />
                  </div>
                  <div className='flex flex-col items-center text-center space-y-4'>
                    <p className='text-base text-gray-600 leading-relaxed'>
                      "{data.text}"
                    </p>
                    <h2 className='text-lg font-semibold text-blue-800'>
                      {data.name}
                    </h2>
                  </div>
                  <div className='absolute text-blue-200 text-9xl font-serif top-0 left-4'>
                    “
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Testimonial