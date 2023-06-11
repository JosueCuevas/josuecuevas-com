import React, { useEffect, useState, useContext } from "react";
import { FiMenu } from "react-icons/fi";
import { IconContext } from "react-icons";
import Offcanvas from "../offcanvas/Offcanvas";
import { Nav } from "../../vite-env";
import { LangContext } from "../../context/LangContext";

interface Props {
  header: {
    logo: string;
    nav: Nav[];
    flag: string;
  };
}

const Header: React.FC<Props> = ({ header }) => {
  const { lang, handleLang } = useContext(LangContext);
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
            <img src={header.logo} alt="Logo" />
          </a>
          <div className="flex gap-4 items-center">
            <button
              className="w-8 h-8"
              onClick={() => handleLang(lang === "es" ? "en" : "es")}
            >
              <img src={header.flag} alt="Change Language" />
            </button>
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
              {header.nav.map((el, i) => (
                <a
                  key={i}
                  href={el.href}
                  className="text-bg-color font-light text-sm hover:text-accent-color transition-colors duration-300 ease-in-out ts-1"
                >
                  {el.link}
                </a>
              ))}
            </nav>
          </div>
        </section>
      </header>
      <Offcanvas showMenu={showMenu} toggleMenu={toggleMenu} nav={header.nav} />
    </>
  );
};

export default Header;
