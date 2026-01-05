import React from "react";
import { useLanguageStore } from "src/hooks/useLanguageStore";
import es from "src/assets/locales/es.json";
import en from "src/assets/locales/en.json";
import MainLayout from "src/components/layouts/MainLayout";

type Benefit = {
  title: string;
  description: string;
};

interface Props {
  benefit: Benefit;
}

const SkillItem: React.FC<Props> = ({ benefit }) => {
  return (
    <div className="p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition">
      <h4 className="text-lg font-semibold mb-2">{benefit.title}</h4>
      <p className="text-neutral-600 text-sm">{benefit.description}</p>
    </div>
  );
};

const Skills: React.FC = () => {
  const { lang } = useLanguageStore();
  const r = {
    es,
    en,
  };

  return (
    <MainLayout className="h-auto py-16 bg-white bg-radial from-app-third/10 to-app-soft to-95%">
      {/* <h3
        className="text-2xl text-center my-4 lg:my-8 font-medium lg:text-4xl"
        id="skills"
      >
        {r[lang].services.h2_2}
      </h3> */}
      <div className="container mx-auto px-2 sm:px-4 flex gap-10 flex-wrap justify-evenly items-center">
        {r[lang].services.benefits.map((benefit, i) => (
          <SkillItem key={i} benefit={benefit} />
        ))}
      </div>
    </MainLayout>
  );
};

export default Skills;
