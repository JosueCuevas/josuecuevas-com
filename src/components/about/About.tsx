import React from "react";
import { icons } from "../../assets/icons.json";

const About: React.FC = () => {
  return (
    <section className="min-h-screen bg-white pb-4 md:px-4" id="about">
      <article className="container mx-auto">
        <h2 className="text-2xl ts-1 text-center mt-4 font-semibold lg:text-4xl lg:mt-8">
          Acerca de mi
        </h2>
        <div className="mt-6 flex flex-col lg:flex-row lg:mt-8 lg:pe-4">
          <section className="block mx-auto w-1/2 lg:mx-0 lg:h-1/3 lg:mt-8 lg:order-1 lg:w-5/12">
            <img
              src="https://res.cloudinary.com/dokbqdk6g/image/upload/v1685652797/josuecuevas-com/me_xcf38k.png"
              alt="Me"
              className="lg:max-w-md xl:max-w-sm lg:mx-auto"
            />
            <div className="hidden lg:block">
              <h3 className="mt-6 text-lg font-bold">
                Habilidades T&eacute;cnicas
              </h3>
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
            <p className="mt-7">
              Hola, Soy Josué Cuevas un apasionado desarrollador web dedicado a
              crear negocios digitales excepcionales. Con más de 1 año de
              experiencia de manera independiente. Creo que la comunicación y la
              colaboración efectivas son primordiales, y prospero en entornos
              dinámicos donde puedo contribuir con mi experiencia técnica
              mientras colaboro estrechamente con clientes, diseñadores y
              compañeros desarrolladores.
            </p>
            <p className="mt-6">
              Ya sea que se trate de desarrollar experiencias de front-end
              receptivas, optimizar el rendimiento o diseñar soluciones de
              back-end escalables, abordo cada proyecto con entusiasmo y
              dedicación. Si estás buscando un desarrollador web confiable y
              orientado a los detalles que se comprometa a brindar excelencia,
              me encantaría saber de ti.
            </p>
            <blockquote className="font-medium mt-6 ts-1 text-end pe-2 text-sm">
              Creando Negocios Digitales
            </blockquote>
            <hr className="w-1/2 my-8 mx-auto border-primary-color" />
            <div className="lg:hidden">
              <h3 className="mt-6 text-lg font-semibold">
                Habilidades T&eacute;cnicas
              </h3>
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
            <h3 className="mt-6 text-lg font-semibold">Habilidades Blandas</h3>
            <ul className="flex flex-wrap list-disc list-inside mt-4">
              <li className="w-full sm:w-1/2">Comunicaci&oacute;n</li>
              <li className="w-full sm:w-1/2">Solucionar Problemas</li>
              <li className="w-full sm:w-1/2">Adaptabilidad</li>
              <li className="w-full sm:w-1/2">Flexibilidad</li>
              <li className="w-full sm:w-1/2">Colaboraci&oacute;n</li>
              <li className="w-full sm:w-1/2">Servicio al cliente</li>
              <li className="w-full sm:w-1/2">Pensamiento anal&iacute;tico</li>
              <li className="w-full sm:w-1/2">Creatividad</li>
              <li className="w-full sm:w-1/2">Aprendizaje continuo</li>
              <li className="w-full sm:w-1/2">
                Manejo y organizaci&oacute;n de tiempos
              </li>
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
};

export default About;
