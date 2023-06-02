import React from "react";
import PortfolioAccordion from "./PortfolioAccordion";
import { TechUsed } from "../../vite-env";

interface Props {
  project: {
    image: string;
    title: string;
    dateProject: string;
    description: string;
    urlProject: string;
    techUsed: TechUsed[];
  };
}

const PortfolioCard: React.FC<Props> = ({ project }) => {
  return (
    <div className="block rounded-lg bg-bg-color shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] max-w-xs  hover:scale-105 transition-all duration-300 ease-in-out">
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat"
        data-te-ripple-init
        data-te-ripple-color="light"
      >
        <img className="rounded-t-lg" src={project.image} alt="" />
        <a href={project.urlProject} target="_blank" rel="noopener">
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
        </a>
      </div>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 ">
          {project.title}
        </h5>
        <p className="text-extra-gray font-semibold">{project.dateProject}</p>
        <p className="mb-4 text-base text-neutral-600">{project.description}</p>
        <a
          className="flex select-none items-center gap-2 rounded-lg py-2 pe-4 text-center align-middle font-sans text-xs font-bold uppercase text-accent-color transition-all hover:bg-accent-color/10 active:bg-accent-color/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          data-ripple-dark="true"
          href={project.urlProject}
          target="_blank"
          rel="noopener"
        >
          Ver Proyecto
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            ></path>
          </svg>
        </a>
        <div className="mt-6">
          <PortfolioAccordion techUsed={project.techUsed} />
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
