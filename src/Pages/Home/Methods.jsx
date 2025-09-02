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
    <div className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black">The Way to Join Us</h2>
          <p className="text-gray-600 mt-2">Choose the investment method that suits you best.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {investmentMethods.map((method, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#BD872E]">
              <h3 className="text-2xl font-bold text-[#BD872E] mb-4">{method.title}</h3>
              <p className="text-gray-600">{method.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Methods;