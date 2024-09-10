import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">About</h1>
      <p className="mb-8">👋 Hi there! I am Kemel, a developer who loves web development.</p>

      <h2 className="text-2xl font-bold mb-4">WHO AM I</h2>
      <p className="mb-4">
        I&apos;m a Full Stack Developer in La Paz, Bolivia. I am learning TypeScript, Next.js, React.js, Node.js, and database management.
        Now, I have a passion for learning UI/UX.
      </p>
      <p className="mb-8">
        I started learning web development in 2019. I am self-learning on YouTube. One of my favorite YouTube channels is [Your Favorite Channel], I
        learned a lot of web development skills from them.
      </p>
      <p className="mb-8">
        I love using Next.js to create a website. Then use GitHub to host my codebase. After that, I use Vercel to deploy my website.
      </p>

      <h2 className="text-2xl font-bold mb-4">About this site</h2>
      <ul className="list-disc list-inside mb-8">
        <li>Framework: Next.js</li>
        <li>Database: Supabase</li>
        <li>ORM: Prisma</li>
        <li>Authentication: NextAuth.js</li>
        <li>Deployment: Vercel</li>
        <li>Content: MDX</li>
        <li>Analytics: Umami</li>
        <li>Styling: Tailwind CSS</li>
        <li>Code syntax highlighting: Shiki</li>
      </ul>

      <p className="mb-8">
        Thanks to [Your Inspiration] for the [Inspiration Source]. It helped me when I didn&apos;t have any idea how to create a blog from
        scratch. My code isn&apos;t like the starter code because I changed a lot of code :)
      </p>

      <h2 className="text-2xl font-bold mb-4">Inspiration</h2>
      <p className="mb-8">
        Here are some websites that inspired me a lot to build a fantastic website.
        Refer to README
      </p>

      <h2 className="text-2xl font-bold mb-4">Social links</h2>
      <ul className="list-disc list-inside mb-8">
        <li><Link href="#" className="text-blue-500 hover:underline">GitHub</Link></li>
        <li><Link href="#" className="text-blue-500 hover:underline">Facebook</Link></li>
        <li><Link href="#" className="text-blue-500 hover:underline">Instagram</Link></li>
        <li><Link href="#" className="text-blue-500 hover:underline">X</Link></li>
        <li><Link href="#" className="text-blue-500 hover:underline">YouTube</Link></li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Logo</h2>
      <div className="flex space-x-4 mb-8">
        <div className="bg-white p-4">
          <Image src="/your-logo.svg" alt="Logo" width={100} height={100} />
        </div>
        <div className="bg-black p-4">
          <Image src="/your-logo-white.svg" alt="Logo" width={100} height={100} />
        </div>
      </div>
    </div>
  )
}