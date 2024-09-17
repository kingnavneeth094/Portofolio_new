"use client";
import about_me from "@/public/data/about_me";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-card";
import { Vortex } from "../components/ui/vortex";

export default function About() {
  return (
    <section
      id="about"
      className="bg-black flex flex-col justify-center items-center  relative"
    >
      {/* Introduction Section */}
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={65}
        className="h-full w-full"
      >
        <section className="text-center py-12 px-4 max-w-4xl mx-auto">
          <h2 className="font-bold text-2xl md:text-6xl text-white mt-5 mb-4">
            Take your time and explore me!
          </h2>
          <p className="text-white text-2xl mb-8">
            Hello! I&apos;m Navneeth K S, a passionate Computer Science and
            Engineering student with a love for technology and innovation. I
            enjoy solving real-world problems and experimenting with new
            technologies. On this page, you&apos;ll get to know more about me, my
            skills, and my projects.
          </p>
          <p className="text-white text-xl 0 mb-8">
            Please do take your time and read the cards slowly to know more about me!
          </p>
        </section>

        {/* Infinite Moving Cards */}
        <section className="relative w-full py-12 px-4 max-w-4xl mx-auto">
          <InfiniteMovingCards
            items={about_me}
            direction="right"
            speed="slow"
          />
        </section>

      </Vortex>
    </section>
  );
}
