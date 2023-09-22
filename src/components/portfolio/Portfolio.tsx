import React from "react";
import PortfolioCard from "../portfolio-card/PortfolioCard";

type TechIcons = {
  url: string;
  alt: string;
};

type Projects = {
  image: string;
  title: string;
  dateProject: string;
  description: string;
  urlProject: string;
  techUsed: TechIcons[];
};

interface Props {
  portfolio: {
    h2: string;
    projects: Projects[];
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
      <div className="container mx-auto">
        <h2 className="text-2xl ts-1 text-center mt-4 font-semibold lg:text-4xl lg:mt-8">
          {portfolio.h2}
        </h2>
        <div className="flex flex-wrap mt-9  justify-start items-start w-full">
          {portfolio.projects.map((project, i) => (
            <PortfolioCard
              project={project}
              key={i}
              text_1={portfolio.text_1}
              text_2={portfolio.text_2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
