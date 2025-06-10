"use client"
import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Profile from './pages/Profile'
import Skill from './pages/Skills'

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
    <div className="space-y-20">
      {sections.map((section, index) => (
        <motion.section
          key={section.id}
          id={section.id}
          ref={section.ref}
          initial={{ opacity: 0 }}
          animate={{ opacity: visibleSection === section.id ? 1 : 0.5 }}
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