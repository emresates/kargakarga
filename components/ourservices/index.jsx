import Image from "next/image";
import React from "react";
import Card from "../card";
import { servicesFirst, servicesSecond } from "@/data/services";

const OurServices = () => {
  return (
    <div className="relative h-[1000px] w-screen">
      <div className="absolute -right-32 top-0 z-0">
        <div className="relative aspect-square w-[400px]">
          <Image src="/ellipse.png" fill alt="ellipse" />
        </div>
      </div>
      <h1 className="mb-20 pl-20 text-5xl font-extrabold uppercase">
        Our Services
      </h1>
      <div className="mx-auto w-11/12">
        <div className="flex gap-x-4">
          {servicesFirst.map((service) => (
            <Card
              title={service.title}
              description={service.description}
              image={service.img}
            />
          ))}
        </div>
        <div className="flex gap-x-4">
          {servicesSecond.map((service) => (
            <Card
              title={service.title}
              description={service.description}
              image={service.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
