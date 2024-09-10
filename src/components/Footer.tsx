import Link from 'next/link'
import { FaSpotify } from 'react-icons/fa'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog' },
  { name: 'Guestbook', href: '/guestbook' },
  { name: 'About', href: '/about' },
  { name: 'Dashboard', href: '/dashboard' },
]

const otherLinks = [
  { name: 'Guestbook', href: '/guestbook' },
  { name: 'Uses', href: '/uses' },
  { name: 'Projects', href: '/projects' },
  { name: 'Links', href: '/links' },
]

const socialLinks = [
  { name: 'Facebook', href: '#' },
  { name: 'Instagram', href: '#' },
  { name: 'GitHub', href: '#' },
  { name: 'YouTube', href: '#' },
]

export default function Footer() {
  return (
    <footer className="mt-20 pb-4 px-4">
      <div className="max-w-6xl mx-auto bg-white/50 dark:bg-black/50 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
          <div className="flex items-center mb-8">
            <FaSpotify className="text-green-500 mr-2" />
            <span className="text-sm text-gray-600 dark:text-gray-300">Not Listening - Spotify</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              {navItems.map((item) => (
                <Link key={item.name} href={item.href} className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white mb-2">
                  {item.name}
                </Link>
              ))}
            </div>
            <div>
              {otherLinks.map((item) => (
                <Link key={item.name} href={item.href} className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white mb-2">
                  {item.name}
                </Link>
              ))}
            </div>
            <div>
              {socialLinks.map((item) => (
                <Link key={item.name} href={item.href} className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white mb-2">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300 text-left">
            © 2024 Kemel Callisaya
          </div>
        </div>
      </div>
    </footer>
  )
}
