import React, { type HTMLAttributes } from "react";
import { GrClose } from "react-icons/gr";
import routes from "src/routes/router";
import Button from "./Button";
import { useLanguageStore } from "src/hooks/useLanguageStore";
import { twMerge } from "tailwind-merge";

type Props = {
  toggle: () => void;
};

const Sidebar: React.FC<Props & HTMLAttributes<HTMLDivElement>> = (props) => {
  const { lang } = useLanguageStore();
  return (
    <div
      className={twMerge(
        "absolute top-0 left-0 right-0 bottom-0 flex z-50 ",
        props.className
      )}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          props.toggle();
        }
      }}
    >
      <div className="w-7/12 bg-app-mask" />
      <div className="w-5/12 bg-app-dark">
        <Button
          variant="icon"
          className="bg-transparent cursor-pointer block ml-auto p-3 hover:text-app-first text-xl"
        >
          <GrClose />
        </Button>
        <nav className=" flex flex-col py-8">
          {routes.map((el, i) => (
            <a
              key={i}
              onClick={props.toggle}
              href={el.path}
              className="text-white ps-4 py-2 hover:text-app-first flex items-center gap-x-2 text-md"
            >
              {el.icon}
              {el.label[lang]}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
