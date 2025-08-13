'use client'
import React from 'react'
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import FeaturedProjects from '@/components/FeaturedProjects';
import Contact from '@/components/Contact';
import ReachMe from '@/components/ReachMe';
import { useRef } from 'react';

const page = () => {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const featuredProjectsRef = useRef(null);
  const contactRef = useRef(null);
  const reachMeRef = useRef(null);

  return (
    <div className='min-h-screen transition duration-500 bg-gradient-to-b from-slate-900 to-purple-900 dark:from-slate-900 dark:to-purple-900 text-white dark:text-white'>

      <div>
        <Navbar onAboutClick={() => aboutRef.current?.scrollIntoView({ behavior: 'smooth' })}
          onSkillsClick={() => skillsRef.current?.scrollIntoView({ behavior: 'smooth' })}
          onFeaturedProjectsClick={() => featuredProjectsRef.current?.scrollIntoView({ behavior: 'smooth' })}
          onContactClick={() => contactRef.current?.scrollIntoView({ behavior: 'smooth' })}
        />
      </div>

      <div>
        <Hero
          onArrowClick={() => aboutRef.current?.scrollIntoView({ behavior: 'smooth' })}
          onGetInTouchClick={() => contactRef.current?.scrollIntoView({ behavior: 'smooth' })}
          onViewMyWorkClick={() => featuredProjectsRef.current?.scrollIntoView({ behavior: 'smooth' })}
        />
      </div>

      <div ref={aboutRef}>
        <About />
      </div>

      <div ref={skillsRef}>
        <Skills />
      </div>

      <div ref={featuredProjectsRef}>
        <FeaturedProjects />
      </div>

      <div ref={contactRef}>
        <Contact onSendMessageClick={() => reachMeRef.current?.scrollIntoView({ behavior: 'smooth' })} />
      </div>

      <div ref={reachMeRef}>
        <ReachMe />
      </div>

    </div>
  )
}

export default page
