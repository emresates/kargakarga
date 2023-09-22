import Image from "next/image";
import React from "react";

const PersonCard = ({ name, role, img }) => {
  return (
    <div key={name}>
      <div className="relative md:mt-0 mt-4 w-48 h-40 md:w-80 md:h-72  xl:h-[370px] xl:w-[400px]">
        <Image src={img} alt="name" sizes="300px" fill />
      </div>
      <h1 className="font-bold text-lg md:text-2xl mt-5">{name}</h1>
      <p className="mt-4 text-sm md:text-lg whitespace-break-spaces">{role}</p>
    </div>
  );
};

export default PersonCard;
