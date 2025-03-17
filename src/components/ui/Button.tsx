import { ReactNode, MouseEvent, KeyboardEvent } from "react";

interface IButton {
  className?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  children: ReactNode;
  variant?: "primary" | "secondary" | "tertiary" | "disabled" | "danger"
}

const Button = ({ className = "", onClick, onKeyDown, type = "button", disabled, children, variant = "primary"}: IButton) => {


  const baseStyles = "text-base transition-all duration-300 ease-in-out outline-offset-4 flex items-center justify-center gap-1 text-center rounded-xl h-12 px-4 flex items-center justify-center";
  const variantStyles = {
    primary: " bg-green-500 shadow-lg shadow-green-500/40 text-white font-normal hover:bg-green-400/90 active:bg-green-600/90 shadow-green-500/200 cursor-pointer",
    secondary: " bg-gray-900 shadow-lg shadow-gray-900/40 text-white font-normal hover:bg-gray-800/90 active:bg-gray-950/90 shadow-gray-900/200 cursor-pointer",
    tertiary: " hover:bg-gray-50 bg-white ring-1 text-gray-900 ring-gray-200 tracking-tight font-medium cursor-pointer",
    danger: " bg-rose-500 text-white hover:bg-rose-400 active:bg-rose-600 shadow-rose-200 hover:shadow-xl hover:shadow-rose-200 cursor-pointer",
    disabled: " bg-gray-200 text-gray-500 text-white cursor-not-allowed",
  };


  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className} `}
      type={type}
      onKeyDown={onKeyDown}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;