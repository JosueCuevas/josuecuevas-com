import { FaHome, FaInfoCircle } from "react-icons/fa";
import {
  MdBusinessCenter,
  MdConnectWithoutContact,
  MdOutlineDesignServices,
} from "react-icons/md";
import { SiCapacitor } from "react-icons/si";

export default [
  {
    label: {
      en: "Home",
      es: "Inicio",
    },
    path: "#home",
    icon: FaHome({}),
  },
  {
    label: {
      en: "About",
      es: "Acerca",
    },
    path: "#about",
    icon: FaInfoCircle({}),
  },
  {
    label: {
      en: "Portfolio",
      es: "Proyectos",
    },
    path: "#portfolio",
    icon: MdBusinessCenter({}),
  },
  {
    label: {
      en: "Services",
      es: "Servicios",
    },
    path: "#services",
    icon: MdOutlineDesignServices({}),
  },
  {
    label: {
      en: "Skills",
      es: "Habilidades",
    },
    path: "#skills",
    icon: SiCapacitor({}),
  },
  {
    label: {
      en: "Contact",
      es: "Contacto",
    },
    path: "#contact",
    icon: MdConnectWithoutContact({}),
  },
];
