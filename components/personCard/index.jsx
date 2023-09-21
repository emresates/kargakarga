import Image from "next/image";
import React from "react";

const PersonCard = ({ name, role, img }) => {
  return (
    <div>
      <div className="relative h-[370px] w-[430px]">
        <Image src={img} alt="name" sizes="300px" fill />
      </div>
      <h1 className="font-bold text-2xl mt-5">{name}</h1>
      <p className="mt-4 text-lg">{role}</p>
    </div>
  );
};

export default PersonCard;
