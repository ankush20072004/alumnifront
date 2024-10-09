
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules'; // Import Navigation module
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation'; // Import Navigation styles

const ProfileCard = ({ image, fullName, title, tagline, isActive }) => {
  return (
    <div
      className={`relative flex flex-col items-center justify-center w-[25vw] h-[30vw] bg-white m-6 rounded-lg shadow-lg shadow-gray-400 transition-transform duration-300 transform ${
        isActive ? 'scale-110 z-10' : 'scale-90'
      }`}
    >
      <img 
        src={image} 
        alt={fullName} 
        className="w-24 h-24 rounded-full object-cover"
      />
      <h2 className="text-xl font-bold mb-2">{fullName}</h2>
      <h4 className="text-gray-600 text-lg mb-2">{title}</h4>
      <p className="text-gray-500 text-center">{tagline}</p>
    </div>
  );
};

const profiles = [
  {
    image: "/AlumImage.png",
    fullName: "John Doe",
    title: "Software Engineer",
    tagline: "Building scalable web applications",
  },
  {
    image: "/AlumImage.png",
    fullName: "Jane Smith",
    title: "Product Manager",
    tagline: "Leading product teams to success",
  },
  {
    image: "/AlumImage.png",
    fullName: "Alice Johnson",
    title: "UX Designer",
    tagline: "Crafting intuitive user experiences",
  },
  {
    image: "/AlumImage.png",
    fullName: "Bob Brown",
    title: "Data Scientist",
    tagline: "Turning data into insights",
  },
];

const ProfileGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full h-[30vw] mt-6 pl-6 relative">
      <Swiper
        modules={[Autoplay, Navigation]} // Attach modules to Swiper
        slidesPerView={3}
        spaceBetween={20}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        centeredSlides={true} // Center slides to enhance the focus on the center slide
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
      >
        {profiles.map((profile, index) => (
          <SwiperSlide key={index}>
            <ProfileCard
              image={profile.image}
              fullName={profile.fullName}
              title={profile.title}
              tagline={profile.tagline}
              isActive={index === activeIndex}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Navigation Arrows */}
      <div className="swiper-button-prev text-gray-500 absolute top-1/2 left-0 transform -translate-y-1/2 z-20 cursor-pointer">
        &#8249;
      </div>
      <div className="swiper-button-next text-gray-500 absolute top-1/2 right-0 transform -translate-y-1/2 z-20 cursor-pointer">
        &#8250;
      </div>
    </div>
  );
};

export default ProfileGallery;