import Card from "../components/Card"
import styled from "styled-components"
import HeroImages from "../components/Images"
import { media } from "../styles/media"

const HeroHeader = styled.header`
  display: flex;
  padding: 64px 16px;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media ${media.tablet} {
    width: 800px;
  }
`

const Header = () => {
  return (
    <HeroHeader>
      <h3>Hi, I'm</h3>
      <h1>Bianka L Romero</h1>
      <HeroImages />
      <Card 
        title="Web Developer + Photographer"
        text="A creative dev with a background in studio and live photography. I’m passionate about blending code and visuals to craft immersive, accessible digital experiences. Seeking full-time opportunities where I can bring both creative and technical energy. Fluent in English, Spanish and GIFs; torrent-loading Swedish, please wait."
      />
    </HeroHeader>
  )
}

export default Header
