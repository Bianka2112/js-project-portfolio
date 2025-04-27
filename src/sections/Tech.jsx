import Card from "../components/Card"
import styled from "styled-components"
import { media } from "../styles/media"

const TechSection = styled.div`
  background: black;
  color: white;
  padding: 64px 16px;
  text-align: center;
  width: 100%;

  @media ${media.desktop} {
    padding: 128px 0;
  }
`
const TechTitle = styled.h2`
  font-size: 60px;

  @media ${media.desktop} {
    font-size: 80px;
  }
`

const CardContainer = styled.div`
  @media ${media.desktop} {
    max-width: 782px;
    margin: 0 auto;
  }
`

const Tech = () => {
  return (
    <TechSection>
      <CardContainer>
        <Card 
          TitleComponent={TechTitle}
          title="Tech"
          text="HTML, CSS, Flexbox, JavaScript, ES6, React, React Hooks, Node.js,  Mongo DB, Web Accessibility, APIs, mob-programming, pair-programming, GitHub. "
          />
      </CardContainer>
    </TechSection>
  )
}

export default Tech