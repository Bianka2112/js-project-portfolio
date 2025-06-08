import styled from "styled-components"
import { media } from "../styles/media"
import StyledTags from "../components/StyledTags"
import LinkButton from "../components/LinkButton"
import Card from "../components/Card"
import { WebIconSVG } from "../components/SocialIcons"

const ArticleSection = styled.section`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.large};
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

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`
const CardHeading = styled.h3`
  font-size: 30px;
`

const Reflections = ({ articles }) => {
  return (
    <ArticleSection role="articles">
      <SectionTitle>Personal Reflections</SectionTitle>

      {articles.map((article, index) => {
        return (
          <ProjectsContainer key={article.title}>
            <ProjectImage 
              src={article.image} 
              alt={`${article.title} screenshot`}
              className="slide-in-left"/>

            <ProjectsTextContainer className="slide-in-right">
            <StyledTags 
              tags={article.date}
              />
            <Card 
              TitleComponent={CardHeading}
              title={article.title}
              text={article.text}
              />
            <LinkContainer>
              <LinkButton 
                link={article.link}
                IconComponent={WebIconSVG}
                linkUse="Read article"
                />
            </LinkContainer>
                </ProjectsTextContainer>
          </ProjectsContainer>
        )
      })}
    </ArticleSection>
  )
}

export default Reflections