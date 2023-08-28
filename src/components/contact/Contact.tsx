import React from "react";
import ContactForm from "./ContactForm";
import { FiMail } from "react-icons/fi";
import {
  BsFacebook,
  BsFillTelephoneFill,
  BsGithub,
  BsLinkedin,
  BsTelegram,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";
import { IconContext } from "react-icons";
import { Form, Placeholders } from "../../interfaces/generalStructure";

interface Props {
  contact: {
    h1: string;
    form: Form;
    placeholders: Placeholders;
  };
}

const Contact: React.FC<Props> = ({ contact }) => {
  return (
    <section
      className="min-h-screen bg-white pb-4 md:px-4 bg-gradient-to-b from-bg-color to-linear-gray to-90% "
      id="contact"
    >
      <article className="container mx-auto">
        <h2 className="text-2xl ts-1 text-center mt-4 font-semibold lg:text-4xl lg:mt-8">
          {contact.h1}
        </h2>
        <div className="px-2 pt-9 lg:flex">
          <section className="lg:w-1/2">
            <ContactForm
              comments={contact.form.comments}
              name={contact.form.name}
              submit={contact.form.submit}
              placeholders={contact.placeholders}
            />
            <IconContext.Provider
              value={{ size: "32px", className: "w-6 sm :w-8" }}
            >
              <a
                href="mailto:hola@josuecuevas.com"
                className="mt-8 w-64 flex justify-start items-center gap-4 text-primary-color font-semibold hover:text-orange-700 hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <FiMail />
                <span>hola@josuecuevas.com</span>
              </a>
              <a
                href="tel:9513485629"
                className="mt-4 w-64 flex justify-start items-center gap-4 text-primary-color font-semibold hover:text-orange-700 hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <BsFillTelephoneFill />
                <span>+52 951 348 5629</span>
              </a>
              <div className="flex flex-wrap justify-between items-center mt-8">
                <a
                  href="https://github.com/josuecuevas"
                  className="  flex justify-center items-center  text-primary-color font-semibold hover:text-orange-700 hover:scale-150 transition-transform duration-300 ease-in-out"
                  target="_blank"
                  rel="noopener"
                >
                  <BsGithub />
                </a>
                <a
                  href="https://twitter.com/josuecuevs"
                  className="  flex justify-center items-center  text-primary-color font-semibold hover:text-orange-700 hover:scale-150 transition-transform duration-300 ease-in-out"
                  target="_blank"
                  rel="noopener"
                >
                  <BsTwitter />
                </a>
                <a
                  href="https://web.facebook.com/JosueCuevas.dev"
                  className="  flex justify-center items-center  text-primary-color font-semibold hover:text-orange-700 hover:scale-150 transition-transform duration-300 ease-in-out"
                  target="_blank"
                  rel="noopener"
                >
                  <BsFacebook />
                </a>
                <a
                  href="https://www.linkedin.com/in/josuecuevas"
                  className="  flex justify-center items-center  text-primary-color font-semibold hover:text-orange-700 hover:scale-150 transition-transform duration-300 ease-in-out"
                  target="_blank"
                  rel="noopener"
                >
                  <BsLinkedin />
                </a>
                <a
                  href="https://t.me/josue_cuevas"
                  className="  flex justify-center items-center  text-primary-color font-semibold hover:text-orange-700 hover:scale-150 transition-transform duration-300 ease-in-out"
                  target="_blank"
                  rel="noopener"
                >
                  <BsTelegram />
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=9513485629"
                  className="  flex justify-center items-center  text-primary-color font-semibold hover:text-orange-700 hover:scale-150 transition-transform duration-300 ease-in-out"
                  target="_blank"
                  rel="noopener"
                >
                  <BsWhatsapp />
                </a>
              </div>
            </IconContext.Provider>
          </section>
          <section className="hidden lg:flex lg:justify-center lg:items-center lg:w-1/2">
            <img
              src="https://res.cloudinary.com/dokbqdk6g/image/upload/v1685646366/josuecuevas-com/images/BusinessPeopleHandshaking_pjbilk.svg"
              alt="We made a deal"
            />
          </section>
        </div>
      </article>
    </section>
  );
};

export default Contact;
