import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ text, onClick, type = 'button' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-dp-ocn-nxt-base-0c text-dp-ocn-nxt-base-07 border-2 border-dp-ocn-nxt-base-0a rounded-md px-4 py-2 font-bold hover:bg-dp-ocn-nxt-base-0d hover:border-dp-ocn-nxt-base-0a transition-all duration-200"
    >
      {text}
    </button>
  );
};

export default Button;