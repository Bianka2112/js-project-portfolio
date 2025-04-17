import Card from "../components/Card"
import LinkButton from "../components/LinkButton"
import StyleButton from "../components/StyleButton"
import { IconsList } from "../components/SocialIcons"


const FeaturedProjects = ({ projects }) => {
  return (
    <>
      <h2>Featured Projects</h2>
      {projects.map((proj) => {
        return (
          <div key={proj.name}>
            <Card 
              title={proj.name}
              text={proj.bio}
              />
            <StyleButton 
              text={proj.tags.join(", ")}
              />
            <LinkButton 
              $primary
              link={proj.netlify}
              IconComponent={IconsList.web}
              linkUse="Live Demo"
              />
            <LinkButton 
              link={proj.github}
              IconComponent={IconsList.github}
              linkUse="View Code"
              />
          </div>
        )
      })}
    </>
  )
}

export default FeaturedProjects