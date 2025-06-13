"use client"
import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Profile from './pages/Profile'
import Skill from './pages/Skills'
import Project from './pages/Project'
import Contact from './pages/Contact'
import { ArrowBigUpDash } from 'lucide-react'

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
    const currentIndex = sectionRefs.current.findIndex(ref => ref && ref.id === visibleSection)
    if (currentIndex > 0) {
      sectionRefs.current[currentIndex - 1].scrollIntoView({ behavior: 'smooth' })
    } else {
      sectionRefs.current[0].scrollIntoView({ behavior: 'smooth' })
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
          className="min-h-screen"
        >
          <section.component view={visibleSection} id={section.id}/>
        </motion.section>
      ))}
      <ArrowBigUpDash className='bg-white rounded-full size-10 fixed left-1/2 right-1/2 bottom-2 z-50' onClick={handleScroll}/>
    </div>
  )
}

export default ScrollSections