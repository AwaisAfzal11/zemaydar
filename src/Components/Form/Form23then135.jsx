import React, { useState } from "react";
import { Send, ArrowRight, ArrowDown } from "lucide-react";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
  });

  const [status, setStatus] = useState({ 
    submitting: false, 
    msg: '',
    type: '' 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Reset previous status
    setStatus({ 
      submitting: true, 
      msg: 'Sending...', 
      type: '' 
    });

    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach(key => {
        // Only append non-empty values
        if (formData[key]) {
          formDataToSend.append(key, formData[key]);
        }
      });

      const response = await fetch("/send_email_global.php", {
        method: 'POST',
        body: formDataToSend
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      const result = await response.json();

      // Update status based on server response
      setStatus({
        submitting: false,
        msg: result.message || "Message sent successfully!",
        type: result.status
      });

      // Clear form if submission was successful
      if (result.status === 'success') {
        setFormData({
          firstName: "",
          email: "",
          phone: "",
        });
      }
    } catch (error) {
      setStatus({ 
        submitting: false, 
        msg: "Failed to send request. Please try again.", 
        type: 'error' 
      });
    }
  };

  return (
    <div className="container mx-auto p-4 my-20">
      <div className="max-w-3xl mx-auto flex flex-col lg:flex-row gap-6 items-stretch">
        {/* Contact Us Box */}
        <div className="bg-gradient-to-r from-[#3D498A] to-[#6A7D9F] rounded-2xl p-8 flex items-center justify-center lg:w-1/2">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold text-white">Contact Us</h2>
            {/* Show different arrows based on screen size */}
            <ArrowRight className="hidden lg:block w-8 h-8 text-white" />
            <ArrowDown className="lg:hidden w-8 h-8 text-white" />
          </div>
        </div>

        {/* Form Box */}
        <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 lg:w-1/2">
          {/* Status Message */}
          {status.msg && (
            <div className={`mb-4 p-3 rounded text-center ${
              status.type === 'success' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {status.msg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 outline-none"
                placeholder="Your Good Name"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 outline-none"
                placeholder="email@example.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 outline-none"
                placeholder="+1 (123) 456-7890"
                required
              />
            </div>

            <button
              type="submit"
              disabled={status.submitting}
              className="w-full bg-[#3D498A] text-white py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status.submitting ? 'Submitting...' : 'Submit'} <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;