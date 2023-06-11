import React from "react";
import ServiceCarousel from "./ServiceCarousel";
import Benefits from "./Benefits";
import { Benefits as B, Services as S } from "../../vite-env";

interface Props {
  services: {
    h2_1: string;
    h2_2: string;
    services: S[];
    benefits: B[];
  };
}

const Services: React.FC<Props> = ({ services }) => {
  return (
    <section
      className="min-h-screen relative bg-bg-color pb-4 sm:pb-8"
      id="services"
    >
      <h2 className="absolute w-full text-2xl ts-1 text-center my-4 font-semibold lg:text-4xl lg:my-8 z-10 text-white">
        {services.h2_1}
      </h2>
      <ServiceCarousel services={services.services} />
      <h3
        className="text-2xl text-center my-4 lg:my-8 font-medium lg:text-4xl"
        id="skills"
      >
        {services.h2_2}
      </h3>
      <div className="container mx-auto px-2 sm:px-4 flex gap-10 flex-wrap justify-evenly items-center">
        {services.benefits.map((benefit, i) => (
          <Benefits key={i} benefit={benefit} />
        ))}
      </div>
    </section>
  );
};

export default Services;
