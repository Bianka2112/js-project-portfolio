import Card from "../components/Card"
import styled from "styled-components"

const SkillsSection = styled.div`
  padding: 128px 0px;
  background: black;
  color: white;
`

const SectionTitle = styled.h2`
  padding-bottom: 40px;
  text-align: center;
`

const SkillsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
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