import React from 'react';
import { ShieldAlert } from 'lucide-react';

const risks = [
  "Unverified and disputed properties",
  "No management support post-purchase",
  "Discrepancies in land measurements"
];

const Risks = () => {
  return (
    // 1. Using a very light, thematic background color to create a subtle "caution" feel
    <div className="py-24 bg-amber-50">
      <div className="container mx-auto px-6">
        
        {/* 2. Consistent Typography and Branding */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black">
            Risks of Investing Without Expertise<span className="text-[#BD872E]">.</span>
          </h2>
          <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto">
            Navigating the raw land market alone can be perilous. Here's why.
          </p>
        </div>

        {/* 3. A centered, vertical list for a more focused and readable presentation */}
        <div className="max-w-4xl mx-auto space-y-6">
          {risks.map((risk, index) => (
            
            // 4. Redesigned Risk Item with clear visual hierarchy
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md p-6 flex items-start gap-5 transform hover:scale-105 transition-transform duration-300"
            >
              {/* 5. Emphasized Icon in a branded container */}
              <div className="flex-shrink-0 w-12 h-12 bg-[#BD872E] rounded-full flex items-center justify-center">
                <ShieldAlert className="h-6 w-6 text-white" />
              </div>

              {/* 6. Larger, more impactful text for the risk description */}
              <div>
                <p className="text-xl font-semibold text-black">{risk}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Risks;