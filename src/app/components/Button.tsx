import React from "react";

interface ButtonProps {
    text: string;
    onClick?: () => void;
    disabled?: boolean;  // Disable button (default: false)
}

const Button: React.FC<ButtonProps> = ({
                                           text,
                                           onClick,
                                           disabled = false,
                                       }) => {
    const disabledStyles = `opacity-50 cursor-not-allowed`;

    return (
        <button
            className={`
                inline-flex items-center justify-center rounded-md border font-medium
                px-2 py-1 text-sm md:px-3 md:py-2 md:text-base
                bg-dp-ocn-nxt-grey-50
                text-dp-ocn-nxt-base-0a
                border-dp-ocn-nxt-base-0a
                hover:bg-dp-ocn-nxt-base-0a
                hover:text-dp-ocn-nxt-base-00
                hover:border-dp-ocn-nxt-base-00
                focus:bg-dp-ocn-nxt-base-0a
                focus:text-dp-ocn-nxt-base-00
                focus:border-dp-ocn-nxt-base-00
                active:bg-dp-ocn-nxt-base-0a
                active:text-dp-ocn-nxt-base-00
                active:border-dp-ocn-nxt-base-00
                transition-all duration-300
                ${disabled ? disabledStyles : ""}
            `}
            onClick={!disabled ? onClick : undefined}
            disabled={disabled}
        >
            {text}
        </button>
    );
};

export default Button;