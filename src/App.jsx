import projects from "./data/projects.json"
import skills from "./data/skills.json"
import articles from "./data/articles.json"
import FeaturedProjects from "./sections/FeaturedProjects"
import Footer from "./sections/Footer"
import Header from "./sections/Header"
import Skills from "./sections/Skills"
import Tech from "./sections/Tech"
import Reflections from "./sections/Reflections"
import { GlobalStyle } from "./styles/GlobalStyle"
import { ThemeProvider } from "styled-components"
import { theme } from "./styles/theme"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <GlobalStyle />
      <Header />
      <Tech />
      <FeaturedProjects 
        projects={projects.projects} />
        <Skills 
          skills={skills.skills}/>
      <Reflections 
        articles={articles.articles}/>
      <Footer />
    </ThemeProvider>
  )
}

export default App