import React from "react";
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
import es from "src/assets/locales/es.json";
import en from "src/assets/locales/en.json";
import { useLanguageStore } from "src/hooks/useLanguageStore";
import ContactForm from "src/components/organisms/forms/ContactForm";
import MainLayout from "src/components/layouts/MainLayout";

const r = {
  es,
  en,
};

const Contact: React.FC = () => {
  const { lang } = useLanguageStore();
  return (
    <MainLayout className="pb-4 md:px-4 container mx-auto" id="contact">
      <h2 className="text-2xl ts-1 text-center mt-4 font-semibold lg:text-4xl lg:mt-8">
        {r[lang].contact.h1}
      </h2>
      <div className="px-2 pt-9 lg:flex">
        <section className="lg:w-1/2 lg:mx-auto">
          <ContactForm
            comments={r[lang].contact.form.comments}
            name={r[lang].contact.form.name}
            submit={r[lang].contact.form.submit}
            placeholders={r[lang].contact.placeholders}
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
                className="flex justify-center items-center  text-primary-color font-semibold hover:text-orange-700 hover:scale-150 transition-transform duration-300 ease-in-out"
                target="_blank"
                rel="noopener"
              >
                <BsGithub />
              </a>
              <a
                href="https://twitter.com/josuecuevs"
                className="flex justify-center items-center  text-primary-color font-semibold hover:text-orange-700 hover:scale-150 transition-transform duration-300 ease-in-out"
                target="_blank"
                rel="noopener"
              >
                <BsTwitter />
              </a>
              <a
                href="https://web.facebook.com/JosueCuevas.dev"
                className="flex justify-center items-center  text-primary-color font-semibold hover:text-orange-700 hover:scale-150 transition-transform duration-300 ease-in-out"
                target="_blank"
                rel="noopener"
              >
                <BsFacebook />
              </a>
              <a
                href="https://www.linkedin.com/in/josuecuevas"
                className="flex justify-center items-center  text-primary-color font-semibold hover:text-orange-700 hover:scale-150 transition-transform duration-300 ease-in-out"
                target="_blank"
                rel="noopener"
              >
                <BsLinkedin />
              </a>
              <a
                href="https://t.me/josue_cuevas"
                className="flex justify-center items-center  text-primary-color font-semibold hover:text-orange-700 hover:scale-150 transition-transform duration-300 ease-in-out"
                target="_blank"
                rel="noopener"
              >
                <BsTelegram />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=9513485629"
                className="flex justify-center items-center  text-primary-color font-semibold hover:text-orange-700 hover:scale-150 transition-transform duration-300 ease-in-out"
                target="_blank"
                rel="noopener"
              >
                <BsWhatsapp />
              </a>
            </div>
          </IconContext.Provider>
        </section>
      </div>
    </MainLayout>
  );
};

export default Contact;
