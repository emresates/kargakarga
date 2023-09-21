"use client";
import { slides } from "@/data/hero";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  let interval;

  const handleSlideClick = (index) => {
    clearInterval(interval);
    setActiveSlide(index);
  };

  const startInterval = () => {
    interval = setInterval(() => {
      setActiveSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1,
      );
    }, 5000);
  };

  useEffect(() => {
    startInterval();

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div className="center">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute left-0 top-0 flex h-full w-full items-center justify-between p-40 opacity-0 transition-opacity duration-500 ${
              activeSlide === index && "opacity-100"
            }`}
          >
            <div className="flex w-3/6 flex-col items-start gap-8">
              <h1 className="text-6xl font-extrabold uppercase leading-[75px]">
                {slide.title}
              </h1>
              <h3 className="text-2xl font-bold">{slide.slogan}</h3>
              <button className="rounded-2xl bg-[#294DFA] px-6 py-4 font-bold text-white">
                Join Us
              </button>
            </div>
            <div className="right">
              <div className="relative mt-60 aspect-video w-[800px]">
                <Image src={slide.img} fill alt={slide.title} />
              </div>
            </div>
            <div className="absolute right-10 top-52 -z-10">
              <div className="relative aspect-square w-[600px]">
                <Image src="/ellipse.png" fill alt="ellipse" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-10 w-full">
        <div className="mb-10 flex items-center justify-start gap-2 pl-20">
          <button
            onClick={() =>
              setActiveSlide((prevSlide) =>
                prevSlide === slides.length - 1 ? 0 : prevSlide - 1,
              )
            }
            className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-200"
          >
            <FiArrowLeft className="text-xl font-thin" />
          </button>
          <button
            onClick={() =>
              setActiveSlide((prevSlide) =>
                prevSlide === slides.length - 1 ? 0 : prevSlide + 1,
              )
            }
            className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-200"
          >
            <FiArrowRight className="text-xl font-thin" />
          </button>
        </div>
        <div className="flex items-center justify-between gap-4 px-20">
          <h1
            onClick={() => handleSlideClick(0)}
            className={`w-full cursor-pointer border-b-4 pb-4 transition-all ${
              activeSlide === 0
                ? "border-blue-600 text-black"
                : "border-gray-400 text-gray-400"
            }`}
          >
            Illustrations for the book "Red Sands of Durnwood"
          </h1>
          <h1
            onClick={() => handleSlideClick(1)}
            className={`w-full cursor-pointer border-b-4 pb-4 transition-all ${
              activeSlide === 1
                ? "border-blue-600 text-black"
                : "border-gray-400 text-gray-400"
            }`}
          >
            “UARMY” Mobile Card game
          </h1>
          <h1
            onClick={() => handleSlideClick(2)}
            className={`w-full cursor-pointer border-b-4 pb-4 transition-all ${
              activeSlide === 2
                ? "border-blue-600 text-black"
                : "border-gray-400 text-gray-400"
            }`}
          >
            “Easy Cargo” Brand identity
          </h1>
          <h1
            onClick={() => handleSlideClick(3)}
            className={`w-full cursor-pointer border-b-4 pb-4 transition-all ${
              activeSlide === 3
                ? "border-blue-600 text-black"
                : "border-gray-400 text-gray-400"
            }`}
          >
            UARMY Mobile Card game
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
