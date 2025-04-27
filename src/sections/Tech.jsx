import Card from "../components/Card"
import styled from "styled-components"
import { media } from "../styles/media"

const TechSection = styled.div`
  background: black;
  color: white;
  padding: 64px 16px;
  text-align: center;

  @media ${media.tablet} {
      width: 100%;
      
    }
`

const Tech = () => {
  return (
    <TechSection>
      <Card 
        title="Tech"
        text="HTML, CSS, Flexbox, JavaScript, ES6, React, React Hooks, Node.js,  Mongo DB, Web Accessibility, APIs, mob-programming, pair-programming, GitHub. "
        />
    </TechSection>
  )
}

export default Tech