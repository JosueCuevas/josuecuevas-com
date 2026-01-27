import React from "react";
import { twMerge } from "tailwind-merge";

const MainLayout: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <div
      {...props}
      className={twMerge("w-screen min-h-screen", props.className)}
    >
      {props.children}
    </div>
  );
};

export default MainLayout;
