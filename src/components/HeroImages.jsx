import laptopBG from "../assets/laptop-BG.jpg"
import cameraBG from "../assets/camera-BG.jpg"
import BiankaRomero from "../assets/BiankaRomero.jpg"
import styled, { keyframes } from "styled-components"


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
`

const fadeUpCenter = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`


const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: rotate(-4.7deg) translateX(-100px);
  }
  to {
    opacity: 1;
    transform: rotate(-4.7deg) translateX(50px);
  }
`

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: rotate(4.7deg) translateX(100px);
  }
  to {
    opacity: 1;
    transform: rotate(4.7deg) translateX(-50px);
  }
`


const LeftHeroImg = styled(HeroImg)`
  animation: ${slideInLeft} 1s ease forwards;
  z-index: -1;
`

const CenterHeroImg = styled(HeroImg)`
  animation: ${fadeUpCenter} 1s ease forwards;
  z-index: 0;

  &:hover {
    transform: scale(1.05);
  }
`

const RightHeroImg = styled(HeroImg)`
  animation: ${slideInRight} 1s ease forwards;
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