import React from "react";
import ServiceCarousel from "./ServiceCarousel";
import Benefits from "./Benefits";
import { benefits } from "../../assets/services.json";

const Services: React.FC = () => {
  return (
    <section
      className="min-h-screen relative bg-bg-color pb-4 sm:pb-8"
      id="services"
    >
      <h2 className="absolute w-full text-2xl ts-1 text-center my-4 font-semibold lg:text-4xl lg:my-8 z-10 text-white">
        ¿Qué te ofrezco?
      </h2>
      <ServiceCarousel />
      <h3
        className="text-2xl text-center my-4 lg:my-8 font-medium lg:text-4xl"
        id="skills"
      >
        Eligiendo mis servicios puedes esperar
      </h3>
      <div className="container mx-auto px-2 sm:px-4 flex gap-10 flex-wrap justify-evenly items-center">
        {benefits.map((benefit, i) => (
          <Benefits key={i} benefit={benefit} />
        ))}
      </div>
    </section>
  );
};

export default Services;
