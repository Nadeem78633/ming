import React, { useState } from "react";
import "./pricing.css";

const PLANS = [
  {
    id: "basic",
    name: "Basic",
    priceMonthly: 20,
    priceYearly: 1000,
    features: ["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"],
  },
  {
    id: "pro",
    name: "Pro",
    priceMonthly: 30,
    priceYearly: 4000,
    features: ["1 TB Storage", "5 Users Allowed", "Send up to 10 GB"],
  },
  {
    id: "premium",
    name: "Premium",
    priceMonthly:40,
    priceYearly: 5000,
    features: ["2 TB Storage", "10 Users Allowed", "Send up to 20 GB"],
  },
];

const PricingCard = () => {
  const [isYearly, setIsYearly] = useState(false);

  const cardColor = !isYearly ? "#4a2a6b" : "#00203f";

  const textColor = !isYearly ? "#c7d3d4" : "#adefd1";

  const nameColor = !isYearly ? "white" : "white";
  const priceColor = !isYearly ? "#c7d3d4" : "#adefd1";
  const listColor = !isYearly ? "white" : "white";
  const buyNow=!isYearly?'#4a2a6b':'#242134'
  const toggleColor=!isYearly?'':'#4a2a6b'

  const handleToggle = () => {
    setIsYearly(!isYearly);
  };

  const pricingPlans = PLANS.map((plan) => {
    const price = isYearly ? plan.priceYearly : plan.priceMonthly;
    return (
      <div
        key={plan.id}
        className="pricing-card"
        style={{ backgroundColor: cardColor }}
      >
        <div className="pricing-card-header">
          <h2 style={{ color: nameColor }}>{plan.name}</h2>
          <div className="pricing-card-price" style={{ color: priceColor }}>
            ${price} {isYearly ? "per year" : "per month"}
          </div>
        </div>
        <div className="pricing-card-features">
          <ul>
            {plan.features.map((feature) => (
              <li key={feature} style={{ color: listColor }}>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <button
          className="pricing-card-button"
          style={{ backgroundColor: textColor,color:buyNow }}
        >
          Buy Now
        </button>
      </div>
    );
  });

  return (
    <div className="pricing-container">
      <div className="pricing-toggle">
        <span>Monthly</span>
        <label className="switch">
          <input type="checkbox" onChange={handleToggle}  />
          <span className="slider" style={{backgroundColor:toggleColor}} ></span>
        </label>
        <span>Yearly</span>
      </div>
      <div className="pricing-cards">{pricingPlans}</div>
    </div>
  );
};

export default PricingCard;
