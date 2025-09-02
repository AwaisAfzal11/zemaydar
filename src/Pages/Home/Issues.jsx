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
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Facing Property Investment Hurdles?</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">Tired of the common issues that plague property investors? We address them head-on.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {issues.map((issue, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-700">{issue}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Issues;