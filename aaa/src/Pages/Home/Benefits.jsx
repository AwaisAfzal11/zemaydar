import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import img2 from '../../Assets/Home/img2.jpg'; // Correctly import the image

const benefits = [
  "Strategic Location",
  "Verified Ownership",
  "Guaranteed Buy-Back Option",
  "Zero Service Fees",
  "Minimum Investment",
  "Easy Entry - Just 1 Kanal",
  "Perfect for Everyone"
];

const Benefits = () => {
  // const img2 = `${process.env.REACT_APP_BASE_URL}/Assets/Home/img2.jpg` // This line is removed
  return (
    // 1. Container with background image
    <div 
      className="relative py-24 bg-cover bg-center bg-fixed" // Added bg-fixed for a parallax effect
      style={{ backgroundImage: `url(${img2})` }} // Use the imported variable
    >
      {/* 2. A more dynamic gradient overlay for better contrast and visual appeal */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-[#BD872E]/80 to-black/50"></div>

      {/* 3. Content container is relative to sit on top */}
      <div className="relative container mx-auto px-6 z-10">
        <div className="text-center mb-16">
          {/* 4. Enhanced typography for the main heading and subheading */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            Member Benefits
          </h2>
          <p className="text-lg text-gray-200 mt-4 max-w-3xl mx-auto">
            Unlock exclusive advantages with Goldmark Land Ventures.
          </p>
        </div>
        
        {/* 5. Grid for the benefit cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            // 6. Redesigned "glassmorphism" card with improved styling and hover effects
            <div 
              key={index} 
              className="bg-black/30 backdrop-blur-lg p-6 rounded-xl border border-white/20 shadow-xl group transform hover:-translate-y-2 transition-all duration-300 ease-in-out hover:shadow-2xl hover:border-white/40"
            >
              <div className="flex items-center space-x-4">
                {/* 7. Icon is now inside a colored circle for emphasis */}
                <div className="flex-shrink-0 w-12 h-12 bg-[#BD872E] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle2 className="h-7 w-7 text-white" />
                </div>
                <div>
                  {/* 8. Updated text style for clarity */}
                  <h3 className="text-xl font-bold text-white">{benefit}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Benefits;