import Card from "../components/Card"
import LinkButton from "../components/LinkButton"
import StyleButton from "../components/StyleButton"


const FeaturedProjects = ({ projects }) => {
  return (
    <>
      <h2>Featured Projects</h2>
      {projects.map((proj) => {
        return (
          <>
            <Card 
              key={proj.name}
              title={proj.name}
              text={proj.bio}
              />
            <StyleButton 
              text={proj.tags.join(", ")}
              />
            <LinkButton 
              key={proj.netlify}
              link={proj.netlify}
              linkUse="Live Demo"
              />
            <LinkButton 
              key={proj.github}
              link={proj.github}
              linkUse="View Code"
              />
          </>
        )
      })}
    </>
  )
}

export default FeaturedProjects