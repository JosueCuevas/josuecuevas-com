import React, { useState, useEffect } from "react";

import { services } from "../../assets/services.json";

const ServiceCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides] = useState(services.length);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      const nextSlide = (currentSlide + 1) % totalSlides;
      setCurrentSlide(nextSlide);
    }, 8000); // Slide every 8 seconds

    return () => {
      clearInterval(slideInterval);
    };
  }, [currentSlide, totalSlides]);

  return (
    <div id="carouselExampleControls" className="relative">
      <div className="w-full overflow-hidden after:clear-both after:block after:content-['']">
        {/* Carousel slides */}

        <section
          className="relative min-h-screen"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            transition: "transform 600ms ease-in-out",
          }}
        >
          {services.map((service, i) => (
            <div
              className={`w-full absolute`}
              style={{ transform: `translateX(${i}00%)` }}
              key={i}
            >
              <section
                className={`min-h-screen bg-no-repeat bg-center bg-cover bg-fixed relative`}
                style={{
                  backgroundImage: `${service.bg_image}`,
                }}
              >
                <article className="bg-bg-opacity absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-center items-center  text-white">
                  <h3 className="text-2xl sm:text-4xl font-bold text-center ts-1 text-accent-color">
                    {service.title}
                  </h3>
                  <p className="w-8/12 text-center mt-6 mx-auto ts-1 text-linear-gray font-semibold">
                    {service.description}
                  </p>
                </article>
              </section>
            </div>
          ))}
        </section>
      </div>
      {/* Carousel controls */}
      <button
        className="absolute bottom-0 left-0 top-0 z-[11] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        onClick={() => {
          // Go to the previous slide
          const prevSlide = (currentSlide - 1 + totalSlides) % totalSlides;
          setCurrentSlide(prevSlide);
        }}
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Previous
        </span>
      </button>

      <button
        className="absolute z-[11] bottom-0 right-0 top-0 flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        onClick={() => {
          // Go to the next slide
          const nextSlide = (currentSlide + 1) % totalSlides;
          setCurrentSlide(nextSlide);
        }}
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Next
        </span>
      </button>
    </div>
  );
};

export default ServiceCarousel;
