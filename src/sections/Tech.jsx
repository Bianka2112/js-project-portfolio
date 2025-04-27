import Card from "../components/Card"
import styled from "styled-components"
import { media } from "../styles/media"

const TechSection = styled.div`
  background: black;
  color: white;
  padding: 64px 16px;
  text-align: center;

  @media ${media.desktop} {
    padding: 128px 0;
    max-width: 782px;
    margin: 0 auto;
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