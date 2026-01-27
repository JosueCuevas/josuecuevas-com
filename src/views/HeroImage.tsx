import React, { useEffect, useMemo, useState } from "react";
import MainLayout from "../components/layouts/MainLayout";
import { useLanguageStore } from "src/hooks/useLanguageStore";
import es from "src/assets/locales/es.json";
import en from "src/assets/locales/en.json";

const r = { es, en };

const HeroImage: React.FC = () => {
  const { lang } = useLanguageStore();

  const words = useMemo(
    () =>
      lang === "es"
        ? [
            "buena!",
            "atractiva!",
            "rentable!",
            "agradable!",
            "segura!",
            "inteligente!",
            "perfecta!",
          ]
        : [
            "good!",
            "attractive!",
            "profitable!",
            "nice!",
            "safe!",
            "smart",
            "perfect!",
          ],
    [lang],
  );

  const [index, setIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipping(true);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setIsFlipping(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <MainLayout id="home" className="h-screen">
      <section className="h-full bg-[url(https://res.cloudinary.com/dokbqdk6g/image/upload/v1685644290/josuecuevas-com/images/hero-image_gvtzcu_arfi1x.webp)] bg-no-repeat bg-center bg-cover bg-fixed">
        <article className="bg-app-mask pt-12 h-full">
          <div className="h-full container mx-auto flex flex-col justify-center text-white md:justify-end md:pb-16 px-3">
            <h1 className="text-4xl font-bold text-center md:text-start leading-tight">
              {r[lang].heroImage.h1_1}
              <span className="text-app-first">{r[lang].heroImage.h1_2}</span>
              {r[lang].heroImage.h1_3}
              <span className="inline-block relative perspective">
                <span
                  className={`inline-block text-app-first transition-transform duration-300 ease-in-out
                    ${
                      isFlipping
                        ? "rotate-x-90 opacity-0"
                        : "rotate-x-0 opacity-100"
                    }
                  `}
                >
                  {words[index]}
                </span>
              </span>
            </h1>

            <p className="text-center font-semibold mt-12 md:mt-4 md:text-start">
              {r[lang].heroImage.p}
            </p>

            <div className="flex gap-4 mt-8 justify-center md:justify-start">
              <a
                className="bg-app-first p-2 rounded shadow-lg hover:scale-110 transition"
                href="#contact"
              >
                {r[lang].heroImage.b1}
              </a>
              <a
                className="bg-white text-app-neutral p-2 rounded font-semibold shadow-lg hover:scale-110 transition"
                href={r[lang].heroImage.cv}
              >
                {r[lang].heroImage.b2}
              </a>
            </div>
          </div>
        </article>
      </section>
    </MainLayout>
  );
};

export default HeroImage;
