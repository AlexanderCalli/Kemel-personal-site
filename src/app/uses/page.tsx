import Image from 'next/image'

export default function UsesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Uses</h1>
      <p className="mb-8 text-gray-600">This is the equipment I currently use for gaming, programming, making videos, and more.</p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Laptop</h2>
        <div className="bg-gray-100 rounded-lg overflow-hidden">
          <Image src="/uses/lenova_t15.jpg" alt="Lenovo ThinkPad T14 Gen 1" width={800} height={400} className="w-full" />
        </div>
        <p className="mt-2 text-sm text-gray-600">Lenovo ThinkPad T14 Gen 1</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Accessories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {[
            { name: 'iPhone 13 Pro', image: '/uses/iphone-13-pro.webp' },
            { name: 'Galaxy Buds 3', image: '/uses/galaxy_buds.webp' },
          ].map((item, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
              <div className="aspect-square relative">
                <Image 
                  src={item.image} 
                  alt={item.name} 
                  layout="fill" 
                  objectFit="cover"
                  className="p-4"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-sm">{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Gaming PC - Hardware</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {[
            { name: 'LG 27GP950-B', image: '/uses/monitor.webp' },
            { name: 'Logitech G502 HERO', image: '/uses/mouse.webp' },
            { name: 'Keychron K3 Pro', image: '/uses/keyboard.webp' },
            { name: 'Ryzen 7 7800 X3D', image: '/uses/micro.jpg' },
            { name: 'AORUS ELITE B650 AX', image: '/uses/mother.jpg' },
            { name: 'MSI RTX 4070ti', image: '/uses/graphic.jpg' },
            { name: 'SAMSUNG 980 Pro 2TB', image: '/uses/ssd.jpg' },
            { name: 'Cooler Master H410RThermalright Peerless Assassin 120', image: '/uses/fan.jpg' },
            { name: 'FSP 700W', image: '/uses/energy.webp' },
            { name: 'G.SKILL TridentZ RGB Series 64GB', image: '/uses/ram.jpg' },
            { name: 'MATREXX 50 - DeepCool', image: '/uses/case.webp' },
          ].map((item, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
              <div className="aspect-square relative">
                <Image 
                  src={item.image} 
                  alt={item.name} 
                  layout="fill" 
                  objectFit="cover"
                  className="p-4"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-sm">{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Software Stacks</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {[
            { name: 'JavaScript', image: '/icons/JavaScript.png' },
            { name: 'TypeScript', image: '/icons/TypeScript.png' },
            { name: 'React', image: '/icons/React.png' },
            { name: 'Python', image: '/icons/Python.png' },
            { name: 'Azure', image: '/icons/Azure.png' },
            { name: 'HTML5', image: '/icons/HTML5.png' },
            { name: 'Next.js', image: '/icons/Next.js.png' },
            { name: 'Git', image: '/icons/Git.png' },
            { name: 'Haskell', image: '/icons/Haskell.png' },
            { name: 'Github', image: '/icons/GitHub.png' },
            { name: 'Express', image: '/icons/Express.png' },
            { name: 'Java', image: '/icons/Java.png' },
            { name: 'PostgresSQL', image: '/icons/PostgresSQL.png' },
            { name: 'Node.js', image: '/icons/Node.js.png' },
            { name: 'Scala', image: '/icons/Scala.png' },
            { name: 'Visual Studio', image: '/icons/Visual-Studio.png' },
            { name: 'Anaconda', image: '/icons/Anaconda.png' },
            { name: 'Cypress', image: '/icons/Cypress.png' },
            { name: 'Docker', image: '/icons/Docker.png' },
            { name: 'Selenium', image: '/icons/Selenium.png' },
            { name: 'Tailwind CSS', image: '/icons/Tailwind-CSS.png' },
          ].map((item, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
              <div className="aspect-square relative">
                <Image 
                  src={item.image} 
                  alt={item.name} 
                  layout="fill" 
                  objectFit="contain"
                  className="p-4"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-sm text-center">{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}