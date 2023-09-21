import React from "react";

const Header = () => {
  return (
    <div className="absolute left-0 top-0 flex h-24 w-full items-center justify-between px-14">
      <div className="left">
        <h1 className="text-4xl font-extrabold tracking-wider text-[#145389]">
          kargakarga
        </h1>
      </div>
      <div className="flex items-center gap-4 text-white">
        <button className="rounded-2xl bg-black px-4 py-2 text-sm">
          Projects
        </button>
        <button className="rounded-2xl bg-black px-4 py-2 text-sm">
          Services
        </button>
        <button className="rounded-2xl bg-black px-4 py-2 text-sm">
          About Us
        </button>
        <button className="rounded-2xl bg-black px-4 py-2 text-sm">
          Contact Us
        </button>
        <button className="rounded-2xl bg-blue-600 px-4 py-2 text-sm">
          Start a Project
        </button>
      </div>
    </div>
  );
};

export default Header;
