import React from 'react';

const investmentMethods = [
  {
    title: "Method 01 (Intaqal)",
    description: "Direct transfer of ownership to the investor's name.",
  },
  {
    title: "Method 02 (Post-Dated Cheques)",
    description: "Involves a buy-back agreement with the company.",
  },
  {
    title: "Method 03 (Certificate)",
    description: "The company issues a certificate of ownership equal to the land's purchase value.",
  },
];

const Methods = () => {
  return (
    // 1. Using a light gray background to differentiate from other sections
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        
        {/* 2. Consistent Typography and Branding */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black">
            The Way to Join Us<span className="text-[#BD872E]">.</span>
          </h2>
          <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto">
            Choose the investment method that suits you best.
          </p>
        </div>

        {/* 3. Grid for the redesigned method cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {investmentMethods.map((method, index) => (
            
            // 4. Redesigned Method Card with a sophisticated, layered look
            <div 
              key={index} 
              className="relative bg-white p-8 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl"
            >
              {/* 5. Large, stylized number in the background for visual appeal */}
              <div className="absolute -top-2 -right-2 text-[100px] font-black text-gray-100 opacity-80">
                0{index + 1}
              </div>
              
              {/* 6. Card content is relative to sit on top of the background number */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-black mb-4">{method.title}</h3>
                <p className="text-gray-600 text-base">{method.description}</p>
              </div>

              {/* 7. Subtle branded accent at the bottom of the card */}
              <div className="absolute bottom-0 left-0 h-1.5 w-full bg-[#BD872E]"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Methods;