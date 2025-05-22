import type { ButtonHTMLAttributes, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  width?: "w-full" | "w-fit";
}

const Button = ({ children, className, width = "w-full" }: IProps) => {
  return (
    <button
      className={`${className} ${width} rounded-lg text-white p-3 duration-300 font-medium cursor-pointer`}
    >
      {children}
    </button>
  );
};

export default Button;
