import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { ProjectCard } from '@/components/ProjectCard'

export const revalidate = 3600 // revalidate every hour

export default async function ProjectsPage() {
  const supabase = createServerComponentClient({ cookies })
  const { data: projects, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching projects:', error)
    return <div>Error loading projects</div>
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">All Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imageSrc={project.image_url}
            projectLink={project.project_link}
          />
        ))}
      </div>
    </div>
  )
}