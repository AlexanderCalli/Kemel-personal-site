import Hero from '@/components/Hero'
import SelectedProjects from '@/components/SelectedProjects'
import AboutMe from '@/components/AboutMe'
import LatestArticles from '@/components/LatestArticles'

export default function Home() {
  return (
    <div>
      <Hero />
      <SelectedProjects />
      <AboutMe />
      <LatestArticles />
    </div>
  )
}
