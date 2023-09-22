import React from "react";
import { MdPlayArrow } from "react-icons/md";


const InputFields = () => {
  return (
    <div className="mt-16">
      <div className="relative flex flex-col">
        <label htmlFor="facility" className="mb-2 text-lg">
          Facility
        </label>
        <div className="relative w-1/2 rounded-lg rounded-br-[35px] border border-black p-4 pl-8">
          <input
            id="facility"
            type="text"
            placeholder="Seçiniz"
            className="w-4/5 border-b-2 border-gray-300 pb-2 outline-none"
          />
          <MdPlayArrow className="absolute right-0 top-0 rotate-90 text-4xl text-green-800" />
        </div>
      </div>
      <div className="relative mt-6 flex flex-col">
        <label htmlFor="year" className="mb-2 text-lg">
          Year
        </label>
        <div className="relative w-1/2 rounded-lg rounded-br-[35px] border border-black p-4 pl-8">
          <input
            id="year"
            type="text"
            placeholder="Seçiniz"
            className="w-4/5 border-b-2 border-gray-300 pb-2 outline-none"
          />
          <MdPlayArrow className="absolute right-0 top-0 rotate-90 text-4xl text-green-800" />
        </div>
      </div>
      <div className="relative mt-6 flex flex-col">
        <label htmlFor="fuelsource" className="mb-2 text-lg">
          Fuel Source
        </label>
        <div className="relative w-1/2 rounded-lg rounded-br-[35px] border border-black p-4 pl-8">
          <input
            id="fuelsource"
            type="text"
            placeholder="Seçiniz"
            className="w-4/5 border-b-2 border-gray-300 pb-2 outline-none"
          />
          <MdPlayArrow className="absolute right-0 top-0 rotate-90 text-4xl text-green-800" />
        </div>
      </div>
      <div className="relative mt-6 flex flex-col">
        <label htmlFor="fueltype" className="mb-2 text-lg">
          Fuel Type
        </label>
        <div className="relative w-1/2 rounded-lg rounded-br-[35px] border border-black p-4 pl-8">
          <input
            id="fueltype"
            type="text"
            placeholder="Seçiniz"
            className="w-4/5 border-b-2 border-gray-300 pb-2 outline-none"
          />
          <MdPlayArrow className="absolute right-0 top-0 rotate-90 text-4xl text-green-800" />
        </div>
      </div>
      <div className="relative mt-6 flex flex-col">
        <label htmlFor="fuel" className="mb-2 text-lg">
          Fuel
        </label>
        <div className="relative w-1/2 rounded-lg rounded-br-[35px] border border-black p-4 pl-8">
          <input
            id="fuel"
            type="text"
            placeholder="Seçiniz"
            className="w-4/5 border-b-2 border-gray-300 pb-2 outline-none"
          />
          <MdPlayArrow className="absolute right-0 top-0 rotate-90 text-4xl text-green-800" />
        </div>
      </div>
      <div className="relative mt-20 flex flex-col">
        <div className="relative w-1/2 rounded-lg rounded-br-[35px] border border-black p-4 pl-8">
          <input
            type="text"
            placeholder="Seçiniz"
            className="w-4/5 border-b-2 border-gray-300 pb-2 outline-none"
          />
          <MdPlayArrow className="absolute right-0 top-0 rotate-90 text-4xl text-green-800" />
        </div>
      </div>
    </div>
  );
};

export default InputFields;
