import React, { useState } from "react";
import Swal from "sweetalert2";
import contact from '../assets/contact-us.png';

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, message, agree } = formData;

    if (!name || !email || !phone || !message || !agree) {
      Swal.fire({
        icon: "error",
        title: "Required fields missing",
        text: "Please fill all fields and accept terms & policy.",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: "We will contact you soon.",
    });

    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
      agree: false,
    });
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-2">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
        {/* Left */}
        <div>
          <p className="text-3xl text-blue-600 mb-10 text-center font-bold">Contact us</p>
          <h1 className="text-4xl font-bold mb-4">Get in touch</h1>
          <p className="text-gray-500 mb-8">
            The right move at the right time saves your investment.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="input"
              />
              <input
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company (optional)"
                className="input"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                className="input"
              />
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number"
                className="input"
              />
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              placeholder="Tell us about yourself"
              className="input"
            />

            <label className="flex items-center gap-2 text-sm text-gray-500">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
              />
              By clicking contact us button, you agree our terms and policy.
            </label>

            <button
              type="submit"
              className="btn-c"
            >
              Send message
            </button>
          </form>
        </div>

        {/* Right */}
        <div className="flex justify-center">
          <img
            src={contact}
            alt="contact"
            className="max-w-md"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;