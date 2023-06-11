import React, { createContext, useState } from "react";

type LangState = "es" | "en";

type LangContext = {
  lang: "es" | "en";
  handleLang: (l: LangState) => void;
};

type Props = { children: JSX.Element };

export const LangContext = createContext<LangContext>({
  lang: "es",
  handleLang: () => {
    return;
  },
});

const LangProvider: React.FC<Props> = ({ children }) => {
  const [lang, setLang] = useState<LangState>("es");

  const handleLang = (l: LangState) => {
    setLang(l);
  };

  return (
    <LangContext.Provider value={{ handleLang, lang }}>
      {children}
    </LangContext.Provider>
  );
};

export default LangProvider;
