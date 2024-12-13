import React from "react";

interface ButtonProps {
    text: string;
    onClick?: () => void;
    background?: string; // Background color (default: dp-ocn-nxt-base-01)
    foreground?: string; // Foreground (text and border) color (default: dp-ocn-nxt-base-0a)
    disabled?: boolean;  // Disable button (default: false)
}

const Button: React.FC<ButtonProps> = ({
                                           text,
                                           onClick,
                                           background = "dp-ocn-nxt-base-01",
                                           foreground = "dp-ocn-nxt-base-0a",
                                           disabled = false,
                                       }) => {
    const bgColor = `bg-${background}`;
    const textColor = `text-${foreground}`;
    const borderColor = `border-${foreground}`;

    const hoverBgColor = `hover:bg-${foreground}`;
    const hoverTextColor = `hover:text-${background}`;
    const hoverBorderColor = `hover:border-${background}`;

    const focusBgColor = `focus:bg-${foreground}`;
    const focusTextColor = `focus:text-${background}`;
    const focusBorderColor = `focus:border-${background}`;

    const activeBgColor = `active:bg-${foreground}`;
    const activeTextColor = `active:text-${background}`;
    const activeBorderColor = `active:border-${background}`;

    const disabledStyles = `opacity-50 cursor-not-allowed`;

    return (
        <button
            className={`
                inline-flex items-center justify-center rounded-md border font-medium
                px-3 py-2 text-sm md:px-4 md:py-3 md:text-base lg:px-5 lg:py-4 lg:text-lg
                ${bgColor} ${textColor} ${borderColor}
                ${hoverBgColor} ${hoverTextColor} ${hoverBorderColor}
                ${focusBgColor} ${focusTextColor} ${focusBorderColor}
                ${activeBgColor} ${activeTextColor} ${activeBorderColor}
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