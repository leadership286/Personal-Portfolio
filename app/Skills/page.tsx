import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa'; 

export default function Skills() {
  return (
  <div className='bg-gradient-to-r  from-pink-500 to-cyan-500 min-h-screen'>
    <div className="container mx-auto p-8" id="skills">
      <h1 className="text-6xl font-bold text-center mb-8 ">My Skills</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* HTML */}
        <div className="skill-card border p-6 rounded-lg shadow-lg hover:scale-110 hover:shadow-xl transition duration-300">
          <div className="flex items-center mb-4">
            <FaHtml5 className="text-orange-500 text-4xl mr-4" />
            <h2 className="text-2xl font-semibold text-pink-600 text-center">HTML</h2>
          </div>
        </div>

        {/* CSS */}
        <div className="skill-card border p-6 rounded-lg shadow-lg hover:scale-110 hover:shadow-xl transition duration-300">
          <div className="flex items-center mb-4">
            <FaCss3Alt className="text-blue-500 text-4xl mr-4" />
            <h2 className="text-2xl font-semibold text-pink-600">CSS</h2>
          </div>
        </div>

        {/* JavaScript */}
        <div className="skill-card border p-6 rounded-lg shadow-lg hover:scale-110 hover:shadow-xl transition duration-300">
          <div className="flex items-center mb-4">
            <FaJsSquare className="text-yellow-500 text-4xl mr-4" />
            <h2 className="text-2xl font-semibold text-pink-600">JavaScript</h2>
          </div>
        </div>

        {/* React */}
        <div className="skill-card border p-6 rounded-lg shadow-lg hover:scale-110 hover:shadow-xl transition duration-300">
          <div className="flex items-center mb-4">
            <FaReact className="text-blue-400 text-4xl mr-4" />
            <h2 className="text-2xl font-semibold text-pink-600">React</h2>
          </div>
        </div>

        {/* Node.js */}
        <div className="skill-card border p-6 rounded-lg shadow-lg hover:scale-110 hover:shadow-xl transition duration-300">
          <div className="flex items-center mb-4">
            <FaNodeJs className="text-green-500 text-4xl mr-4" />
            <h2 className="text-2xl font-semibold text-pink-600">Node.js</h2>
          </div>
        </div>

  {/* GitHub */}
  <div className="skill-card border p-6 rounded-lg shadow-lg hover:scale-110 hover:shadow-xl transition duration-300">
          <div className="flex items-center mb-4">
            <FaGithub className="text-green-500 text-4xl mr-4" />
            <h2 className="text-2xl font-semibold text-pink-600">GitHub</h2>
          </div>
        </div>
        

      </div>
    </div>
    </div>
  );
}
