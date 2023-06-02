import React from "react";
import { GrClose } from "react-icons/gr";
import { IconContext } from "react-icons";

interface Props {
  showMenu: boolean;
  toggleMenu: (t: boolean) => void;
}

const Offcanvas: React.FC<Props> = ({ showMenu, toggleMenu }) => {
  return (
    <div
      className={`fixed z-50 top-0 ${
        showMenu ? "inset-x-full" : "left-0"
      } w-full flex min-h-screen transition-all duration-300 ease-in-out`}
    >
      <div className="w-7/12 bg-bg-opacity" />
      <nav className="w-5/12 bg-linear-gray flex flex-col">
        <button
          className="bg-transparent cursor-pointer self-end p-3"
          onClick={() => toggleMenu(!showMenu)}
        >
          <IconContext.Provider
            value={{
              size: "1.5rem",
              className:
                "text-accent-color hover:text-accent-color transition-colors duration-300 ease-in-out",
            }}
          >
            <GrClose />
          </IconContext.Provider>
        </button>
        <a
          onClick={() => toggleMenu(!showMenu)}
          href="#home"
          className="ps-4 py-2 hover:bg-primary-color hover:text-bg-color hover:ts-1"
        >
          INICIO
        </a>
        <a
          onClick={() => toggleMenu(!showMenu)}
          href="#about"
          className="ps-4 py-2 hover:bg-primary-color hover:text-bg-color hover:ts-1"
        >
          ACERCA
        </a>
        <a
          onClick={() => toggleMenu(!showMenu)}
          href="#portfolio"
          className="ps-4 py-2 hover:bg-primary-color hover:text-bg-color hover:ts-1"
        >
          PORTAFOLIO
        </a>
        <a
          onClick={() => toggleMenu(!showMenu)}
          href="#services"
          className="ps-4 py-2 hover:bg-primary-color hover:text-bg-color hover:shadow-ts-1"
        >
          SERVICIOS
        </a>
        <a
          onClick={() => toggleMenu(!showMenu)}
          href="#skills"
          className="ps-4 py-2 hover:bg-primary-color hover:text-bg-color hover:shadow-ts-1"
        >
          HABILIDADES
        </a>
        <a
          onClick={() => toggleMenu(!showMenu)}
          href="#contact"
          className="ps-4 py-2 hover:bg-primary-color hover:text-bg-color hover:ts-1"
        >
          CONTACTO
        </a>
      </nav>
    </div>
  );
};

export default Offcanvas;
