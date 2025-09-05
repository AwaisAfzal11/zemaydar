import React from 'react';
import { Mail } from 'lucide-react'; // A relevant icon for the contact page

const Contact = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 text-center px-6 py-12'>
      <div className="bg-white p-12 rounded-xl shadow-lg border-t-4 border-[#BD872E]">
        <div className="mx-auto mb-6 w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center">
          <Mail className="h-10 w-10 text-[#BD872E]" />
        </div>
        <h1 className="text-4xl font-extrabold text-black mb-3">
          Get in Touch Soon<span className="text-[#BD872E]">.</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-md mx-auto mb-6">
          Our interactive contact page is currently under construction. In the meantime, you can reach us directly via email or phone.
        </p>
        <div className="text-left inline-block">
          <a 
            href="mailto:info@zemaydar.com" 
            className="text-gray-800 hover:text-[#BD872E] transition-colors font-semibold"
          >
            <p><strong>Email:</strong> info@zemaydar.com</p>
          </a>
          <a 
            href="tel:+923116111111" 
            className="text-gray-800 hover:text-[#BD872E] transition-colors font-semibold"
          >
            <p className="mt-2"><strong>Phone:</strong> +92 311 6111111</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;