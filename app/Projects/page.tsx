import React from "react";
import Image from "next/image";
import calculator from "@/public/Project-1.jpg";
import gallery from "@/public/Project-2.jpg";
import music from "@/public/Project-3.jpg";
import atm from "@/public/Project-4.jpg";
import counter from "@/public/Project-5.jpg";
import management from "@/public/Project-6.jpg";
import game from "@/public/project-7.jpg";
import converter from "@/public/Project-8.jpg";
import timer from "@/public/Project-9.jpg";

export default function Projects() {
  return (
    <div className='bg-gradient-to-r from-pink-500 to-cyan-500 min-h-screen'>
    <div className="container mx-auto p-8">
      <h1 className="text-6xl font-bold text-center mb-8">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="project-card border p-4 rounded-3xl shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300">
          <Image src={calculator} alt="Project 1" className="w-full h-64 object-cover rounded-md mb-4" />
          <h2 className="text-2xl font-semibold text-pink-700">Calculator</h2>
          <a href="https://simple-calculator-zeta-olive.vercel.app" className="text-black mt-2 inline-block">View Project</a>
        </div>

        <div className="project-card border p-4 rounded-3xl shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300">
          <Image src={gallery} alt="Project 2" className="w-full h-64 object-cover rounded-md mb-4" />
          <h2 className="text-2xl font-semibold text-pink-700">Image Gallery</h2>
          <a href="https://project-image-gallery.vercel.app" className="text-black mt-2 inline-block">View Project</a>
        </div>

        <div className="project-card border p-4 rounded-3xl shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300">
          <Image src={music} alt="Project 3" className="w-full h-64 object-cover rounded-md mb-4" />
          <h2 className="text-2xl font-semibold text-pink-700">Music Player</h2>
          <a href="https://music-player-gules-alpha.vercel.app" className="text-black mt-2 inline-block">View Project</a>
        </div>

        <div className="project-card border p-4 rounded-3xl shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300">
          <Image src={atm} alt="Project 4" className="w-full h-64 object-cover rounded-md mb-4" />
          <h2 className="text-2xl font-semibold text-pink-700">ATM Machine</h2>
          <a href="https://github.com/leadership286/CLI-based-ATM-Machine.git" className="text-black mt-2 inline-block">View Project</a>
        </div>

        <div className="project-card border p-4 rounded-3xl shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300">
          <Image src={counter} alt="Project 5" className="w-full h-64 object-cover rounded-md mb-4" />
          <h2 className="text-2xl font-semibold text-pink-700">Word Counter</h2>
          <a href="https://github.com/leadership286/Word-Counter.git" className="text-black mt-2 inline-block">View Project</a>
        </div>

        <div className="project-card border p-4 rounded-3xl shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300">
          <Image src={management} alt="Project 6" className="w-full h-64 object-cover rounded-md mb-4" />
          <h2 className="text-2xl font-semibold text-pink-700">Student Management System</h2>
          <a href="https://github.com/leadership286/Student-Management-System.git" className="text-black mt-2 inline-block">View Project</a>
        </div>

        <div className="project-card border p-4 rounded-3xl shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300">
          <Image src={game} alt="Project 7" className="w-full h-64 object-cover rounded-md mb-4" />
          <h2 className="text-2xl font-semibold text-pink-700">Adventure Game</h2>
          <a href="https://github.com/leadership286/Adventure-Game.git" className="text-black mt-2 inline-block">View Project</a>
        </div>

        <div className="project-card border p-4 rounded-3xl shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300">
          <Image src={converter} alt="Project 8" className="w-full h-64 object-cover rounded-md mb-4" />
          <h2 className="text-2xl font-semibold text-pink-700">Currency Converter</h2>
          <a href="https://github.com/leadership286/Currncy-Converter.git" className="text-black mt-2 inline-block">View Project</a>
        </div>

        <div className="project-card border p-4 rounded-3xl shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300">
          <Image src={timer} alt="Project 9" className="w-full h-64 object-cover rounded-md mb-4" />
          <h2 className="text-2xl font-semibold text-pink-700">Countdown Timer</h2>
          <a href="https://github.com/leadership286/Countdown-Timer.git" className="text-black mt-2 inline-block">View Project</a>
        </div>
      </div>
    </div>
    </div>
  );
}
