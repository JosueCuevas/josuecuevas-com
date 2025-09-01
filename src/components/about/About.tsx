import React from "react";
import { icons } from "../../assets/icons.json";

interface Props {
  about: {
    h2: string;
    h3_1: string;
    aboutMeText_1: string;
    aboutMeText_2: string;
    blockQuote: string;
    h3_2: string;
    softSkills: string[];
  };
}

const About: React.FC<Props> = ({ about }) => {
  return (
    <section className="min-h-screen bg-white md:px-4 flex" id="about">
      <article className="container mx-auto">
        <h2 className="text-2xl md:text-3xl text-center mt-4 font-semibold lg:text-4xl lg:mt-8">
          {about.h2}
        </h2>
        <div className="mt-6 flex flex-col lg:flex-row lg:mt-8 lg:justify-between lg:items-start xl:items-end">
          <section className="mx-auto w-1/2 lg:mx-0 lg:order-1 lg:w-1/4">
            <img
              src="https://res.cloudinary.com/de2xaf9jy/image/upload/v1756700952/josuecuevas.com/New-profile-photo_g1st7g.png"
              alt="Me"
              className="lg:mt-6 xl:mt-0 rounded-full"
            />
          </section>
          <section className="lg:w-8/12 px-4">
            <p className="mt-7">{about.aboutMeText_1}</p>
            <p className="mt-6">{about.aboutMeText_2}</p>
            <blockquote className="font-medium mt-6 text-end pe-2 text-sm">
              {about.blockQuote}
            </blockquote>
            <hr className="w-1/2 my-8 mx-auto border-primary-color" />
          </section>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start px-4">
          <section className="lg:order-1">
            <h3 className="mt-8 text-lg font-semibold">{about.h3_1}</h3>
            <article className="flex flex-wrap gap-3 mt-7 justify-center ">
              {icons.map((icon, i) => (
                <img
                  src={icon.url}
                  alt={icon.alt}
                  className="w-8 h-8"
                  key={i}
                />
              ))}
            </article>
          </section>
          <section>
            <h3 className="mt-8 text-lg font-semibold">{about.h3_2}</h3>
            <ul className="flex flex-wrap list-disc list-inside mt-4">
              {about.softSkills.map((sS, i) => (
                <li className="w-full sm:w-1/2" key={i}>
                  {sS}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </article>
    </section>
  );
};

export default About;
