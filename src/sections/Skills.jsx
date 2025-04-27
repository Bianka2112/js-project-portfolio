import Card from "../components/Card"
import styled from "styled-components"
import { media } from "../styles/media"

const SkillsSection = styled.div`
  padding: 64px 16px;
  background: black;
  color: white;
`

const SectionTitle = styled.h2`
  padding-bottom: 40px;
  text-align: center;

  @media ${media.tablet} {
    font-size: 32px;
  }
`

const SkillsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  justify-content: center;
  gap: 24px;

  @media ${media.tablet} {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 24px;
    width: 100%;
    justify-items: center;
  }

  @media ${media.desktop} {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`

const Skills = ({ skills }) => {
  return (
    <SkillsSection>
      <SectionTitle>Skills</SectionTitle>
      <SkillsContainer>
      {skills.map((skill) => {
        return (
            <Card
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