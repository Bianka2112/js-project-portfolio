import styled from "styled-components"

import Card from "../components/Card"
import LinkButton from "../components/LinkButton"
import { GithubIconSVG, IconsList, WebIconSVG } from "../components/SocialIcons"
import StyledTags from "../components/StyledTags"
import { media } from "../styles/media"

const FeaturedSection = styled.main`
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
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding-top: 64px;

  @media ${media.desktop} {
    flex-direction: ${({ $reverse }) => ($reverse ? "row-reverse" : "row")};
    flex-wrap: nowrap;
    padding-top: 128px;
    gap: 125px;
    max-width: 1200px;
    margin: 0 auto;
  }
`

const ProjectImage = styled.img`
  width: 100%;
  max-width: 600px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  object-fit: cover;

  @media ${media.desktop} {
    width: 50%;
    /* max-width: 540px; */
    height: auto;
  }
`

const ProjectsTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 100%;
  padding-top: 64px;
  gap: 32px;

  @media ${media.tablet}{
    min-width: 580px;
  }

  @media ${media.desktop} {
    width: 50%;
    padding: 0;
    flex-shrink: 1;
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
    <FeaturedSection role="main">
      <SectionTitle>Featured Projects</SectionTitle>

      {projects.map((proj, index) => {
        const isEven = index % 2 === 0;
        return (
          <ProjectsContainer key={proj.name} $reverse={!isEven}>
            <ProjectImage 
              src={proj.image} 
              alt={`${proj.name} screenshot`}
              className="slide-in-left"/>

            <ProjectsTextContainer className="slide-in-right">
            <StyledTags 
              tags={proj.tags}
              />
            <Card 
              TitleComponent={ProjTitle}
              title={proj.name}
              text={proj.bio}
              />
            <LinkContainer>
              <LinkButton 
                link={proj.netlify}
                IconComponent={WebIconSVG}
                linkUse="Live Demo"
                />
              <LinkButton 
                link={proj.github}
                IconComponent={GithubIconSVG}
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