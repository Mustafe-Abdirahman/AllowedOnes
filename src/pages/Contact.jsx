import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col   md:flex-row bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100 min-h-screen">
      {/* Left Side */}
      <div className="md:w-1/2 p-8 bg-opacity-90 flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-6">
          Contact Us Get in touch with our team for professional{" "}
          <b>graphic design,</b>
          <b>digital marketing</b>, <b>web development</b> , and{" "}
          <b>video editing</b> solutions. Whether you’re looking to enhance your
          brand, create a stunning website, launch a powerful marketing
          campaign, or craft engaging videos, we’re here to help. Let’s
          collaborate to bring your vision to life! Reach out today—we’re just a
          call or message away.
        </p>
        <div className="text-gray-800 space-y-2">
          <p>Hargeisa,Somaliland</p>

          <p>+252 63 8777311</p>
          <p>info@kaabetech.com</p>
        </div>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 p-8 flex flex-col justify-center">
        <form className="space-y-4 bg-white bg-opacity-80 p-6 rounded-lg shadow-lg">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="First name"
              className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Last name"
              className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            placeholder="Phone number"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            placeholder="Message"
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
      </div>
    </div>
  );
};

export default Contact;
