"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [open, setOpen] = useState(false);

  const path = usePathname();
  return (
    <div
      className={`${
        path === "/mobilecom" ? "hidden" : "block"
      } absolute left-0 top-0 z-50 flex h-24 w-full items-center justify-between px-14`}
    >
      <div className="left">
        <Link
          href="/"
          className="text-4xl font-extrabold tracking-wider text-[#145389]"
        >
          kargakarga
        </Link>
      </div>
      <div className="hidden items-center gap-4 text-white md:flex">
        <Link
          href="/projects"
          className="rounded-2xl bg-black px-4 py-2 text-sm"
        >
          Projects
        </Link>
        <Link
          href="/services"
          className="rounded-2xl bg-black px-4 py-2 text-sm"
        >
          Services
        </Link>
        <Link href="/about" className="rounded-2xl bg-black px-4 py-2 text-sm">
          About Us
        </Link>
        <Link
          href="/contact"
          className="rounded-2xl bg-black px-4 py-2 text-sm"
        >
          Contact Us
        </Link>
        <Link
          href="/mobilecom"
          className="group relative rounded-2xl bg-blue-600 px-4 py-2 text-sm"
        >
          Start a Project
          {/* Tooltip */}
          <div className="absolute left-0 top-12 hidden w-32 group-hover:flex">
            <div className="relative flex items-center rounded-md bg-blue-700 px-3 py-2 text-black">
              <p className="text-base leading-4 text-white">
                This link takes you to the Mobile Combustion page.
              </p>
              {/* Right Arrow */}
              <span className="absolute -top-1 right-1/2 -translate-y-1/2 rotate-180 transform border-l-8 border-r-8 border-t-8 border-solid border-l-transparent border-r-transparent border-t-blue-700"></span>
            </div>
          </div>
        </Link>
      </div>

      <div
        className={`z-50 flex h-5 cursor-pointer items-center justify-center gap-x-1 transition-all md:hidden ${
          open ? "rotate-45" : ""
        }`}
        onClick={() => setOpen(!open)}
      >
        <div
          className={`h-full w-1 bg-red-400 transition-all ${
            open ? "translate-x-2 rotate-90" : ""
          }`}
        ></div>
        <div className="h-full w-1 bg-red-400"></div>
        <div
          className={`h-full w-1 bg-red-400 transition-all ${
            open ? "-translate-x-2 rotate-90" : ""
          }`}
        ></div>
      </div>
      <div
        className={`${
          open ? "left-0 opacity-100" : "-left-full opacity-0"
        } absolute top-20 z-50 flex h-screen w-full flex-col items-center justify-center gap-y-10 bg-white text-4xl transition-all md:hidden`}
      >
        <button>Projects</button>
        <button>Services</button>
        <button>About Us</button>
        <button>Contact Us</button>
        <button className="text-blue-500">Start a Project</button>
      </div>
    </div>
  );
};

export default Header;
