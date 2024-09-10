import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  projectLink: string;
}

export function ProjectCard({ title, description, imageSrc, projectLink }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg">
      <Image 
        src={imageSrc} 
        alt={title} 
        width={600} 
        height={400} 
        className="object-cover w-full h-[300px] transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-sm mb-4">{description}</p>
      </div>
    </div>
  )
}