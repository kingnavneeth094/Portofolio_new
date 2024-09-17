"use client";
import { ThreeDCardDemo } from "../components/ui/3DCardDemo";
import { Vortex } from "../components/ui/vortex";
import Image from "next/image";
import html from "@/public/images/tech/HTML.png";
import css from "@/public/images/tech/CSS.png";
import js from "@/public/images/tech/JAVASCRIPT.png";
import node from "@/public/images/tech/NODE.png";
import react from "@/public/images/tech/REACT.png";
import python from "@/public/images/tech/PYTHON.png";
import github from "@/public/images/Media/github.png";
import linkedin from "@/public/images/Media/linkedin.png";
import insta from "@/public/images/Media/instagram.png";
import leetcode from "@/public/images/Media/leetcode.svg";
import Link from "next/link"; // Ensure this is imported

export default function Home() {
  return (
    <section id="home" className="bg-black relative my-5">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={100}
        className="h-full w-full"
        baseSpeed={0.0}
      >
        <h2 className="text-white text-2xl mt-20 md:text-6xl font-bold text-center">
          Welcome to my World !!
        </h2>
        <ThreeDCardDemo />

        <div className="my-10">
          <div className="text-2xl font-bold text-white text-center mb-8">
            Follow me on...
          </div>
          <div className="flex justify-center items-center gap-6 mt-4">
            {/* Github */}
            <Link href="https://github.com/kingnavneeth094" target="_blank" rel="noopener noreferrer">
              <Image src={github} width={40} height={40} alt="GitHub" />
            </Link>
            {/* LinkedIn */}
            <Link href="https://www.linkedin.com/in/navneeth-ks-69441b28b/" target="_blank" rel="noopener noreferrer">
              <Image src={linkedin} width={40} height={40} alt="LinkedIn" />
            </Link>
            {/* Instagram */}
            <Link href="https://www.instagram.com/nuclear_navneeth/" target="_blank" rel="noopener noreferrer">
              <Image src={insta} width={40} height={40} alt="Instagram" />
            </Link>
            <Link href="https://leetcode.com/u/Navneeth_KS/" target="_blank" rel="noopener noreferrer">
              <Image src={leetcode} width={40} height={40} alt="Leetcode" />
            </Link>
          </div>
        </div>

        {/* <div className="flex flex-col items-center text-center mb-5">
          <h3 className="text-2xl font-bold text-white mb-4">
            Tech Stack |
          </h3>
          <div className="flex space-x-4 mb-8">
            <Image src={html} alt="HTML" width={40} height={40} />
            <Image src={css} alt="CSS" width={40} height={40} />
            <Image src={js} alt="JavaScript" width={40} height={40} />
            <Image src={react} alt="React" width={40} height={40} />
            <Image src={node} alt="Node.js" width={40} height={40} />
            <Image src={python} alt="Python" width={40} height={40} />
          </div>
        </div> */}
      </Vortex>
    </section>
  );
}
