import { teamData } from "@/data/team";
import Image from "next/image";
import React from "react";
import PersonCard from "../personCard";

const Team = () => {
  return (
    <div className="relative h-full mb-10">
      <div className="absolute -left-20 -top-10 -z-10">
        <div className="relative aspect-square w-[350px]">
          <Image src="/ellipse.png" fill alt="ellipse" />
        </div>
      </div>
      <div className="flex md:flex-row flex-col items-center justify-between px-10 pt-20">
        <h1 className="flex-[2] md:mb-0 mb-4 text-xl md:text-3xl xl:text-5xl font-extrabold uppercase">
          MANCO ART — Ukrainian Game Art Outsourcing Studio
        </h1>
        <p className="flex-1 text-lg md:text-xl">
          What does it mean? It's simple: we take over the implementation of
          your project in part or in full - from concepts to the finished art
          product. Our company employs a staff of qualified specialists in the
          field of digital drawing.
        </p>
      </div>
      <div className="flex flex-wrap mt-36 w-full px-10 xl:px-20 items-center justify-evenly gap-x-5">
        {teamData.map((member) => (
          <PersonCard
            name={member.name}
            role={member.role}
            img={member.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
