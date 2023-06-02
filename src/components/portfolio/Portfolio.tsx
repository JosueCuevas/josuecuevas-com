import React from "react";
import PortfolioCard from "../portfolio-card/PortfolioCard";
import { projects } from "../../assets/portfolio.json";

const Portfolio: React.FC = () => {
  return (
    <section
      className="min-h-screen bg-gradient-to-b from-bg-color to-linear-gray to-90% px-2 pb-4 sm:pb-8 sm:px-4"
      id="portfolio"
    >
      <h2 className="text-2xl ts-1 text-center mt-4 font-semibold lg:text-4xl lg:mt-8">
        Mis Proyectos
      </h2>
      <div className="flex flex-wrap mt-9 gap-11 justify-evenly">
        {projects.map((project, i) => (
          <PortfolioCard project={project} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
