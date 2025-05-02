import Header from "./sections/Header"
import Tech from "./sections/Tech"
import FeaturedProjects from "./sections/FeaturedProjects"
import projects from "./data/projects.json"
import Skills from "./sections/Skills"
import skills from "./data/skills.json"
import Footer from "./sections/Footer"
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