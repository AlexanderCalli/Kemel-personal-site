'use client'

import { usePathname } from 'next/navigation'
import TechCursorAnimation from './TechCursorAnimation'

export default function ConditionalTechCursorAnimation() {
  const pathname = usePathname()
  if (pathname === '/') {
    return <TechCursorAnimation />
  }
  return null
}