import React from 'react';

const investmentMethods = [
  {
    option: "01",
    tenure: "18 Months",
    title: "(INTAQAL)",
    details: [
      "Buy 5 Marla or upto 4 Kanal Land.",
      "Get Intaqal of that land in your name (Govt. transfer charges will be applicable).",
      "The company executes a Buy Back Agreement with you at Rs: 880,000 per kanal."
    ]
  },
  {
    option: "02",
    tenure: "18 Months",
    title: "(POST DATED CHEQUES)",
    details: [
      "Buy 5 Marla or upto 4 Kanal Land.",
      "The company executes a Buy Back Agreement with you at Rs: 880,000 per kanal and provides cheques of the same value. Transfer that land into the company name.",
      "(The company will pay the transfer charges)."
    ]
  },
  {
    option: "03",
    tenure: "18 Months",
    title: "(CERTIFICATE)",
    details: [
      "Buy 5 Marla or upto 4 Kanal Land.",
      "Company executes a Buy Back Agreement with you at Rs: 880,000 per kanal and provides a certificate of ownership equal to the Purchase Value of the land. Transfer that land into the company name.",
      "(Company will pay the transfer charges)."
    ]
  }
];

const Methods = () => {
  return (
    // 1. Using a clean white background as shown in the image
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* 2. Replicating the title structure from the image */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[#BD872E] tracking-widest mb-2">GOLDMARK LAND VENTURES</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-black">
            THE WAY TO JOIN US
          </h2>
        </div>

        {/* 3. Grid for the investment method cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {investmentMethods.map((method) => (
            
            // 4. Building the card to precisely match the image's design
            <div 
              key={method.option} 
              className="bg-white rounded-lg shadow-xl flex flex-col overflow-hidden border border-gray-200"
            >
              {/* Card Header */}
              <div className="bg-[#BD872E] text-white p-5 text-center">
                <h3 className="text-lg font-bold">OPTION {method.option}</h3>
                <p className="font-medium">(Tenure {method.tenure})</p>
              </div>

              {/* Card Body */}
              <div className="p-8 flex flex-col flex-grow">
                <h4 className="text-3xl font-bold text-[#BD872E] text-center mb-8">
                  {method.title}
                </h4>

                {/* Details separated by lines */}
                <div className="space-y-6 text-center text-gray-600 flex-grow">
                  {method.details.map((point, index) => (
                    <p key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                      {point}
                    </p>
                  ))}
                </div>
                
                {/* ROI Button/Badge */}
                <div className="mt-8 text-center">
                  <div className="inline-block bg-[#BD872E] text-white font-bold py-3 px-8 rounded-md">
                    ROI: 50% & Above*
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Methods;