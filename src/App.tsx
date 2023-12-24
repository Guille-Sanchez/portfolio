import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import ProjectsGrid from './components/projectsGrid/ProjectsGrid'
import './homepage.css'
import AboutMe from './components/aboutMe/AboutMe'
import { DarkModeProvider } from '../src/context/darkMode'
import { WorkExperience } from './components/workExperience/WorkExperience'

function App (): JSX.Element {
  return (
    <DarkModeProvider>
      <Header />

      <main>
        <AboutMe />
        <WorkExperience />
        <ProjectsGrid />
      </main>

      <Footer />
    </DarkModeProvider>
  )
}

export default App
