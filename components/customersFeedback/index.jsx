"use client";
import { feedbacks } from "@/data/feedbacks";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const CustomersFeedback = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === feedbacks.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative mt-20 h-[500px] pt-20">
      <div className="absolute -left-20 -top-10 -z-10">
        <div className="relative aspect-square w-[350px]">
          <Image src="/ellipse.png" fill alt="ellipse" />
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="ml-20 text-4xl font-extrabold mb-10 uppercase">
          Customer Feedback
        </h1>

        <div className="hidden md:block relative mx-auto w-11/12 overflow-hidden rounded-2xl bg-white">
          <div
            className={`z-10 flex h-full flex-row transition-transform `}
            style={{ transform: `translateX(-${activeIndex * 700}px)` }}
          >
            {feedbacks.map((feedback) => (
              <div
                key={feedback.id}
                className="mx-auto sm:min-w-[700px] px-4 py-8"
              >
                <div className="rounded p-4">
                  <div className="flex">
                    <div className="relative aspect-square w-16">
                      <Image src={feedback.img} fill sizes="50px" />
                    </div>
                    <div className="ml-6">
                      <h2 className="text-2xl font-bold capitalize">{feedback.name}</h2>
                      <span className="text-sm text-gray-500">
                        {feedback.date}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-800 mt-4">{feedback.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="block md:hidden relative mx-auto w-full overflow-hidden rounded-2xl bg-white">
          <div
            className={`z-10 flex h-full flex-row transition-transform `}
            style={{ transform: `translateX(-${activeIndex * 100}vw)` }}
          >
            {feedbacks.map((feedback) => (
              <div
                key={feedback.id}
                className="min-w-[100vw] px-2 py-4"
              >
                <div className="rounded p-4">
                  <div className="flex">
                    <div className="relative aspect-square w-8 md:w-16">
                      <Image src={feedback.img} fill sizes="50px" />
                    </div>
                    <div className="ml-6">
                      <h2 className="text-lg md:text-2xl font-bold capitalize">{feedback.name}</h2>
                      <span className="text-xs md:text-sm text-gray-500">
                        {feedback.date}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-800 mt-4 text-sm md:text-base">{feedback.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomersFeedback;
