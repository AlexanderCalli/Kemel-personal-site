import Hero from '@/components/Hero'
import SelectedProjects from '@/components/SelectedProjects'
import AboutMe from '@/components/AboutMe'
// Remove or comment out the import for LatestArticles
// import LatestArticles from '@/components/LatestArticles'

export default function Home() {
  return (
    <div>
      <Hero />
      <SelectedProjects />
      <AboutMe />
      {/* Remove or comment out the LatestArticles component */}
      {/* <LatestArticles /> */}
    </div>
  )
}
