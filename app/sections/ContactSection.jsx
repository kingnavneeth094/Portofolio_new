"use client";
import React from "react";
import { ShootingStars } from "../components/ui/shooting-stars";
import { StarsBackground } from "../components/ui/stars-background";
import CopyEmailButton from "../components/button";

export default function Contact() {
  return (
    <section
      id="contact" // Changed to "contact" for correct anchor linking
      className="relative w-full h-[40rem] bg-black rounded-md flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Header */}
      <h2 className="relative z-10 text-3xl md:text-5xl text-center font-bold text-white tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-300 to-gray-500">
        Contact me for collaborations and exciting projects
      </h2>
      <h2 className="text-white">
        If you are lucky, you can witness a shooting star !
      </h2>

      {/* Copy Email Button */}
      <div className="mt-6 z-10">
        <CopyEmailButton />
      </div>

      {/* Background Effects */}
      <ShootingStars
        minSpeed={40}
        maxSpeed={80}
        minDelay={1000}
        maxDelay={6000}
        starHeight={4}
        starWidth={40}
        className="absolute inset-0"
      />
      <StarsBackground starDensity={0.0003} className="absolute inset-0" />
    </section>
  );
}
