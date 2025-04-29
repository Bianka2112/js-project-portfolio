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
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  flex-wrap: wrap;
  align-items: center;
  padding-top: 64px;
  gap: 32px;

  @media ${media.desktop} {
    padding-top: 128px;
    /* width: 580px; */
  }
`

const ProjectImage = styled.img`
  width: 100%;
  max-width: 600px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  object-fit: cover;
  margin-bottom: 1rem;
`

const ProjectsTextContainer = styled.div`
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

      {projects.map((proj, index) => {
        const isEven = index % 2 === 0;
        return (
          <ProjectsContainer key={proj.name} reverse={!isEven}>
            <ProjectImage 
              src={proj.image} 
              alt={`${proj.name} screenshot`}/>

            <ProjectsTextContainer>
            <StyleButton 
              tags={proj.tags}
              />
            <Card 
              TitleComponent={ProjTitle}
              title={proj.name}
              text={proj.bio}
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
                </ProjectsTextContainer>
          </ProjectsContainer>
        )
      })}
    </FeaturedSection>
  )
}

export default FeaturedProjects