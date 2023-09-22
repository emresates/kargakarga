import Image from "next/image";
import React from "react";

const MidSection = () => {
  return (
    <section className="mx-auto mb-10 hidden h-[500px] w-11/12 rounded-2xl bg-neutral-950 sm:flex">
      <div className=" flex w-1/2 flex-col justify-between px-10 py-14 text-white">
        <h1 className="text-2xl font-extrabold uppercase leading-10 lg:text-4.5xl lg:leading-none">
          Hey! You can send us a message to start working on the project
        </h1>

        <div className="flex lg:flex-row flex-col items-start lg:items-center gap-x-12">
          <button className="rounded-2xl bg-[#294DFA] lg:mb-0 mb-4 px-4 py-2 font-semibold uppercase lg:px-8 lg:py-6">
            Start the project
          </button>
          <div>
            <p>Or write to us at:</p>
            <span>info@kargakarga.com</span>
          </div>
        </div>
      </div>
      <div className="relative aspect-square w-1/2">
        <Image src="/phone.png" alt="phone" fill sizes="800px" />
      </div>
    </section>
  );
};

export default MidSection;
