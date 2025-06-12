"use client"
import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Profile from './pages/Profile'
import Skill from './pages/Skills'
import Project from './pages/Project'

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
    }
    // Add more sections as needed
  ]

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

  return (
    <div className="">
      {sections.map((section, index) => (
        <motion.section
          key={section.id}
          id={section.id}
          ref={section.ref}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="h-screen"
        >
          <section.component view={visibleSection} id={section.id}/>
        </motion.section>
      ))}
    </div>
  )
}

export default ScrollSections