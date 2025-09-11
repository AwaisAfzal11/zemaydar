import React from 'react';
// import hero from '../../Assets/hero.png'; // Assuming you have a hero image here

const Hero = () => {
  const heroImage = `${process.env.REACT_APP_BASE_URL}/Assets/Home/hero.png`
  return (
    <div
      // Changed h-screen to h-[70vh] here
      className="relative h-[70vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down">
          Goldmark Land Ventures
        </h1>
        <p className="text-lg md:text-2xl font-light animate-fade-in-up">
          Transform Your Property Buying Game Plan
        </p>
      </div>
    </div>
  );
}

export default Hero;