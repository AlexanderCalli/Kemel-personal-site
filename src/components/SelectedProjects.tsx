import Link from 'next/link'
import { ProjectCard } from './ProjectCard'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export default async function SelectedProjects() {
  const supabase = createServerComponentClient({ cookies })
  const { data: projects, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(2)

  if (error) {
    console.error('Error fetching projects:', error)
    return null
  }

  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold mb-12 text-center">Selected Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div key={project.id} className="bg-white dark:bg-black/50 rounded-lg p-1 shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] dark:shadow-[0_0_10px_2px_rgba(255,255,255,0.1)]">
            <ProjectCard
              title={project.title}
              description={project.description}
              imageSrc={project.image_url}
              projectLink={project.project_link}
            />
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link href="/projects" className="inline-block px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-full text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          See all projects
        </Link>
      </div>
    </section>
  )
}