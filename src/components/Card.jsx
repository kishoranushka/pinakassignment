import React, { useEffect } from "react";

const Card = ({ icon, title, description, linkText }) => {
  useEffect(() => {
    const cards = document.querySelectorAll(".service-card");

    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        card.style.transform = "rotate(360deg)";
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "rotate(0deg)";
      });
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mouseenter", null);
        card.removeEventListener("mouseleave", null);
      });
    };
  }, []);

  return (
    <div className="service-card relative bg-white p-6 shadow-lg text-center transition-transform duration-1000">
      <div className="icon-wrapper absolute -top-8 left-1/2 transform -translate-x-1/2">
        <div className="icon bg-white border-4 border-[#2a1768] rounded-full p-4 text-4xl">
          <img src={icon} alt={`${title} icon`} className="w-12 h-12 mx-auto" />
        </div>
      </div>
      <h3 className="text-xl font-semibold mt-12 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href="#" className="text-blue-500 hover:underline">
        {linkText}
      </a>
    </div>
  );
};

export default Card;
