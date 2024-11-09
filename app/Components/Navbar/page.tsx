import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-purple-600 to-pink-500 p-6">
      <div className="flex justify-between ">
       
        <Link
          href="/"
          className="text-white text-5xl font-serif bg-gradient-to-r from-pink-600 to-indigo-600 py-2 px-6 rounded-lg hover:bg-cyan-500 transform transition duration-300 ease-in-out hover:scale-110"
        >
          Rimsha Ansari
        </Link>

       <div className="flex-grow"></div>
        <div className="flex justify-between items-center  flex-grow ">
          <Link
            href="/Projects"
            className="text-white text-2xl font-bold hover:text-blue-600 transform transition duration-300 ease-in-out hover:scale-110"
          >
            Projects
          </Link>
          <Link
            href="/Skills"
            className="text-white text-2xl font-bold hover:text-blue-600 transform transition duration-300 ease-in-out hover:scale-110"
          >
            Skills
          </Link>
          <Link
            href="/About"
            className="text-white text-2xl font-bold hover:text-blue-600 transform transition duration-300 ease-in-out hover:scale-110"
          >
            About
          </Link>
          <Link
            href="/Contact"
            className="text-white text-2xl font-bold hover:text-blue-600 transform transition duration-300 ease-in-out hover:scale-110"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
