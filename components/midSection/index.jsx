import Image from "next/image";
import React from "react";

const MidSection = () => {
  return (
    <section className="mx-auto mb-10 flex h-[500px] w-11/12 rounded-2xl bg-neutral-950">
      <div className=" flex w-3/5 flex-1 flex-col justify-between px-10 py-14 text-white">
        <h1 className="text-4.5xl font-extrabold uppercase">
          Hey! You can send us a message to start working on the project
        </h1>

        <div className="flex items-center gap-x-12">
          <button className="rounded-2xl bg-[#294DFA] px-8 py-6 font-semibold uppercase">
            Start the project
          </button>
          <div>
            <p>Or write to us at:</p>
            <span>info@kargakarga.com</span>
          </div>
        </div>
      </div>
      <div className="relative aspect-square h-full flex-1">
        <Image src="/phone.png" alt="phone" fill sizes="800px" />
      </div>
    </section>
  );
};

export default MidSection;
