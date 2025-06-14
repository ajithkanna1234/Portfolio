"use client"
import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Profile from './pages/Profile'
import Skill from './pages/Skills'
import Project from './pages/Project'
import Contact from './pages/Contact'
import { ArrowBigUpDash, ArrowDown, ArrowUp } from 'lucide-react'

const ScrollSections = () => {
  const sectionRefs = useRef([])
  const [visibleSection, setVisibleSection] = useState(null)

  // Define your sections data
  const sections = [
    {
      id: 'profile',
      component: Profile,
      ref: (el) => (sectionRefs.current[0] = el)
    },
    {
      id: 'skills',
      component: Skill,
      ref: (el) => (sectionRefs.current[1] = el)
    },
    {
      id: 'projects',
      component: Project,
      ref: (el) => (sectionRefs.current[2] = el)
    },
    {
      id: 'contacts',
      component: Contact,
      ref: (el) => (sectionRefs.current[3] = el)
    },
    // Add more sections as needed
  ]
  const handleScroll = () => {
    const currentIndex = sections.findIndex(section => section.id === visibleSection)
    
    if (currentIndex === -1) {
      // If no section is visible (at the very top), scroll to the first section
      sectionRefs.current[0]?.scrollIntoView({ behavior: 'smooth' })
    } else if (currentIndex === sections.length - 1) {
      // If at the last section, scroll to the first section (loop)
      sectionRefs.current[0]?.scrollIntoView({ behavior: 'smooth' })
    } else {
      // Scroll to the next section
      sectionRefs.current[currentIndex + 1]?.scrollIntoView({ behavior: 'smooth' })
    }
  }
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    // Observe all sections
    sectionRefs.current.forEach(ref => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])
  // Determine which arrow to show
  const currentIndex = sections.findIndex(section => section.id === visibleSection)
  const showUpArrow = currentIndex > 0
  const showDownArrow = currentIndex < sections.length - 1 || currentIndex === -1
  return (
    <div className="grid gap-4">
      {sections.map((section, index) => (
        <motion.section
          key={section.id}
          id={section.id}
          ref={section.ref}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen"
        >
          <section.component view={visibleSection} id={section.id}/>
        </motion.section>
      ))}
      {showUpArrow &&
      <ArrowUp className='text-white bg-transparent backdrop-blur-lg rounded-full size-7 fixed left-1/2 right-1/2 bottom-2 z-50' onClick={handleScroll}/>}
      {showDownArrow && <ArrowDown className='text-white bg-transparent backdrop-blur-lg rounded-full size-7 fixed left-1/2 right-1/2 bottom-2 z-50' onClick={handleScroll}/>
}
    </div>
  )
}

export default ScrollSections