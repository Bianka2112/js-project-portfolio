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
    padding: 64px 24px;
  }

  @media ${media.desktop} {
    padding: 64px 0;
    max-width: 782px;
    margin: 0 auto;
  }
`

const HeroName = styled.h1`
  font-size: 52px;

  @media ${media.desktop} {
    font-size: 100px;
  }
`

const h3 = styled.h3`
  font-size: 24px;

  @media ${media.desktop} {
    font-size: 30px;
  }
`

const Header = () => {
  return (
    <HeroHeader>
      <h3>Hi there, I'm</h3>
      <HeroName>Bianka L Romero</HeroName>
      <HeroImages />
      <Card 
        title="Web Developer + Photographer"
        text="A creative dev with a background in studio and live photography. I’m passionate about blending code and visuals to craft immersive, accessible digital experiences. Seeking full-time opportunities where I can bring both creative and technical energy. Fluent in English, Spanish and GIFs; torrent-loading Swedish, please wait."
      />
    </HeroHeader>
  )
}

export default Header
