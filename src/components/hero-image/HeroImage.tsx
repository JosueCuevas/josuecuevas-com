import React, { useEffect, useMemo, useState, useContext } from "react";
import { LangContext } from "../../context/LangContext";

interface Props {
  heroImage: {
    h1_1: string;
    h1_2: string;
    h1_3: string;
    p: string;
    b1: string;
    b2: string;
    cv: string;
  };
}

const HeroImage: React.FC<Props> = ({ heroImage }) => {
  const { lang } = useContext(LangContext);
  const words = useMemo(
    () =>
      lang === "es"
        ? ["buena!", "agradable!", "segura!", "perfecta!"]
        : ["good!", "nice!", "safe!", "perfect!"],
    [lang]
  );

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 30; // Velocidad de escritura en milisegundos
  const deletingSpeed = 60; // Velocidad de borrado en milisegundos

  useEffect(() => {
    if (currentWordIndex > 3) setCurrentWordIndex(0);
    const fullWord = words[currentWordIndex];

    if (!isDeleting) {
      if (currentWord === fullWord) {
        setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      } else {
        if (!fullWord) return;
        setTimeout(() => {
          const substring = fullWord.substring(0, currentWord.length + 1);
          setCurrentWord(substring);
        }, typingSpeed);
      }
    } else {
      setTimeout(() => {
        if (currentWord.length === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => prev + 1);
          return;
        }
        const substring = currentWord.substring(0, currentWord.length - 1);
        setCurrentWord(substring);
      }, deletingSpeed);
    }
  }, [currentWord, currentWordIndex, isDeleting, words]);
  return (
    <section
      className="min-h-screen bg-hero-img bg-no-repeat bg-center bg-cover bg-fixed"
      id="home"
    >
      <article className="bg-bg-opacity pt-12">
        <div className="min-h-screen container mx-auto flex flex-col justify-center text-white md:px-4 md:justify-end md:pb-16">
          <h1 className="text-4xl font-bold text-center md:text-start ts-1 px-2">
            {heroImage.h1_1}
            <span className="text-4xl text-accent-color">{heroImage.h1_2}</span>
            {heroImage.h1_3}
            <span className="text-4xl text-accent-color changing-word">
              {currentWord}
            </span>
          </h1>
          <p className="text-center px-2 font-semibold mt-12 md:mt-4 md:text-start ts-1">
            {heroImage.p}
          </p>
          <div className="flex justify-between px-2 gap-2 w-12/12 mx-auto mt-12 sm:w-2/5 md:justify-start md:gap-4 md:mx-0 md:mt-5">
            <a
              className="bg-accent-color p-2 rounded shadow-lg hover:scale-110 transition-all duration-300 ease-in-out flex justify-center items-center"
              href="#contact"
            >
              {heroImage.b1}
            </a>
            <a
              className="bg-white text-neutral-color p-2 rounded font-semibold shadow-lg hover:scale-110 transition-all duration-300 ease-in-out w-20 text-center"
              href={heroImage.cv}
            >
              {heroImage.b2}
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};

export default HeroImage;
