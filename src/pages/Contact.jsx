import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, lastName, email, phoneNumber, message } = formData;

    // TextMeBot API URL with your API key
    const apiUrl = `https://textmebot.com/api/send?phone=+252638777311&text=New Message from ${firstName} ${lastName}%0AEmail: ${email}%0APhone: ${phoneNumber}%0AMessage: ${message}&apikey=7yo9KBcU6qYB`;

    try {
      // Send data to WhatsApp via TextMeBot
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.success) {
        alert("Message sent to WhatsApp successfully!");
      } else {
        // Log the error and show the message
        setErrorMessage(
          data.message || "Failed to send message. Please try again."
        );
      }
    } catch (error) {
      // Catch any errors from the fetch request
      console.error("Error sending message:", error);
      setErrorMessage(
        "There was an error sending the message. Please check your network."
      );
    }
  };

  return (
    <div className="flex flex-col p-20 md:flex-row bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100 min-h-screen">
      {/* Left Side */}
      <div className="md:w-1/2 p-8 bg-opacity-90 flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-6">
          Contact Us to get in touch with our team for professional{" "}
          <b>graphic design</b>, <b>digital marketing</b>,{" "}
          <b>web development</b>, and <b>video editing</b> solutions. Whether
          you’re looking to enhance your brand, create a stunning website,
          launch a powerful marketing campaign, or craft engaging videos, we’re
          here to help. Let’s collaborate to bring your vision to life! Reach
          out today—we’re just a call or message away.
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
          onSubmit={handleSubmit}
          className="space-y-4 bg-white bg-opacity-80 p-6 rounded-lg shadow-lg"
        >
          <div className="flex space-x-4">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Send message
          </button>
        </form>

        {/* Display error message if there's an issue */}
        {errorMessage && (
          <div className="mt-4 text-red-500 font-semibold">
            <p>{errorMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
