import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-color flex flex-col gap-12 py-9 px-2 sm:px-4 lg:flex-row lg:justify-center lg:items-center">
      <img
        src="https://res.cloudinary.com/dokbqdk6g/image/upload/v1685652796/josuecuevas-com/Logo_swhpst.svg"
        alt="Logo"
        className="w-96 mx-auto lg:hidden"
      />
      <img
        src="https://res.cloudinary.com/dokbqdk6g/image/upload/v1685652796/josuecuevas-com/Logo-h_dtic3w.svg"
        alt="Logo"
        className="hidden lg:block"
      />
      <div>
        <p className="text-white">
          Gracias por tomar el tiempo de explorar mi portafolio. Seguro lo
          encontraste informativo e inspirador. Si tienes alguna duda, pregunta
          o potencial colaboración estaré encantado de ayudarte.{" "}
        </p>
        <p className="text-white mt-4">
          Por favor no dudes en comunicarte utilizando la información
          proporcionada anteriormente. Gracias una vez más, y espero saber de ti
          pronto.
        </p>
      </div>
      <nav className="flex flex-col gap-4 lg:w-1/3">
        <a
          href="#home"
          className="text-bg-color font-light text-sm hover:text-accent-color transition-colors duration-300 ease-in-out ts-1 w-20"
        >
          INICIO
        </a>
        <a
          href="#about"
          className="text-bg-color font-light text-sm hover:text-accent-color transition-colors duration-300 ease-in-out ts-1 w-20"
        >
          ACERCA
        </a>
        <a
          href="#portfolio"
          className="text-bg-color font-light  text-sm hover:text-accent-color transition-colors duration-300 ease-in-out ts-1 w-20"
        >
          PORTAFOLIO
        </a>
        <a
          href="#services"
          className="text-bg-color font-light text-sm hover:text-accent-color transition-colors duration-300 ease-in-out ts-1 w-20"
        >
          SERVICIOS
        </a>
        <a
          href="#skills"
          className="text-bg-color font-light text-sm hover:text-accent-color transition-colors duration-300 ease-in-out ts-1 w-20"
        >
          HABILIDADES
        </a>
        <a
          href="#contact"
          className="text-bg-color font-light text-sm hover:text-accent-color transition-colors duration-300 ease-in-out ts-1 w-20"
        >
          CONTACTO
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
