import React from "react";
import Timeline from "src/components/organisms/Timeline";
import es from "src/assets/locales/es.json";
import en from "src/assets/locales/en.json";
import { useLanguageStore } from "src/hooks/useLanguageStore";
import MainLayout from "src/components/layouts/MainLayout";

const r = {
  es,
  en,
};

const Portfolio: React.FC = () => {
  const { lang } = useLanguageStore();
  return (
    <MainLayout className="md:px-4 container mx-auto py-16 h-full">
      <h2 className="text-2xl ts-1 text-center mt-4 font-semibold lg:text-4xl lg:mt-8">
        {r[lang].portfolio.h2}
      </h2>
      <h3 className="font-semibold mt-10">{r[lang].portfolio.h3_1}</h3>
      <div className="mt-6">
        {r[lang].portfolio.professional_projects.map((project, i) => (
          <Timeline
            key={project.title + i}
            project={project}
            text_1={r[lang].portfolio.text_1}
          />
        ))}
      </div>
      <h3 className="font-semibold mt-14">{r[lang].portfolio.h3_2}</h3>
      <div className="mt-6">
        {r[lang].portfolio.freelance_projects.map((project, i) => (
          <Timeline
            key={project.title + i}
            project={project}
            text_1={r[lang].portfolio.text_1}
          />
        ))}
      </div>
    </MainLayout>
  );
};

export default Portfolio;
