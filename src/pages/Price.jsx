import React, { useState } from "react";

const PricingTable = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const handleToggle = () => {
    setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly");
  };

  const pricingData = {
    monthly: [
      {
        title: "Freelancer",
        price: "$19",
        features: [
          "5 products",
          "Up to 1,000 subscribers",
          "Basic analytics",
          "24-hour support response time",
        ],
      },
      {
        title: "Startup",
        price: "$29",
        features: [
          "25 products",
          "Up to 10,000 subscribers",
          "Advanced analytics",
          "Marketing automations",
        ],
      },
      {
        title: "Enterprise",
        price: "Custom",
        features: [
          "Unlimited products",
          "Unlimited subscribers",
          "Advanced analytics",
          "Dedicated support",
          "Custom integrations",
        ],
      },
    ],
    yearly: [
      {
        title: "Freelancer",
        price: "$199",
        features: [
          "5 products",
          "Up to 1,000 subscribers",
          "Basic analytics",
          "24-hour support response time",
        ],
      },
      {
        title: "Startup",
        price: "$299",
        features: [
          "25 products",
          "Up to 10,000 subscribers",
          "Advanced analytics",
          "Marketing automations",
        ],
      },
      {
        title: "Enterprise",
        price: "Custom",
        features: [
          "Unlimited products",
          "Unlimited subscribers",
          "Advanced analytics",
          "Dedicated support",
          "Custom integrations",
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-50">
      <div className="max-w-5xl w-full p-6 mt-20">
        <h1 className="text-3xl font-bold text-center mb-6">
          Pricing that grows with you
        </h1>
        <p className="text-center mb-8 text-gray-600">
          Choose an affordable plan that's packed with the best features for
          engaging your audience, creating customer loyalty, and driving sales.
        </p>
        <div className="flex justify-center mb-8">
          <button
            className={`px-4 py-2 rounded-l-lg ${
              billingCycle === "monthly"
                ? "bg-blue-600 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setBillingCycle("monthly")}
          >
            Monthly
          </button>
          <button
            className={`px-4 py-2 rounded-r-lg ${
              billingCycle === "yearly"
                ? "bg-blue-600 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setBillingCycle("yearly")}
          >
            Yearly
          </button>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {pricingData[billingCycle].map((plan, index) => (
            <div
              key={index}
              className={`p-6 border rounded-lg shadow-lg ${
                plan.title === "Enterprise"
                  ? "bg-gray-900 text-white"
                  : "bg-white"
              }`}
            >
              <h2 className="text-xl font-bold mb-4">{plan.title}</h2>
              <p className="text-4xl font-bold mb-6">{plan.price}/month</p>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-blue-600 mr-2">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>
              {plan.title === "Enterprise" ? (
                <button className="w-full py-2 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900">
                  Contact sales
                </button>
              ) : (
                <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Buy plan
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
