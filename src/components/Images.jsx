import laptopBG from "../assets/laptop-BG.jpg"
import cameraBG from "../assets/camera-BG.jpg"
import BiankaRomero from "../assets/BiankaRomero.jpg"
import styled from "styled-components"
import { media } from "../styles/media"

const HeroContainer = styled.div`
  max-width: 100vw;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  padding: 16px;
  margin: 0 auto;

`
const HeroImg = styled.img`
  width: 30%;
  height: auto;
  max-width: 100%;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  opacity: 0;
  animation: fadeUp 1s ease forwards;
  transition: transform 0.3s ease;

  @media ${media.tablet} {
    /* max-width: 100%; */
  }

  @keyframes fadeUp {
    to {
      opacity: 1;
    }
  }
`

const LeftHeroImg = styled(HeroImg)`
  transform: rotate(-4.7deg) translateX(50px);
  z-index: -1;
`

const CenterHeroImg = styled(HeroImg)`
  z-index: 0;

  &:hover {
    transform: scale(1.05);
  }
`

const RightHeroImg = styled(HeroImg)`
  transform: rotate(4.7deg) translateX(-50px);
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