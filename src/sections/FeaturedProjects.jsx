import Card from "../components/Card"
import LinkButton from "../components/LinkButton"
import StyleButton from "../components/StyleButton"
import { IconsList } from "../components/SocialIcons"
import styled from "styled-components"
import { media } from "../styles/media"

const FeaturedSection = styled.section`
  padding: 64px 16px;
`

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 48px;

  @media ${media.desktop} {
    font-size: 80px;
  }
`

const FeaturedProjects = ({ projects }) => {
  return (
    <FeaturedSection>
      <SectionTitle>Featured Projects</SectionTitle>
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
    </FeaturedSection>
  )
}

export default FeaturedProjects