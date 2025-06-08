import styled from "styled-components"
import { media } from "../styles/media"
import StyledTags from "../components/StyledTags"
import LinkButton from "../components/LinkButton"
import Card from "../components/Card"
import { WebIconSVG } from "../components/SocialIcons"

const ArticleSection = styled.section`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
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

const ArticlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding-top: 64px;
  gap: 32px;

  @media ${media.tablet} {
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: stretch;
  }

  @media ${media.desktop} {
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: stretch;
    padding-top: 128px;
    gap: 125px;
    max-width: 1200px;
    margin: 0 auto;
  }
`

const ArticleImage = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  object-fit: cover;

  @media ${media.tablet} {
    width: 50%;
    height: 100%;
    flex: 1;
  }

  @media ${media.desktop} {
    width: 50%;
    height: auto;
  }
`

const ArticlesTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  flex: 1;
  width: 100%;
  gap: 32px;

`

const LinkContainer = styled.div`
  width: 100%;
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
          <ArticlesContainer key={article.title}>
            <ArticleImage 
              src={article.image} 
              alt={`${article.title} screenshot`}
              className="slide-in-left"/>

            <ArticlesTextContainer className="slide-in-right">
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
            </ArticlesTextContainer>
          </ArticlesContainer>
        )
      })}
    </ArticleSection>
  )
}

export default Reflections