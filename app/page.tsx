
"use client"
import React from "react";
import Image from "next/image";
import display from "@/public/display.jpg"
import { TypeAnimation } from "react-type-animation";

export default function HomePage() {
  return (
    <div className="bg-gradient-to-r from-purple-300 to-pink-300">
    <div className="flex items-center justify-between h-screen px-10 ">
      <div className="w-1/2">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text text-transparent">
          <TypeAnimation
            sequence={[
              "Hello! Welcome to My Portfolio ",
             2000,
              "I'm Rimsha Ansari.", // First text
              2000, 
              "I'm Daughter of Ayaz Ansari.", 
              1500, 
              "I'm a Frontend Web Developer.", // Second text
              2000, 
              "Welcome to my Portfolio!", // Third text
              2000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ display: "inline-block" }}
          />
        </h1>
      </div>

      <div className="w-400 h-400 rounded-full flex place-self-center group ">
        <div className="rounded-lg  overflow-hidden bg-gradient-to-r from-pink-500 to-cyan-700">
          <Image src={display} alt="Profile" width={600} height={600} className="static object-cover transition-all transform hover:scale-105 group-hover:shadow-[0_0_20px_rgba(255,105,180,0.6)] "/>
        </div>
      </div>
    </div>
    </div>
  );
}
