import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
// assets
import es from "src/assets/locales/es.json";
import en from "src/assets/locales/en.json";
// components
import Button from "src/components/ui/Button";
import Sidebar from "src/components/ui/Sidebar";
// hooks
import { useLanguageStore } from "src/hooks/useLanguageStore";
//routes
import routes from "src/routes/router";

const r = {
  es,
  en,
};

const Header: React.FC = () => {
  const { lang, handleLang } = useLanguageStore();
  const [showMenu, setShowMenu] = useState(false);

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
          scrollY > 100 ? "bg-app-dark" : "bg-transparent"
        }`}
      >
        <section className="flex container mx-auto py-2 justify-between items-center px-2 sm:px-4">
          <a href="#home" className="w-3/6 sm:w-1/3 lg:w-1/5">
            <img src={r[lang].header.logo} alt="Logo" />
          </a>
          <div className="flex gap-4 items-center">
            <Button
              className="w-8 h-8 p-0 bg-transparent hover:bg-transparent"
              onClick={() => handleLang(lang === "es" ? "en" : "es")}
            >
              <img
                src={r[lang].header.flag}
                className="h-full w-full object-fit"
                alt="Change Language"
              />
            </Button>
            <Button
              className="lg:hidden text-xl"
              variant="icon"
              onClick={() => setShowMenu((prev) => !prev)}
            >
              <FiMenu className="text-bg-white hover:text-app-first transition-colors duration-300 ease-in-out cursor-pointer" />
            </Button>
            <nav className="hidden lg:flex gap-4">
              {routes.map((el, i) => (
                <a
                  key={i}
                  href={el.path}
                  className="text-white font-light text-sm hover:text-app-first transition-colors duration-300 ease-in-out ts-1 uppercase"
                >
                  {el.label[lang]}
                </a>
              ))}
            </nav>
          </div>
        </section>
      </header>
      <Sidebar
        toggle={() => setShowMenu((prev) => !prev)}
        className={`translate-x-full duration-1000 ${
          showMenu && "translate-x-0"
        }`}
      />
    </>
  );
};

export default Header;
