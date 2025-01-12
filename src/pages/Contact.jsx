import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the WhatsApp message
    const { firstName, lastName, email, phoneNumber, message } = formData;
    const messageText = `Hello, my name is ${firstName} ${lastName}. My email is ${email}. My phone number is ${phoneNumber}. I would like to inquire about your services. Here's my message: ${message}`;

    // WhatsApp API URL
    const whatsappLink = `https://wa.me/252638777311?text=${encodeURIComponent(
      messageText
    )}`;

    // Redirect user to WhatsApp with the message
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="flex flex-col p-20 md:flex-row bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100 min-h-screen">
      {/* Left Side */}
      <div className="md:w-1/2 p-8 bg-opacity-90 flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-6">
          Contact Us to get in touch for professional <b>graphic design,</b>{" "}
          <b>digital marketing</b>, <b>web development</b> , and{" "}
          <b>video editing</b> solutions.
        </p>
        <div className="text-gray-800 space-y-2">
          <p>Hargeisa, Somaliland</p>
          <p>+252 63 8777311</p>
          <p>info@kaabetech.com</p>
        </div>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 p-8 flex flex-col justify-center">
        <form
          className="space-y-4 bg-white bg-opacity-80 p-6 rounded-lg shadow-lg"
          onSubmit={handleSubmit}
        >
          <div className="flex space-x-4">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.firstName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone number"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.phoneNumber}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
