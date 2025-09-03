import React from "react";
import PortfolioAccordion from "./PortfolioAccordion";

interface Props {
  project: {
    image: string;
    title: string;
    dateProject: string;
    description: string;
    urlProject: string;
    techUsed: string[];
  };
  text_1: string;
  text_2: string;
}

const PortfolioCard: React.FC<Props> = ({ project, text_1, text_2 }) => {
  return (
    <section className="w-full py-4 px-2">
      <div className="rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:scale-105 transition-all ease-in-out duration-300">
        <details className="group">
          <summary className="relative overflow-hidden max-h-40 flex justify-center items-center group cursor-pointer rounded-t-lg">
            <img
              className="rounded-t-lg object-cover group-hover:blur-sm transition duration-300 ease-in-out"
              src={project.image}
              alt={project.title}
            />
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[#222222e2] bg-fixed transition duration-300 ease-in-out flex items-center justify-start">
              <a
                href={project.urlProject}
                rel="noopener"
                target="_blank"
                className="text-white font-semibold text-lg lg:text-2xl px-4"
              >
                {project.title}{" "}
                <span className="font-light">({project.dateProject})</span>
              </a>
            </div>
          </summary>
          <div className="p-6 flex flex-col justify-between gap-y-2">
            <section>
              <p className="mb-4 text-base text-neutral-600">
                {project.description}
              </p>
            </section>
            <section>
              <a
                className="flex select-none items-center gap-2 rounded-lg py-2 pe-4 text-center align-middle font-sans text-xs font-bold uppercase text-accent-color transition-all hover:bg-accent-color/10 active:bg-accent-color/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-dark="true"
                href={project.urlProject}
                target="_blank"
                rel="noopener"
              >
                {text_1}
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
              <PortfolioAccordion techUsed={project.techUsed} text_2={text_2} />
            </section>
          </div>
        </details>
      </div>
    </section>
  );
};

export default PortfolioCard;
