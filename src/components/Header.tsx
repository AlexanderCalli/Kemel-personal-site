'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiMoon } from "react-icons/fi"
import { PiSignIn } from "react-icons/pi";
import { RiComputerLine } from "react-icons/ri"
import { useState, useEffect } from 'react'
import { IoSunnyOutline } from "react-icons/io5"
import { CgMenuRound } from "react-icons/cg"
import { supabase } from '@/lib/supabase'
import { User } from '@supabase/supabase-js'
import Image from 'next/image'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

import { SignInModal } from './SignInModal'

const navItems = [
  { name: 'Blog', path: '/blog' },
  { name: 'Guestbook', path: '/guestbook' },
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Projects', path: '/projects' },
  { name: 'About', path: '/about' },
  { name: 'Uses', path: '/uses' },
]

export default function Header() {
  const [hovered, setHovered] = useState('')
  const [user, setUser] = useState<User | null>(null)
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false)

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null)
    })

    return () => {
      authListener.subscription.unsubscribe()
    }
  }, [])

  const handleSignIn = async (provider: 'github' | 'google') => {
    await supabase.auth.signInWithOAuth({
      provider: provider,
      options: {
        redirectTo: `${window.location.origin}/auth/callback`
      }
    })
    setIsSignInModalOpen(false)
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
  }

  const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode')
  }

  const toggleTheme = (theme: 'light' | 'dark') => {
    if (theme === 'light') {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    } else {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    }
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-6">
      <motion.header 
        className="mx-auto max-w-[98%] bg-white/50 dark:bg-black/50 backdrop-blur-sm rounded-lg"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="flex justify-between items-center px-6 py-2">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/kemel-logo-light.png"
              alt="Kemel Logo"
              width={40}
              height={40}
              className="block dark:hidden" // Show in light mode, hide in dark mode
            />
            <Image
              src="/kemel-logo-dark.png"
              alt="Kemel Logo"
              width={40}
              height={40}
              className="hidden dark:block" // Hide in light mode, show in dark mode
            />
          </Link>
          <ul className="flex space-x-6 flex-grow justify-center">
            {navItems.map((item) => (
              <motion.li
                key={item.name}
                onHoverStart={() => setHovered(item.name)}
                onHoverEnd={() => setHovered('')}
                className="flex-shrink-0"
              >
                <Link
                  href={item.path}
                  className={`text-sm text-gray-600 dark:text-gray-300 transition-transform duration-200 ${
                    hovered === item.name ? 'scale-105 text-gray-900 dark:text-white' : 'hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
          <div className="flex items-center space-x-4 flex-shrink-0">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-2xl text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors w-8 h-8 flex items-center justify-center">
                  <IoSunnyOutline />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="absolute right-0 mt-2 w-56" align="end" sideOffset={5}>
                <DropdownMenuItem onClick={() => toggleTheme('light')}><IoSunnyOutline /> Light</DropdownMenuItem>
                <DropdownMenuItem onClick={() => toggleTheme('dark')}><FiMoon /> Dark</DropdownMenuItem>
                <DropdownMenuItem><RiComputerLine />System</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Dialog>
              <DialogTrigger>
                <CgMenuRound className="text-2xl text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors" />
              </DialogTrigger>
              <DialogContent>
                <Command>
                  <CommandInput placeholder="Type a command or search..." />
                  <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Account">
                      {user ? (
                        // If user is signed in, show Sign Out option
                        <CommandItem onSelect={handleSignOut}><PiSignIn />Sign Out</CommandItem>
                      ) : (
                        // If user is not signed in, show Sign In options
                        <CommandItem onSelect={() => setIsSignInModalOpen(true)}><PiSignIn />Sign In</CommandItem>
                      )}
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="General">
                      <CommandItem>Copy Link</CommandItem>
                      <CommandItem>Source Code</CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Social">
                      <CommandItem>Github</CommandItem>
                      <CommandItem>Facebook</CommandItem>
                      <CommandItem>Instagram</CommandItem>
                      <CommandItem>X</CommandItem>
                      <CommandItem>Youtube</CommandItem>

                    </CommandGroup>
                  </CommandList>
                </Command>
              </DialogContent>
            </Dialog>
            <SignInModal 
              isOpen={isSignInModalOpen} 
              onClose={() => setIsSignInModalOpen(false)} 
              onSignIn={handleSignIn}
            />
          </div>
        </nav>
      </motion.header>
    </div>
  )
}
