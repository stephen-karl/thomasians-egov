import { Link as ReactRouterLink } from 'react-router-dom';
import { ReactNode } from 'react';
import clsx from 'clsx';

type LinkProps = {
  className?: string;
  to: string;
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  color?: "black" | "gray" | "green";
};

const colors = {
  black: 'text-gray-900 hover:text-gray-800 active:text-gray-950',
  gray: 'text-gray-500 hover:text-gray-400 active:text-gray-600',
  green: 'text-green-500 hover:text-green-400 active:text-green-600',
};

const sizes = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
};

const Link = ({ 
  className = '', 
  to, 
  children,
  size = "md",
  color = "black" 
}: LinkProps) => {

  const baseStyle = "font-normal tracking-wide hover:underline hover:underline-offset-4 cursor-pointer";

  return (
    <ReactRouterLink to={to} className={clsx(baseStyle, colors[color], sizes[size], className)}>
      {children}
    </ReactRouterLink>
  );
};

export default Link;
