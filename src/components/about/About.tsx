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
    <section
      className="min-h-screen bg-white pb-4 md:px-4 flex items-center"
      id="about"
    >
      <article className="container mx-auto">
        <h2 className="text-2xl ts-1 text-center mt-4 font-semibold lg:text-4xl lg:mt-8">
          {about.h2}
        </h2>
        <div className="mt-6 flex flex-col lg:flex-row lg:mt-8 lg:pe-4">
          <section className="block mx-auto w-1/2 lg:mx-0 lg:h-1/3 lg:mt-8 lg:order-1 lg:w-5/12">
            <img
              src="https://res.cloudinary.com/dokbqdk6g/image/upload/v1685652797/josuecuevas-com/me_xcf38k.png"
              alt="Me"
              className="lg:max-w-md xl:max-w-sm lg:mx-auto"
            />
            <div className="hidden lg:block">
              <h3 className="mt-6 text-lg font-bold">{about.h3_1}</h3>
              <div className="flex flex-wrap gap-3 mt-7 justify-center ">
                {icons.map((icon, i) => (
                  <img
                    src={icon.url}
                    alt={icon.alt}
                    className="w-8 h-8"
                    key={i}
                  />
                ))}
              </div>
            </div>
          </section>

          <div className="ps-2 lg:w-7/12 sm:px-4">
            <p className="mt-7">{about.aboutMeText_1}</p>
            <p className="mt-6">{about.aboutMeText_2}</p>
            <blockquote className="font-medium mt-6 ts-1 text-end pe-2 text-sm">
              {about.blockQuote}
            </blockquote>
            <hr className="w-1/2 my-8 mx-auto border-primary-color" />
            <div className="lg:hidden">
              <h3 className="mt-6 text-lg font-semibold">{about.h3_1}</h3>
              <div className="flex flex-wrap gap-3 mt-7 justify-center ">
                {icons.map((icon, i) => (
                  <img
                    src={icon.url}
                    alt={icon.alt}
                    className="w-8 h-8"
                    key={i}
                  />
                ))}
              </div>
            </div>
            <h3 className="mt-6 text-lg font-semibold">{about.h3_2}</h3>
            <ul className="flex flex-wrap list-disc list-inside mt-4">
              {about.softSkills.map((sS, i) => (
                <li className="w-full sm:w-1/2" key={i}>
                  {sS}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
};

export default About;
