import React from "react";
import { twMerge } from "tailwind-merge";

const MainLayout: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <div {...props} className={twMerge(props.className, "w-screen")}>
      {props.children}
    </div>
  );
};

export default MainLayout;
