import React from "react";
import es from "src/assets/locales/es.json";
import en from "src/assets/locales/en.json";
import { useLanguageStore } from "src/hooks/useLanguageStore";
import routes from "src/routes/router";

const r = {
  es,
  en,
};

const Footer: React.FC = () => {
  const { lang } = useLanguageStore();
  return (
    <footer className="bg-app-neutral flex flex-col gap-12 py-9 px-2 sm:px-4 lg:flex-row lg:justify-center lg:items-center">
      <img
        src={r[lang].footer.logo_h}
        alt="Logo"
        className="w-96 mx-auto lg:hidden"
      />
      <img
        src={r[lang].footer.logo_v}
        alt="Logo"
        className="hidden lg:block lg:w-1/6"
      />
      <div>
        <p className="text-white">{r[lang].footer.text_1}</p>
        <p className="text-white mt-4">{r[lang].footer.text_2}</p>
      </div>
      <nav className="flex flex-col gap-4 lg:w-1/3">
        {routes.map((el, i) => (
          <a
            href={el.path}
            key={i}
            className="text-white font-light text-sm hover:text-app-first transition-colors duration-300 ease-in-out ts-1 w-20"
          >
            {el.label[lang]}
          </a>
        ))}
      </nav>
    </footer>
  );
};

export default Footer;
