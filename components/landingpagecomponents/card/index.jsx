import Image from "next/image";
import React from "react";

const Card = ({ title, description, image }) => {
  return (
    <div key={title} className="aspect-square w-60 md:w-80 xl:w-[400px] rounded-2xl bg-white py-6">
      <h1 className="mb-8 text-xl md:text-3xl font-medium">{title}</h1>
      <div className="relative h-36 md:h-48 xl:h-[230px] w-52 md:w-72 xl:w-[380px]">
        <Image src={image} alt={title} fill sizes="300px" />
      </div>
      <p className="mt-6 text-gray-400">{description}</p>
    </div>
  );
};

export default Card;
