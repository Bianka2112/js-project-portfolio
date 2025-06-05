import projects from "./data/projects.json"
import skills from "./data/skills.json"
import FeaturedProjects from "./sections/FeaturedProjects"
import Footer from "./sections/Footer"
import Header from "./sections/Header"
import Skills from "./sections/Skills"
import Tech from "./sections/Tech"
import { GlobalStyle } from "./styles/GlobalStyle"

const App = () => {
  return (
    <>
    <GlobalStyle />
      <Header />
      <Tech />
      <FeaturedProjects 
        projects={projects.projects} />
        <Skills 
          skills={skills.skills}/>
      <Footer />
    </>
  )
}

export default App