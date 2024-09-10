'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { GiArrowCursor } from "react-icons/gi";
import { Button } from "@/components/ui/button";

const technologies = ['JavaScript', 'TypeScript', 'Next.js', 'React.js']

export default function TechCursorAnimation() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        const randomTech = technologies[Math.floor(Math.random() * technologies.length)]
        const techElement = containerRef.current.querySelector(`[data-tech="${randomTech}"]`)
        if (techElement) {
          const rect = techElement.getBoundingClientRect()
          const containerRect = containerRef.current.getBoundingClientRect()
          setCursorPosition({
            x: rect.left - containerRect.left + rect.width / 2,
            y: rect.top - containerRect.top + 20,
          })
          setHoveredTech(randomTech)
        }
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="py-20">
      <h2 className="text-4xl font-bold mb-12 text-center">Any questions about Next.js?</h2>
      <div className="max-w-2xl mx-auto relative" ref={containerRef}>
        <motion.div
          className="absolute pointer-events-none"
          animate={cursorPosition}
          transition={{ type: 'spring', stiffness: 100, damping: 15 }}
        >
          <GiArrowCursor size={30} />
        </motion.div>
        <div className="grid grid-cols-2 gap-4 pt-8">
          {technologies.map((tech) => (
            <Button
              key={tech}
              data-tech={tech}
              size="sm"
              className={`rounded-full text-black dark:text-white font-semibold text-sm bg-transparent hover:bg-accent/50 ${
                hoveredTech === tech ? 'bg-accent/30' : ''
              }`}
              style={{
                border: '2px solid #9CA3AF',
                padding: '0.25rem 0.5rem',
              }}
              onMouseEnter={() => setHoveredTech(tech)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              {tech}
            </Button>
          ))}
        </div>
        <p className="mt-8 text-center text-gray-600 dark:text-gray-400">
          Feel free to reach out to me! I&apos;m available for collaboration.
        </p>
        <div className="mt-4 text-center">
          <Button
            variant="destructive"
            className="py-2 px-6 rounded-full font-semibold"
            asChild
          >
            <a href="mailto:me@honghong.me">kemel.callisaya29@gmail.com</a>
          </Button>
        </div>
      </div>
    </div>
  )
}