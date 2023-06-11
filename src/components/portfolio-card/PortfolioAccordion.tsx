import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { TechUsed } from "../../vite-env";

type IconProps = {
  id: number;
  open: number;
};

function Icon({ id, open }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

type Props = {
  techUsed: TechUsed[];
  text_2: string;
};

export default function PortfolioAccordion({ techUsed, text_2 }: Props) {
  const [open, setOpen] = useState(0);

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
      <AccordionHeader onClick={() => handleOpen(1)} className="text-sm">
        {text_2}
      </AccordionHeader>
      <AccordionBody>
        <div className="flex flex-wrap gap-3 mt-7 justify-center ">
          {techUsed.map((icon, i) => (
            <img src={icon.url} alt={icon.alt} className="w-8 h-8" key={i} />
          ))}
        </div>
      </AccordionBody>
    </Accordion>
  );
}
