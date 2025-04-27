import Card from "../components/Card"
import styled from "styled-components"

const TechStyle = styled.div`
  background: black;
  color: white;
  padding: 64px 16px;
  text-align: center;
`

const Tech = () => {
  return (
    <TechStyle>
      <Card 
        title="Tech"
        text="HTML, CSS, Flexbox, JavaScript, ES6, React, React Hooks, Node.js,  Mongo DB, Web Accessibility, APIs, mob-programming, pair-programming, GitHub. "
        />
    </TechStyle>
  )
}

export default Tech