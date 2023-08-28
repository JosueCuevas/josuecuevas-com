import React from "react";
import { Nav } from "../../interfaces/generalStructure";

interface Props {
  footer: {
    logo_h: string;
    logo_v: string;
    text_1: string;
    text_2: string;
  };
  nav: Nav[];
}

const Footer: React.FC<Props> = ({ footer, nav }) => {
  return (
    <footer className="bg-neutral-color flex flex-col gap-12 py-9 px-2 sm:px-4 lg:flex-row lg:justify-center lg:items-center">
      <img src={footer.logo_h} alt="Logo" className="w-96 mx-auto lg:hidden" />
      <img
        src={footer.logo_v}
        alt="Logo"
        className="hidden lg:block lg:w-1/3"
      />
      <div>
        <p className="text-white">{footer.text_1}</p>
        <p className="text-white mt-4">{footer.text_2}</p>
      </div>
      <nav className="flex flex-col gap-4 lg:w-1/3">
        {nav.map((el, i) => (
          <a
            href={el.href}
            key={i}
            className="text-bg-color font-light text-sm hover:text-accent-color transition-colors duration-300 ease-in-out ts-1 w-20"
          >
            {el.link}
          </a>
        ))}
      </nav>
    </footer>
  );
};

export default Footer;
