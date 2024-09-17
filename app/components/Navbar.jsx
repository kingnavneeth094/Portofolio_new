"use client";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const name = "Navneeth K S";
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 mb-10 w-full flex justify-between items-center z-50 px-3 py-3 text-white bg-black shadow-md">
      <h1 className="font-extrabold text-md md:text-2xl">{name}</h1>
      <div className="flex items-center">
        <div className="hidden md:flex text-xl font-bold gap-6 mr-4">
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>
        </div>

        <button
          className="text-white md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div
        id="mobile-menu"
        className={`${isOpen ? "block" : "hidden"} md:hidden transition-all duration-300 ease-in-out`}
      >
        <div className="flex flex-col font-bold text-white">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  );
}
