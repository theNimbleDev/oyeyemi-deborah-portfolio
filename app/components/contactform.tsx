"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto default:bg-current">
      <form onSubmit={handleSubmit} className="flex-1 space-y-6">
        <div className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-gray-300 mb-2">
              Full name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-transparent border border-gray-800 rounded-md focus:outline-none focus:border-customPink text-gray-300"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 focus:ring-0 py-2 bg-transparent border border-gray-800 rounded-md focus:outline-none focus:border-customPink text-gray-300"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full px-4 py-2 bg-transparent border border-gray-800 rounded-md focus:outline-none focus:border-customPink text-gray-300 resize-none"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full text-[20px] font-semibold bg-customPink text-white py-3 rounded-md hover:bg-customPink/55 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
