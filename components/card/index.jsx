import Image from "next/image";
import React from "react";

const Card = ({ title, description, image }) => {
  return (
    <div className="z-10 aspect-square w-[440px] rounded-2xl py-6 bg-white">
      <h1 className="mb-8 text-3xl font-medium">{title}</h1>
      <div className="relative h-[230px] w-[400px]">
        <Image src={image} alt={title} fill sizes="300px" />
      </div>
      <p className="text-gray-400 mt-6">{description}</p>
    </div>
  );
};

export default Card;
