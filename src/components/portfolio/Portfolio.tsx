import React from "react";
import PortfolioCard from "../portfolio-card/PortfolioCard";

type Projects = {
  image: string;
  title: string;
  dateProject: string;
  description: string;
  urlProject: string;
  techUsed: string[];
};

interface Props {
  portfolio: {
    h2: string;
    h3_1: string;
    h3_2: string;
    freelance_projects: Projects[];
    professional_projects: Projects[];
    text_1: string;
    text_2: string;
  };
}

const Portfolio: React.FC<Props> = ({ portfolio }) => {
  return (
    <section
      className="min-h-screen bg-gradient-to-b from-bg-color to-linear-gray to-90% px-2 pb-4 sm:pb-8 sm:px-4"
      id="portfolio"
    >
      <article className="container mx-auto">
        <h2 className="text-2xl ts-1 text-center mt-4 font-semibold lg:text-4xl lg:mt-8">
          {portfolio.h2}
        </h2>
        <div className="flex flex-col mt-9 w-full">
          <h3 className="font-semibold"> {portfolio.h3_1}</h3>
          {portfolio.professional_projects.map((project, i) => (
            <PortfolioCard
              project={project}
              key={project.title + i}
              text_1={portfolio.text_1}
              text_2={portfolio.text_2}
            />
          ))}
        </div>
        <div className="flex flex-col mt-9 w-full">
          <h3 className="font-semibold">{portfolio.h3_2}</h3>
          {portfolio.freelance_projects.map((project, i) => (
            <PortfolioCard
              project={project}
              key={project.title + i}
              text_1={portfolio.text_1}
              text_2={portfolio.text_2}
            />
          ))}
        </div>
      </article>
    </section>
  );
};

export default Portfolio;
