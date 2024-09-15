import Link from 'next/link'
import WeatherWidget from './WeatherWidget'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Guestbook', href: '/guestbook' },
  { name: 'About', href: '/about' },
  { name: 'Dashboard', href: '/dashboard' },
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
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            {/* Weather Widget */}
            <div className="w-full md:w-auto mb-8 md:mb-0">
              <WeatherWidget />
            </div>
            
            {/* Links */}
            <div className="w-full md:w-auto flex-grow flex justify-center">
              <div className="grid grid-cols-2 gap-x-16 gap-y-4">
                <div>
                  {navItems.map((item) => (
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
            </div>
            
            {/* Spacer for balance */}
            <div className="hidden md:block w-full md:w-auto">
              <div className="w-[256px]"></div> {/* Adjust width to match WeatherWidget */}
            </div>
          </div>
          
          {/* Copyright Notice */}
          <div className="text-sm text-gray-600 dark:text-gray-300 text-center mt-8">
            © 2024 Kemel Callisaya
          </div>
        </div>
      </div>
    </footer>
  )
}
