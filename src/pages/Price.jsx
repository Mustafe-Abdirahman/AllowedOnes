import React from "react";

const Price = () => {
  return (
    <div className="min-h-screen bg-white mt-20 flex flex-col justify-center items-center p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
        Pricing that grows with you
      </h1>
      <p className="text-gray-600 text-center mb-8">
        Choose an affordable plan packed with features for engaging your
        audience, creating customer loyalty, and driving sales.
      </p>

      {/* Responsive Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Freelancer Plan */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800">Freelancer</h2>
          <p className="text-gray-500 mt-2 mb-6">
            The essentials to provide your best work for clients.
          </p>
          <h3 className="text-3xl font-bold text-gray-800">$19</h3>
          <p className="text-gray-500">/month</p>
          <ul className="mt-6 space-y-4 text-gray-600">
            <li>✔ 5 products</li>
            <li>✔ Up to 1,000 subscribers</li>
            <li>✔ Basic analytics</li>
            <li>✔ 48-hour support response time</li>
          </ul>
          <button className="mt-6 w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Buy plan
          </button>
        </div>

        {/* Startup Plan */}
        <div className="bg-white shadow-lg rounded-lg p-6 border-2 border-blue-500">
          <h2 className="text-xl font-semibold text-gray-800 flex items-center">
            Startup{" "}
            <span className="ml-2 text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
              Most popular
            </span>
          </h2>
          <p className="text-gray-500 mt-2 mb-6">
            A plan that scales with your rapidly growing business.
          </p>
          <h3 className="text-3xl font-bold text-gray-800">$29</h3>
          <p className="text-gray-500">/month</p>
          <ul className="mt-6 space-y-4 text-gray-600">
            <li>✔ 25 products</li>
            <li>✔ Up to 10,000 subscribers</li>
            <li>✔ Advanced analytics</li>
            <li>✔ 24-hour support response time</li>
            <li>✔ Marketing automations</li>
          </ul>
          <button className="mt-6 w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Buy plan
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800">Enterprise</h2>
          <p className="text-gray-500 mt-2 mb-6">
            Dedicated support and infrastructure for your company.
          </p>
          <h3 className="text-3xl font-bold text-gray-800">$59</h3>
          <p className="text-gray-500">/month</p>
          <ul className="mt-6 space-y-4 text-gray-600">
            <li>✔ Unlimited products</li>
            <li>✔ Unlimited subscribers</li>
            <li>✔ Advanced analytics</li>
            <li>✔ 1-hour support response time</li>
            <li>✔ Marketing automations</li>
            <li>✔ Custom reporting tools</li>
          </ul>
          <button className="mt-6 w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Buy plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Price;
