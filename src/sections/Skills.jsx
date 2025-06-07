import Card from "../components/Card"
import styled from "styled-components"
import { media } from "../styles/media"

const SkillsSection = styled.div`
  padding: 64px 16px;
  background: black;
  color: white;
  gap: 16px;

  @media ${media.tablet} {
    padding: 64px 24px;
  }
  @media ${media.desktop} {
    padding: 128px 0;
  }
`

const SectionTitle = styled.h2`
  font-size: 48px;
  padding-bottom: 40px;
  text-align: center;

  @media ${media.desktop} {
    font-size: 80px;
  }
`

const SkillsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: start;
  justify-content: center;
  gap: 24px;

  @media (min-width: 426px) {
    align-content: center;
    gap: 24px;
    width: 100%;
    justify-items: center;

    & ul li {
      align-self: stretch;
      text-align: center;
    }
  }

  @media ${media.desktop} {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 24px;
    width: 100%;
    justify-items: center;
    max-width: 1200px;
    margin: 0 auto;

    & ul li {
      text-align: left;
    }
  }
`

const SkillTagTitles = styled.h3`
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #FFF;
  background: #000;
  padding: 2px 6px;
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
`

const Skills = ({ skills }) => {
  return (
    <SkillsSection>
      <SectionTitle>Skills</SectionTitle>
      <SkillsContainer>
      {skills.map((skill) => {
        return (
            <Card
              TitleComponent={SkillTagTitles}
              key={skill.category}
              title={skill.category}
              tags={skill.tags}
            />
          )
        })
      }
      </SkillsContainer>
    </SkillsSection>
  )
}

export default Skills