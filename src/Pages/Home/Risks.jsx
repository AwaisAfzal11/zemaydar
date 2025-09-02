import React from 'react';
import { ShieldAlert } from 'lucide-react';

const risks = [
  "Unverified and disputed properties",
  "No management support post-purchase",
  "Discrepancies in land measurements"
];

const Risks = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black">Risks of Investing Without Expertise</h2>
          <p className="text-black mt-2">Navigating the raw land market alone can be perilous. Here's why.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {risks.map((risk, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 flex items-center gap-4 max-w-sm w-full">
              <ShieldAlert className="h-10 w-10 text-[#BD872E] flex-shrink-0" />
              <p className="text-black font-medium">{risk}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Risks;