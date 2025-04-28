import laptopBG from "../assets/laptop-BG.jpg"
import cameraBG from "../assets/camera-BG.jpg"
import BiankaRomero from "../assets/BiankaRomero.jpg"
import styled from "styled-components"
import { media } from "../styles/media"

const HeroContainer = styled.div`
  /* height: auto; */
  min-width: 300px;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 16px;
  margin: 0 auto;

`
const HeroImg = styled.img`
  width: 30%; /* 🚨 About 1/3rd of container, adjust a bit for gaps */
  height: auto;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);

  @media ${media.tablet}, ${media.desktop} {
    width: 300px;
  }
`

const LeftHeroImg = styled(HeroImg)`
  transform: rotate(-4.7deg) translate(50px);
  z-index: -1;
`

const CenterHeroImg = styled(HeroImg)`
  z-index: 0;
`

const RightHeroImg = styled(HeroImg)`
  transform: rotate(4.7deg) translate(-50px);
  z-index: -1;
`

const HeroImages = () => {
  return (
    <HeroContainer>
      <LeftHeroImg src={laptopBG} alt="Laptop background" />
      <CenterHeroImg src={BiankaRomero} alt="Bianka Romero" />
      <RightHeroImg src={cameraBG} alt="Camera background" />
    </HeroContainer>
  )
}

export default HeroImages