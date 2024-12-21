"use client";

import React, { useState } from "react";
import { cn } from "./Utils";

export const Card = React.memo(({ card, index, hovered, setHovered, onClick }) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    onClick={() => onClick(card)} // Add onClick handler
    className={cn(
      "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-56 w-full transition-all duration-300 ease-out cursor-pointer",
      hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
    )}
  >
    <img
      src={card.src}
      alt={card.title}
      fill="true"
      className="object-cover absolute inset-0 h-60"
    />
    <div
      className={cn(
        "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
        hovered === index ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
        {card.title}
      </div>
    </div>
  </div>
));

Card.displayName = "Card";

function Popup({ card, onClose }) {
  if (!card) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 ">
      <div className="bg-black rounded-lg p-20  shadow-lg relative  ">
        <h2 className="pb-2"> &gt; Project Preview</h2>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white hover:text-green-400 font-bold w-10 h-10 text-2xl  "
        >
          &times;
        </button>
        <img
          src={card.gif} // Assuming the `gif` property holds the URL for the GIF
          alt={`${card.title} preview`}
          className="rounded-lg w-full h-68 p-5 object-cover mb-4"
        />
        
        <h2 className="text-xl font-bold mb-2">{card.title}</h2>
        <p className="text-white">{card.description}</p>
      </div>
    </div>
  );
}

export function FocusCards({ cards }) {
  const [hovered, setHovered] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closePopup = () => {
    setSelectedCard(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-2 w-full">
        {cards.map((card, index) => (
          <Card
            key={card.title}
            card={card}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
            onClick={handleCardClick}
          />
        ))}
      </div>
      {selectedCard && <Popup card={selectedCard} onClose={closePopup} />}
    </>
  );
}
