import About from '../components/About'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import ProjectSection from '../components/ProjectSection'

function HomePage() {
  return (
    <main>
      <Hero />
      <div id="work">
        <ProjectSection category="web" />
        <ProjectSection category="mobile" />
      </div>
      <About />
      <Contact />
    </main>
  )
}

export default HomePage
