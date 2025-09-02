import React from 'react';
import { CheckCircle2 } from 'lucide-react';

import img1 from '../../Assets/img2.jpg'; // Your background image

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
  return (
    // 1. Set the container to relative and apply the background image
    <div 
      className="relative py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${img1})` }}
    >
      {/* 2. Add a semi-transparent overlay to darken the background */}
      <div className="absolute inset-0 bg-[#3D498A] opacity-80"></div>

      {/* 3. Make the content container relative to sit on top of the overlay */}
      <div className="relative container mx-auto px-6 z-10">
        <div className="text-center mb-12">
          {/* 4. Change text colors to white for better readability */}
          <h2 className="text-3xl font-bold text-white">Member Benefits</h2>
          <p className="text-gray-200 mt-2">Unlock exclusive advantages with Goldmark Land Ventures.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            // 5. Add a subtle background to each benefit item for a "glassmorphism" effect
            <div key={index} className="flex items-start space-x-4 p-4 bg-white/10 rounded-lg border border-white/20 backdrop-blur-sm">
              <CheckCircle2 className="h-8 w-8 text-green-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white">{benefit}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Benefits;