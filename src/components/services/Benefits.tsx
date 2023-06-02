import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

type Benefit = {
  title: string;
  description: string;
  imgUrl: string;
};

interface Props {
  benefit: Benefit;
}

const Benefits: React.FC<Props> = ({ benefit }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div
      className={`cursor-pointer transition-transform duration-700 card `}
      onClick={handleClick}
      style={{
        transformStyle: "preserve-3d",
        transform: `${isFlipped ? "rotateY(180deg)" : ""}`,
      }}
    >
      <Card
        shadow={true}
        className="relative grid h-[20rem] w-80 items-end justify-center overflow-hidden text-center hover:scale-105 transition-all duration-300 ease-in-out front"
        style={{ backfaceVisibility: "hidden" }}
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className={`absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center`}
          style={{ backgroundImage: `url(${benefit.imgUrl})` }}
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/90 via-black/50" />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">
          <Typography
            variant="h3"
            color="white"
            className="mb-6 font-medium ts-1"
          >
            {benefit.title}
          </Typography>
        </CardBody>
      </Card>
      <Card
        shadow={true}
        className="grid h-[20rem] w-80 items-end justify-center overflow-hidden text-center back absolute top-0 border-gray-500 border-solid border bg-primary-color"
        style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
      >
        <CardBody className="pb-14 px-6 md:px-12 rounded-xl border-b-2 border-white">
          <Typography className="mb-4 text-cyan-50 ts-1 font-medium">
            {benefit.description}
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
};

export default Benefits;
