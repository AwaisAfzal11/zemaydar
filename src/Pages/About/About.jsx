import React from 'react';
import { HardHat } from 'lucide-react'; // Using a construction-themed icon

const About = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 text-center px-6 py-12'>
      <div className="bg-white p-12 rounded-xl shadow-lg border-t-4 border-[#BD872E]">
        <div className="mx-auto mb-6 w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center">
          <HardHat className="h-10 w-10 text-[#BD872E]" />
        </div>
        <h1 className="text-4xl font-extrabold text-black mb-3">
          Coming Soon<span className="text-[#BD872E]">.</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-md mx-auto">
          Our "About Us" page is currently under construction. We're working hard to bring you the full story of ZEMAYDAR. Please check back soon!
        </p>
      </div>
    </div>
  );
}

export default About;