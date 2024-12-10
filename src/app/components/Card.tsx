import React from 'react';

interface CardProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, children }) => {
  return (
    <div className="bg-dp-ocn-nxt-base-01 border border-dp-ocn-nxt-base-03 rounded-md p-4">
      <h3 className="text-dp-ocn-nxt-base-05 text-xl font-semibold">{title}</h3>
      <p className="text-dp-ocn-nxt-base-06 mt-2">{description}</p>
      <div className="mt-4">{children}</div>
    </div>
  );
};

export default Card;