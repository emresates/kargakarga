import { teamData } from "@/data/team";
import Image from "next/image";
import React from "react";
import PersonCard from "../personCard";

const Team = () => {
  return (
    <div className="relative mb-10 h-full">
      <div className="absolute -left-20 -top-10 -z-10">
        <div className="relative aspect-square w-[350px]">
          <Image src="/ellipse.png" fill alt="ellipse" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-between px-10 pt-20 md:flex-row">
        <h1 className="mb-4 flex-[2] text-xl font-extrabold uppercase md:mb-0 md:text-3xl xl:text-5xl">
          MANCO ART — Ukrainian Game Art Outsourcing Studio
        </h1>
        <p className="flex-1 text-lg md:text-xl">
          What does it mean? It's simple: we take over the implementation of
          your project in part or in full - from concepts to the finished art
          product. Our company employs a staff of qualified specialists in the
          field of digital drawing.
        </p>
      </div>
      <div className="mt-36 flex w-full flex-wrap items-center justify-evenly gap-x-5 px-10 xl:px-20">
        {teamData.map((member) => (
          <PersonCard
            key={member.name}
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
