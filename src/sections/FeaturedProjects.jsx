import Card from "../components/Card"
import LinkButton from "../components/LinkButton"
import StyleButton from "../components/StyledTags"
import { IconsList } from "../components/SocialIcons"
import styled from "styled-components"
import { media } from "../styles/media"

const FeaturedSection = styled.section`
  padding: 64px 16px;

  @media ${media.tablet} {
    padding: 64px 24px;
  }
  
  @media ${media.desktop} {
    padding: 128px;
  }
`

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 48px;

  @media ${media.desktop} {
    font-size: 80px;
  }
`

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 64px;
  gap: 32px;

  @media ${media.desktop} {
    padding-top: 128px;
    width: 580px;
  }
`

const ProjTitle = styled.h3`
  font-size: 24px;

  @media ${media.desktop} {
    font-size: 30px;
  }
`

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const FeaturedProjects = ({ projects }) => {
  return (
    <FeaturedSection>
      <SectionTitle>Featured Projects</SectionTitle>
      {projects.map((proj) => {
        return (
          <ProjectsContainer key={proj.name}>
            <Card 
              TitleComponent={ProjTitle}
              title={proj.name}
              text={proj.bio}
              />
            <StyleButton 
              tags={proj.tags}
              />
            <LinkContainer>
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
            </LinkContainer>
          </ProjectsContainer>
        )
      })}
    </FeaturedSection>
  )
}

export default FeaturedProjects