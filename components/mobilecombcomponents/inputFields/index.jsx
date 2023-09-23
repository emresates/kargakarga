"use client";
import React, { useEffect, useState } from "react";
import { MdPlayArrow } from "react-icons/md";

const InputFields = ({
  facilities,
  sources,
  fuel_types,
  fuels,
  units,
  formData,
  setFormData,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //* Fuel Types Bulma
  // formData.source ile eşleşen yakıt türünü bulma
  const selectedFuelSource = sources.find(
    (source) => source.name_tr === formData.source,
  );
  // Eşleşen source un id'sini alma
  const selectedSourceId = selectedFuelSource ? selectedFuelSource.id : null;
  // selectedSourceId kullanarak eşleşen yakıt türlerini filtrele
  const filteredFuelTypes = fuel_types.filter(
    (fuelType) => fuelType.source_type_id === selectedSourceId,
  );

  //* Fuels Bulma
  // formData.fuel_type ile eşleşen yakıt türünü bulma
  const selectedFuelType = fuel_types.find(
    (fuelType) => fuelType.name_tr === formData.fuel_type,
  );
  // Eşleşen yakıt türünün id'sini alma
  const selectedFuelTypeId = selectedFuelType ? selectedFuelType.id : null;

  // selectedFuelTypeId kullanarak eşleşen fuels filtreleme
  const filteredFuels = fuels.filter(
    (fuel) => fuel.fuel_type_id === selectedFuelTypeId,
  );

  //* Units Bulma
  // formData.fuel ile eşleşen units bulma
  const selectedFuel = fuels.find((fuel) => fuel.name_tr === formData.fuel);
  // Eşleşen fuel id'sini alma
  const selectedFuelId = selectedFuel ? selectedFuel.id : null;

  // selectedFuelId kullanarak eşleşen fuels filtreleme
  const filteredUnits = units.filter((unit) => unit.fuel_id === selectedFuelId);

  return (
    <div className="mt-16">
      <div className="relative flex flex-col">
        <label htmlFor="facility" className="mb-2 text-lg">
          Facility
        </label>
        <div className="relative w-1/2 rounded-lg rounded-br-[35px] border border-black p-4 pl-8">
          <select
            value={formData.facility || ""}
            onChange={handleChange}
            name="facility"
            id="selector"
          >
            <option value="">Seçiniz</option>
            {facilities.map((facility) => (
              <option key={facility} value={facility}>
                {facility}
              </option>
            ))}
          </select>
          <MdPlayArrow className="absolute right-0 top-0 rotate-90 text-4xl text-green-800" />
        </div>
      </div>
      <div className="relative mt-6 flex flex-col">
        <label htmlFor="year" className="mb-2 text-lg">
          Year
        </label>
        <div className="relative w-1/2 rounded-lg rounded-br-[35px] border border-black p-4 pl-8">
          <select
            name="year"
            id="selector"
            value={formData.year || ""}
            onChange={handleChange}
          >
            <option value="">Seçiniz</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
          <MdPlayArrow className="absolute right-0 top-0 rotate-90 text-4xl text-green-800" />
        </div>
      </div>
      <div className="relative mt-6 flex flex-col">
        <label htmlFor="fuelsource" className="mb-2 text-lg">
          Fuel Source
        </label>
        <div className="relative w-1/2 rounded-lg rounded-br-[35px] border border-black p-4 pl-8">
          <select
            name="source"
            id="selector"
            value={formData.source || ""}
            onChange={handleChange}
          >
            <option value="">Seçiniz</option>
            {sources.map((source) => (
              <option key={source.name_tr} value={source.name_tr}>
                {source.name_tr}
              </option>
            ))}
          </select>
          <MdPlayArrow className="absolute right-0 top-0 rotate-90 text-4xl text-green-800" />
        </div>
      </div>
      <div className="relative mt-6 flex flex-col">
        <label htmlFor="fueltype" className="mb-2 text-lg">
          Fuel Type
        </label>
        <div className="relative w-1/2 rounded-lg rounded-br-[35px] border border-black p-4 pl-8">
          <select
            name="fuel_type"
            id="selector"
            value={formData.fuel_type || ""}
            onChange={handleChange}
          >
            <option value="">Seçiniz</option>
            {filteredFuelTypes?.map((type) => (
              <option key={type.name_tr} value={type.name_tr}>
                {type.name_tr}
              </option>
            ))}
          </select>
          <MdPlayArrow className="absolute right-0 top-0 rotate-90 text-4xl text-green-800" />
        </div>
      </div>
      <div className="relative mt-6 flex flex-col">
        <label htmlFor="fuel" className="mb-2 text-lg">
          Fuel
        </label>
        <div className="relative w-1/2 rounded-lg rounded-br-[35px] border border-black p-4 pl-8">
          <select
            name="fuel"
            id="selector"
            value={formData.fuel || ""}
            onChange={handleChange}
          >
            <option value="">Seçiniz</option>
            {filteredFuels.map((fuel, index) => (
              <option key={fuel.name_tr + index} value={fuel.name_tr}>
                {fuel.name_tr}
              </option>
            ))}
          </select>
          <MdPlayArrow className="absolute right-0 top-0 rotate-90 text-4xl text-green-800" />
        </div>
      </div>
      <div className="relative mt-20 flex flex-col">
        <div className="relative flex w-1/2 items-end justify-between gap-x-10 rounded-lg rounded-br-[35px] border border-black py-3 pl-8">
          <div className="w-1/2">
            <input
              type="text"
              placeholder="Seçiniz"
              className="border-b-2 border-gray-300 pb-2 outline-none"
              name="amount"
              value={formData.amount || ""}
              onChange={handleChange}
            />
          </div>
          <div className="ml-8 flex w-2/5 flex-col">
            <label htmlFor="" className="text-sm">
              Units
            </label>
            <select
              name="unit"
              id="selector2"
              value={formData.unit || ""}
              onChange={handleChange}
            >
              <option value="">Seçiniz</option>
              {filteredUnits.map((unit) => (
                <option key={unit.name_tr + unit.fuel_id} value={unit.name_tr}>
                  {unit.name_tr}
                </option>
              ))}
            </select>
          </div>

          <MdPlayArrow className="absolute right-0 top-0 rotate-90 text-4xl text-green-800" />
        </div>
      </div>
    </div>
  );
};

export default InputFields;
