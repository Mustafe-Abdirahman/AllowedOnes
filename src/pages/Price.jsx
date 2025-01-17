import React, { useState } from "react";

const PricingTable = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const pricingData = {
    monthly: [
      {
        title: "Lite Package",
        price: "$25",
        features: [
          "social media account set-up",
          "2 posters every week",
          "Basic monthly analytics",
          "promo video",
          "Monthly digital marketing campaigns",
          "24-hour support response time",
        ],
      },
      {
        title: "Plus Package",
        price: "$45",
        features: [
          "A single-page website",
          "promo video",
          "5 posters every week",
          "digital marketing startegy",
          "Branding kit",
          "weekly digital marketing campaigns ",
          "24-hour support response time",
        ],
      },
      {
        title: "Premium Package",
        price: null, // Removed pricing
        features: [
          "A single-page website",
          "unlimited promo video",
          "unlimited posters every week",
          "unlimited Branding kit",
          "unlimited digital marketing campaigns ",
          "24-hour support response time",
        ],
      },
    ],
    yearly: [
      {
        title: "Lite Package",
        price: "$300",
        features: [
          "social media account set-up",
          "2 posters every week",
          "Basic monthly analytics",
          "promo video",
          "Monthly digital marketing campaigns",
          "24-hour support response time",
        ],
      },
      {
        title: "Plus Package",
        price: "$540",
        features: [
          "A single-page website",
          "promo video",
          "5 posters every week",
          "digital marketing startegy",
          "Branding kit",
          "weekly digital marketing campaigns ",
          "24-hour support response time",
        ],
      },
      {
        title: "Premium Package",
        price: null, // Removed pricing
        features: [
          "A single-page website",
          "unlimited promo video",
          "unlimited posters every week",
          "unlimited Branding kit",
          "unlimited digital marketing campaigns ",
          "24-hour support response time",
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
                plan.title === "Premium Package"
                  ? "bg-gray-900 text-white"
                  : "bg-white"
              }`}
            >
              <h2 className="text-xl font-bold mb-4">{plan.title}</h2>
              {plan.price && (
                <p className="text-4xl font-bold mb-6">
                  {plan.price}/{billingCycle}
                </p>
              )}
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-blue-600 mr-2">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
