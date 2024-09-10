'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const words = ['fantastic', 'amazing', 'stunning']

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 1500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20">
      <div className="flex items-start justify-between">
        <div className="space-y-4"> {/* Added space-y-4 for consistent vertical spacing */}
          <h1 className="text-3xl md:text-4xl font-bold">
            I&apos;m Kemel, a Full Stack Developer
          </h1>
          <div className="text-3xl md:text-4xl font-bold flex items-start">
            creating{' '}
            <span className="relative inline-block w-[200px]">
              <span className="absolute left-0 right-0 h-[1.2em] overflow-hidden">
                {words.map((word, i) => (
                  <motion.span
                    key={word}
                    className={`absolute left-0 right-0 text-center bg-clip-text text-transparent bg-gradient-to-r ${getGradient(i)}`}
                    initial={{ y: '100%' }}
                    animate={{ y: i === index ? '0%' : '-100%' }}
                    transition={{ duration: 0.5, ease: 'bounceIn', type: 'spring' }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span> 
            </span>
            websites using
          </div>
          <div className="text-3xl md:text-4xl font-bold">
            React.
          </div>
          <p className="text-gray-600 text-sm">La Paz, Bolivia · UTC-04:00</p>
        </div>
        
        <motion.div 
          className="ml-8 -mt-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Image
            src="/placeholder-avatar.png"
            alt="Kemel's Avatar"
            width={120}
            height={120}
            className="rounded-full"
          />
        </motion.div>
      </div>
    </section>
  )
}

function getGradient(index: number) {
  const gradients = [
    'from-blue-500 to-purple-500',
    'from-green-500 to-blue-500',
    'from-yellow-500 to-red-500'
  ]
  return gradients[index % gradients.length]
}