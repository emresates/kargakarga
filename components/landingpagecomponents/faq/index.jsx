"use client";
import Image from "next/image";
import React, { useState } from "react";
import Question from "../questionsSection";
import { questions } from "@/data/faq";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <div className="relative mt-20 h-full min-h-[800px] pt-0 md:pt-20">
      <div className="absolute -left-20 -top-10 -z-10">
        <div className="relative aspect-square w-[350px]">
          <Image src="/ellipse.png" fill alt="ellipse" />
        </div>
      </div>

      <div className="flex flex-col">
        <h1 className="mb-10 ml-20 text-4xl font-extrabold uppercase">Faq</h1>

        <div className="mx-auto w-11/12 rounded-2xl bg-white p-4">
          {questions.map((question, index) => (
            <Question
              key={index}
              index={index}
              question={question.question}
              answer={question.answer}
              openIndex={openIndex}
              setOpenIndex={setOpenIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
