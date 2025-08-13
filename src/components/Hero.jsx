import React from 'react'
import { FaArrowDown } from "react-icons/fa6";

const Hero = ({ onArrowClick, onViewMyWorkClick, onGetInTouchClick }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center pt-40 px-6">
      <h1 className=" text-4xl sm:text-5xl md:text-6xl font-bold mb-4"> Hi, I'm <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">John Great</span>
      </h1>

      <p className="text-lg max-w-xl mb-8">Front-End Web Developer passionate about creating beautiful, functional, and user-centered digital experiences</p>

      <div className="flex flex-col items-center">
        <div className="flex gap-4 flex-wrap justify-center items-center">

          <button className='px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300'
            onClick={onViewMyWorkClick}
          >View My Work</button>

          <button
            className='px-8 py-4 bg-transparent border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-300'
            onClick={onGetInTouchClick}
          >
            Get In Touch
          </button>

        </div>

        {/* Bouncing Arrow */}
        <div className='mt-5'>
          <span
            className="mt-10 text-3xl animate-bounce opacity-80 flex justify-center cursor-pointer"
            onClick={onArrowClick}
            title="Scroll to About"
          >
            <FaArrowDown />
          </span>
        </div>

      </div>
    </div>
  )
}

export default Hero
