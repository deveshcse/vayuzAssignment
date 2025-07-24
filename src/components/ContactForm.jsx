"use client";

import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
  };

  return (
    <div className="bg-[#131313] col-span-2 flex-1 text-white max-w-md animate-fadeInUp">
      <h2 className="text-right text-5xl md:text-8xl font-serif font-semibold leading-tight mb-8 font-playfair">
        Connect <br /> With Us
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm mb-1">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-white outline-none py-2 text-sm transition-all duration-300 focus:border-cyan-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-white outline-none py-2 text-sm transition-all duration-300 focus:border-cyan-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Phone Number</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-white outline-none py-2 text-sm transition-all duration-300 focus:border-cyan-500"
            required
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="mt-4 bg-cyan-700 hover:bg-cyan-800 text-white px-6 py-2 rounded-full text-sm transition-all duration-300"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
