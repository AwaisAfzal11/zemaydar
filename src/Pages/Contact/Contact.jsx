import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
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
    setStatus({ submitting: true, msg: 'Sending...', type: '' });

    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach(key => {
        formDataToSend.append(key, formData[key]);
      });

      const response = await fetch("/send_email_global.php", {
        method: 'POST',
        body: formDataToSend
      });

      if (!response.ok) throw new Error("Submission failed");
      
      const result = await response.json();

      setStatus({
        submitting: false,
        msg: result.message || "Message sent successfully!",
        type: result.status
      });

      if (result.status === 'success') {
        setFormData({ fullName: "", email: "", phone: "", message: "" });
      }
    } catch (error) {
      setStatus({ 
        submitting: false, 
        msg: "Failed to send message. Please try again.", 
        type: 'error' 
      });
    }
  };

  return (
    <div className="bg-gray-50 py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black">
            Contact Us<span className="text-[#BD872E]">.</span>
          </h1>
          <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
            Get in touch now. We're here to help and answer any question you might have.
          </p>
        </div>

        {/* Main Content: Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-lg flex items-start gap-5">
              <div className="flex-shrink-0 w-12 h-12 bg-[#BD872E] text-white rounded-full flex items-center justify-center">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-black">Email</h3>
                <p className="text-gray-600">Our friendly team is here to help.</p>
                <a href="mailto:info@zemaydar.com" className="text-[#BD872E] font-semibold hover:underline">
                  info@zemaydar.com
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg flex items-start gap-5">
              <div className="flex-shrink-0 w-12 h-12 bg-[#BD872E] text-white rounded-full flex items-center justify-center">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-black">Phone</h3>
                <p className="text-gray-600">Mon-Fri from 9am to 5pm.</p>
                <a href="tel:+923116111111" className="text-[#BD872E] font-semibold hover:underline">
                  +92 311 6111111
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg flex items-start gap-5">
              <div className="flex-shrink-0 w-12 h-12 bg-[#BD872E] text-white rounded-full flex items-center justify-center">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-black">Office</h3>
                <p className="text-gray-600">Come say hello at our office HQ.</p>
                <p className="text-[#BD872E] font-semibold">
                  Office # 04, Behind Kiani House, Near DHA Phase 2, Islamabad, Pakistan.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            {status.msg && (
              <div className={`mb-4 p-3 rounded text-center ${status.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {status.msg}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#BD872E]" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#BD872E]" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number (Optional)</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#BD872E]" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#BD872E]"></textarea>
              </div>
              <button type="submit" disabled={status.submitting} className="w-full bg-[#BD872E] text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-amber-600 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                {status.submitting ? 'Sending...' : 'Send Message'} <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;