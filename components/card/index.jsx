import Image from "next/image";
import React from "react";

const Card = ({ title, description, image }) => {
  return (
    <div className="z-10 aspect-square w-[440px] rounded-2xl bg-white py-6">
      <h1 className="mb-8 text-3xl font-medium">{title}</h1>
      <div className="relative h-[230px] w-[400px]">
        <Image src={image} alt={title} fill sizes="300px" />
      </div>
      <p className="mt-6 text-gray-400">{description}</p>
    </div>
  );
};

export default Card;
