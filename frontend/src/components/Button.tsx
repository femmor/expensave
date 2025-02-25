import { ReactNode } from "react";

interface ButtonProps {
    type: "submit" | "button";
    children: ReactNode;
    className?: string;
}

const Button = ({ type, children, className }: ButtonProps) => {
  return (
    <button
        type={type}
        className={className}
    >
        {children}
    </button>
  )
}
export default Button