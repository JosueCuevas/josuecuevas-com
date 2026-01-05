import React from "react";
import skills from "src/assets/icons.json";
import es from "src/assets/locales/es.json";
import en from "src/assets/locales/en.json";
import { useLanguageStore } from "src/hooks/useLanguageStore";
import MainLayout from "src/components/layouts/MainLayout";

const r = { es, en };

const About: React.FC = () => {
  const { lang } = useLanguageStore();
  const { hardSkills, techStack } = skills;

  return (
    <MainLayout className="h-full md:px-4 container mx-auto " id="about">
      <h2 className="text-2xl md:text-3xl text-center mt-4 font-semibold lg:text-4xl lg:mt-8">
        {r[lang].about.h2}
      </h2>

      <div className="mt-6 flex flex-col lg:flex-row lg:mt-8 lg:justify-between">
        <section className="mx-auto w-1/2 lg:mx-0 lg:order-1 lg:w-1/5">
          <img
            src="https://res.cloudinary.com/de2xaf9jy/image/upload/v1756747773/New-profile-photo_s7yuss.png"
            alt="Josué Cuevas"
            className="rounded-full"
          />
        </section>

        <section className="lg:w-7/12 px-4">
          <p className="mt-7">{r[lang].about.aboutMeText_1}</p>
          <p className="mt-6">{r[lang].about.aboutMeText_2}</p>

          <blockquote className="font-medium mt-6 text-end pe-2 text-sm">
            {r[lang].about.blockQuote}
          </blockquote>

          <hr className="w-1/2 my-8 mx-auto border-primary-color" />
        </section>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start px-4 gap-8">
        <section className="lg:w-7/12">
          <h3 className="mt-8 text-lg font-semibold">{r[lang].about.h3_1}</h3>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {Object.values(hardSkills).map((group) => (
              <div key={group.title}>
                <h4 className="font-medium mb-2">{group.title}</h4>
                <ul className="list-disc list-inside text-sm space-y-1">
                  {group.items.map((item: string) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="lg:w-4/12">
          <h3 className="mt-8 text-lg font-semibold">{r[lang].about.h3_2}</h3>

          <ul className="flex flex-wrap list-disc list-inside mt-4 text-sm">
            {r[lang].about.softSkills.map((skill, i) => (
              <li className="w-full sm:w-1/2" key={i}>
                {skill}
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Tech Stack Icons */}
      <section className="mt-14 px-4">
        <h3 className="text-center text-sm font-medium text-gray-500 mb-6">
          Tech Stack
        </h3>

        <div className="flex flex-wrap justify-center gap-6 py-8">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="group relative flex items-center justify-center"
            >
              <img
                src={tech.url}
                alt={tech.name}
                className="w-8 h-8 grayscale group-hover:grayscale-0 transition cursor-pointer"
              />

              {/* Tooltip */}
              <span className="absolute -bottom-7 opacity-0 group-hover:opacity-100 text-xs bg-black text-white px-2 py-1 rounded transition">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </section>
    </MainLayout>
  );
};

export default About;
