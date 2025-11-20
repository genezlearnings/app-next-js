import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const banners = [
  {
    id: 1,
    type: 'image',
    src: "/images/courses-banner.jpg",
    alt: "Unlock Your Potential with Our Courses",
    title: "Transform Your Career with Our Expert-Led Courses",
    description: "Gain industry-relevant skills and certifications to advance in the life sciences field",
    link: "/courses"
  }
];

const CourseBanner = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setCurrentBanner((prev) => (prev + 1) % banners.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isHovered]);

  const banner = banners[currentBanner];

  return (
    <div 
      className="relative w-full h-auto aspect-[16/6] min-h-[300px] max-h-[600px] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={banner.link} className="block w-full h-full">
        {banner.type === 'svg' ? (
          <img
            src={banner.src}
            alt={banner.alt}
            className="w-full h-full object-cover object-center"
          />
        ) : (
          <Image
            src={banner.src}
            alt={banner.alt}
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              width: '100%',
              height: '100%',
            }}
            quality={100}
            priority
          />
        )}
        {banner.title && (
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="text-center text-white px-4 max-w-6xl mx-auto">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                {banner.title}
              </h1>
              <p className="text-lg md:text-xl max-w-3xl mx-auto">
                {banner.description}
              </p>
            </div>
          </div>
        )}
      </Link>
      
      {/* Navigation Dots */}
      {banners.length > 1 && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setCurrentBanner(index);
              }}
              className={`w-3 h-3 rounded-full transition-all ${currentBanner === index ? 'bg-white w-6' : 'bg-white/50'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseBanner;
