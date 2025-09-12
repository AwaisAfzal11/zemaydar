import React from 'react';
import { AlertCircle } from 'lucide-react';

const issues = [
  "Delay in property possession",
  "Discrepancies in land measurements",
  "Uncertain ownership rights",
  "Incomplete fixture or missing amenities"
];

const Issues = () => {
  return (
    // 1. Switched to a clean white background for high contrast and a professional feel
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6 text-center">
        
        {/* 2. Enhanced Typography to match the 'Benefits' section for consistency */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-black">
          Facing Property Investment Hurdles<span className="text-[#BD872E]">.</span>
        </h2>
        <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto mb-16">
          Tired of the common issues that plague property investors? We address them head-on.
        </p>

        {/* 3. Grid for the redesigned issue cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {issues.map((issue, index) => (
            
            // 4. Redesigned Issue Cards with better visual hierarchy and branding
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl border-t-4 border-[#BD872E] shadow-lg transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl"
            >
              {/* 5. Icon is now presented in a styled container for emphasis */}
              <div className="mx-auto mb-6 w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                <AlertCircle className="h-8 w-8 text-[#BD872E]" />
              </div>
              
              {/* 6. Larger, more readable font for the issue text */}
              <h3 className="text-xl font-semibold text-black">{issue}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Issues;