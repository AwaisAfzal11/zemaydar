import React from 'react';
import hero from '../../Assets/hero.webp';

const Home = () => {
  return (
    // The hero image is added as a background using an inline style
    <div 
      className="relative h-screen bg-cover bg-center" 
      style={{ backgroundImage: `url(${hero})` }}
    >
      
      {/* This overlay darkens the background image to make the text more readable */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          Goldmark Land Ventures
        </h1>
        <p className="text-lg md:text-2xl font-light">
          Transform Your Property Buying Game Plan
        </p>
      </div>
    </div>
  );
}

export default Home;