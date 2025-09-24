// components/common/Card.tsx
import React from "react";
import { CardProps } from "../../interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 max-w-sm hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-lg font-semibold text-blue-700 mb-2">{title}</h2>
      <p className="text-gray-600">{content}</p>
    </div>
  );
};

export default Card;
