"use client";

import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { MdLocationOn } from 'react-icons/md'
import { HiLink } from 'react-icons/hi'
import { IoFlashOutline, IoTimeOutline } from 'react-icons/io5'
import { AiOutlineHeart } from 'react-icons/ai'
import dynamic from 'next/dynamic'

const Globe = dynamic(() => import('./Globe'), { ssr: false })

const IconRow = ({ icons, direction }: { icons: any[], direction: 'left' | 'right' }) => (
  <div className="flex overflow-hidden">
    <div className={`flex ${direction === 'left' ? 'animate-scroll' : 'animate-scroll-reverse'}`}>
      {[...icons, ...icons].map((icon, index) => (
        <div key={index} className="w-12 h-12 flex-shrink-0 mx-2">
          <Image
            src={icon.src}
            alt={icon.alt}
            width={48}
            height={48}
            className="w-full h-full object-contain dark:filter dark:grayscale dark:invert"
          />
        </div>
      ))}
    </div>
    <div className={`flex ${direction === 'left' ? 'animate-scroll' : 'animate-scroll-reverse'}`} aria-hidden="true">
      {[...icons, ...icons].map((icon, index) => (
        <div key={`duplicate-${index}`} className="w-12 h-12 flex-shrink-0 mx-2">
          <Image
            src={icon.src}
            alt={icon.alt}
            width={48}
            height={48}
            className="w-full h-full object-contain dark:filter dark:grayscale dark:invert"
          />
        </div>
      ))}
    </div>
  </div>
);

export default function AboutMe() {
  const techStackIcons = [
    { src: '/icons/JavaScript.png', alt: 'JavaScript' },
    { src: '/icons/TypeScript.png', alt: 'TypeScript' },
    { src: '/icons/React.png', alt: 'React' },
    { src: '/icons/Python.png', alt: 'Python' },
    { src: '/icons/Azure.png', alt: 'Azure' },
    { src: '/icons/HTML5.png', alt: 'HTML5' },
    { src: '/icons/Next.js.png', alt: 'Next.js' },
    { src: '/icons/Git.png', alt: 'Git' },
    { src: '/icons/Haskell.png', alt: 'Haskell' },
    { src: '/icons/Github.png', alt: 'Github' },
    { src: '/icons/Express.png', alt: 'Express' },
    { src: '/icons/Java.png', alt: 'Java' },
    { src: '/icons/JavaScript.png', alt: 'JavaScript' },
    { src: '/icons/TypeScript.png', alt: 'TypeScript' },
    { src: '/icons/React.png', alt: 'React' },
    { src: '/icons/Python.png', alt: 'Python' },
    { src: '/icons/Azure.png', alt: 'Azure' },
    { src: '/icons/HTML5.png', alt: 'HTML5' },
    { src: '/icons/Next.js.png', alt: 'Next.js' },
    { src: '/icons/Git.png', alt: 'Git' },
    { src: '/icons/Haskell.png', alt: 'Haskell' },
    { src: '/icons/Github.png', alt: 'Github' },
    { src: '/icons/Express.png', alt: 'Express' },
    { src: '/icons/Java.png', alt: 'Java' },
  ];

  const frameworkIcons = [
    { src: '/icons/Next.js.png', alt: 'Next.js' },
    { src: '/icons/PostgresSQL.png', alt: 'PostgresSQL' },
    { src: '/icons/Node.js.png', alt: 'Node.js' },
    { src: '/icons/Scala.png', alt: 'Scala' },
    { src: '/icons/Visual-Studio.png', alt: 'Visual Studio' },
    { src: '/icons/Anaconda.png', alt: 'Anaconda' },
    { src: '/icons/Cypress.png', alt: 'Cypress' },
    { src: '/icons/Docker.png', alt: 'Docker' },
    { src: '/icons/Selenium.png', alt: 'Selenium' },
    { src: '/icons/Python.png', alt: 'Python' },
    { src: '/icons/Tailwind-CSS.png', alt: 'Tailwind' },
    { src: '/icons/HTML5.png', alt: 'HTML5' }, 
    { src: '/icons/Next.js.png', alt: 'Next.js' },
    { src: '/icons/PostgresSQL.png', alt: 'PostgresSQL' },
    { src: '/icons/Node.js.png', alt: 'Node.js' },
    { src: '/icons/Scala.png', alt: 'Scala' },
    { src: '/icons/Visual-Studio.png', alt: 'Visual Studio' },
    { src: '/icons/Anaconda.png', alt: 'Anaconda' },
    { src: '/icons/Cypress.png', alt: 'Cypress' },
    { src: '/icons/Docker.png', alt: 'Docker' },
    { src: '/icons/Selenium.png', alt: 'Selenium' },
    { src: '/icons/Python.png', alt: 'Python' },
    { src: '/icons/Tailwind-CSS.png', alt: 'Tailwind' },
    { src: '/icons/HTML5.png', alt: 'HTML5' }
  ];

  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-8">
          {/* Location and Globe */}
          <div className="bg-white dark:bg-black/50 rounded-lg p-4 shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] dark:shadow-[0_0_10px_2px_rgba(255,255,255,0.1)]">
            <div className="flex items-center mb-4">
              <MdLocationOn className="mr-2" />
              <span>La Paz, Bolivia</span>
            </div>
            <div className="w-full aspect-square">
              <Globe />
            </div>
          </div>

          {/* Stacks */}
          <div className="bg-white dark:bg-black/50 rounded-lg p-4 shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] dark:shadow-[0_0_10px_2px_rgba(255,255,255,0.1)]">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <IoFlashOutline className="mr-2" />
              Stacks
            </h3>
            <IconRow icons={techStackIcons} direction="left" />
            <div className="my-4" /> {/* Spacer */}
            <IconRow icons={frameworkIcons} direction="right" />
          </div>
        </div>

        <div className="space-y-8">
          {/* Connect */}
          <div className="bg-white dark:bg-black/50 rounded-lg p-4 shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] dark:shadow-[0_0_10px_2px_rgba(255,255,255,0.1)]">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <HiLink className="mr-2" />
              Connect
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
                  <FaGithub className="mr-3 text-xl" /> GitHub
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
                  <FaFacebook className="mr-3 text-xl" /> Facebook
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
                  <FaInstagram className="mr-3 text-xl" /> Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
                  <FaXTwitter className="mr-3 text-xl" /> X
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
                  <FaYoutube className="mr-3 text-xl" /> YouTube
                </Link>
              </li>
            </ul>
          </div>

          {/* Coding hours */}
          <div className="bg-white dark:bg-black/50 rounded-lg p-4 shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] dark:shadow-[0_0_10px_2px_rgba(255,255,255,0.1)]">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <IoTimeOutline className="mr-2" />
              Coding hours
            </h3>
            <p className="text-3xl font-bold">2267 hrs</p>
          </div>

          {/* Favorite framework */}
          <div className="bg-white dark:bg-black/50 rounded-lg p-4 shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] dark:shadow-[0_0_10px_2px_rgba(255,255,255,0.1)]">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <AiOutlineHeart className="mr-2" />
              Fav. framework
            </h3>
            <div className="w-16 h-16 flex items-center justify-center">
              <Image
                src="/icons/Next.js.png"
                alt="Next.js"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}