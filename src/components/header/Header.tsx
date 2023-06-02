import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IconContext } from "react-icons";
import Offcanvas from "../offcanvas/Offcanvas";

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState(true);
  const toggleMenu = (s: boolean) => {
    setShowMenu(s);
  };
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header
        className={`fixed min-w-full z-50 ${
          scrollY > 100 ? "bg-bg-dark" : "bg-transparent"
        }`}
      >
        <section className="flex container mx-auto py-2 justify-between items-center px-2 sm:px-4">
          <a href="#home" className="w-3/6 sm:w-1/3 lg:w-1/5">
            <img
              src="https://res.cloudinary.com/dokbqdk6g/image/upload/v1685652796/josuecuevas-com/Logo_swhpst.svg"
              alt="Logo"
            />
          </a>
          <button
            className="bg-transparent cursor-pointer lg:hidden"
            onClick={() => toggleMenu(!showMenu)}
          >
            <IconContext.Provider
              value={{
                size: "2rem",
                className:
                  "text-bg-color hover:text-accent-color transition-colors duration-300 ease-in-out",
              }}
            >
              <FiMenu />
            </IconContext.Provider>
          </button>
          <nav className="hidden lg:flex gap-4">
            <a
              href="#home"
              className="text-bg-color font-light text-sm hover:text-accent-color transition-colors duration-300 ease-in-out ts-1"
            >
              INICIO
            </a>
            <a
              href="#about"
              className="text-bg-color font-light text-sm hover:text-accent-color transition-colors duration-300 ease-in-out ts-1"
            >
              ACERCA
            </a>
            <a
              href="#portfolio"
              className="text-bg-color font-light  text-sm hover:text-accent-color transition-colors duration-300 ease-in-out ts-1"
            >
              PORTAFOLIO
            </a>
            <a
              href="#services"
              className="text-bg-color font-light text-sm hover:text-accent-color transition-colors duration-300 ease-in-out ts-1"
            >
              SERVICIOS
            </a>
            <a
              href="#skills"
              className="text-bg-color font-light text-sm hover:text-accent-color transition-colors duration-300 ease-in-out ts-1"
            >
              HABILIDADES
            </a>
            <a
              href="#contact"
              className="text-bg-color font-light text-sm hover:text-accent-color transition-colors duration-300 ease-in-out ts-1"
            >
              CONTACTO
            </a>
          </nav>
        </section>
      </header>
      <Offcanvas showMenu={showMenu} toggleMenu={toggleMenu} />
    </>
  );
};

export default Header;
