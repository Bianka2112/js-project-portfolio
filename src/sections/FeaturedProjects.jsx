import Card from "../components/Card"
import LinkButton from "../components/LinkButton"


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
              text={proj.tags.join(", ")}
              />
            <LinkButton 
              link={proj.netlify}
              linkUse="Live Demo"
              />
            <LinkButton 
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