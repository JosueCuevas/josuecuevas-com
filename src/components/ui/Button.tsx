import React from "react";
import { twMerge } from "tailwind-merge";

type Variant = "outline" | "default" | "pills" | "icon";

const variantStyles: {
  [key: string]: React.HTMLAttributes<HTMLButtonElement>["className"];
} = {
  outline:
    "border border-app-first text-app-first hover:bg-app-first hover:text-white font-medium leading-5 rounded-md text-sm px-4 py-2.5 focus:outline-none",
  default:
    "text-white bg-app-first/90 box-border border border-transparent hover:bg-app-first focus:ring-2 focus:ring-app-third shadow-xs font-medium leading-5 rounded-md text-sm px-4 py-2.5 focus:outline-none",
  pills:
    "text-white bg-app-first/90 box-border border border-transparent hover:bg-app-first focus:ring-2 focus:ring-app-third shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none",
  icon: "text-white focus:ring-2 focus:outline-none box-border border border-transparent font-medium leading-5 rounded-md text-sm px-4 py-2.5 text-center inline-flex items-center gap-x-2 justify-center",
};

type Props = {
  variant?: Variant;
  className?: React.HTMLAttributes<HTMLButtonElement>["className"];
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  children: React.ReactNode;
  icon?: React.ReactNode;
};

const Button: React.FC<
  Props & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ variant = "default", className, type, children, icon, ...props }) => {
  return (
    <button
      type={type}
      className={twMerge(
        "cursor-pointer transition-all hover:scale-105 inline-flex",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
};

export default Button;
