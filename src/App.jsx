// import Card from "./components/Card"
import "./App.css"
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

{/* <header>
  <img src="./public/react.svg" width="40px" />
</header>
<h1>Vite project</h1>
<ol>
  <li> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, dignissimos?</li>
  <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, provident!</li>
</ol>

<Card
  title="My first card"
  text="My first text"
/>
<Card
  title="My second card"
  text="My second text"
/>
<footer>
  <small> 2025. All rights reserved</small>
</footer> */}