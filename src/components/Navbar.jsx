'use client'
import React from "react";
import { useState } from "react";

const Navbar = ({ onAboutClick, onFeaturedProjectsClick, onContactClick, onSkillsClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='fixed top-0 w-full z-50 bg-transparent backdrop-blur-sm px-6 py-4 flex justify-between items-center'>
      <div className='font-bold text-xl text-white'>Portfolio</div>

      {/* Desktop Menu */}
      <nav className='hidden md:flex items-center gap-10 text-sm'>
        <a href='#' className='hover:text-blue-400'>Home</a>
        <a className='hover:text-blue-400 cursor-pointer' onClick={onAboutClick}>About</a>
        <a className='hover:text-blue-400 cursor-pointer' onClick={onSkillsClick}>Skills</a>
        <a className='hover:text-blue-400 cursor-pointer' onClick={onFeaturedProjectsClick}>Projects</a>
        <a className='hover:text-blue-400 cursor-pointer' onClick={onContactClick}>Contact</a>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className='absolute top-full left-0 w-full bg-slate-900 bg-opacity-90 flex flex-col items-center gap-6 py-6 md:hidden'>
          <a href='#' className='hover:text-blue-400' onClick={() => setMenuOpen(false)}>Home</a>
          <a className='hover:text-blue-400 cursor-pointer' onClick={() => { onAboutClick(); setMenuOpen(false); }}>About</a>
          <a className='hover:text-blue-400 cursor-pointer' onClick={() => { onSkillsClick(); setMenuOpen(false); }}>Skills</a>
          <a className='hover:text-blue-400 cursor-pointer' onClick={() => { onFeaturedProjectsClick(); setMenuOpen(false); }}>Projects</a>
          <a className='hover:text-blue-400 cursor-pointer' onClick={() => { onContactClick(); setMenuOpen(false); }}>Contact</a>
        </nav>
      )}

      {/* Hamburger Icon */}
      <button
        className='md:hidden text-white focus:outline-none'
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>

    </div>
  )
}

export default Navbar