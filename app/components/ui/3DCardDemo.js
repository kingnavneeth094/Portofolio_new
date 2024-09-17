"use client";
import Nav from "@/public/images/Me/nav.png";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-900 relative group/card  hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white"
        >
          NAVNEETH K S
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-white text-sm max-w-sm mt-2"
        >
          I'm a Full stack Developer based in Bengaluru, India 🏠
          (Hover over me to make my fly 🛸)
        </CardItem>
        <CardItem
          translateZ="100"
          className="w-full mt-4"
        >
          <Image
            src={Nav}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>

        {/* Follow me on section */}
    
      </CardBody>
    </CardContainer>
  );
}
