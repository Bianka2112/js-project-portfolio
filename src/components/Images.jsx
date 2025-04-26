import laptopBG from "../assets/laptop-BG.jpg"
import cameraBG from "../assets/camera-BG.jpg"
import BiankaRomero from "../assets/BiankaRomero.jpg"
import styled from "styled-components"

const ImageContainer = styled.div`
  width: 800px;
  height: auto;
  display: flex;
`

const HeroImg = styled.img`
  width: 300px;
  height: auto;
  border-radius: 12px;
`

const HeroImages = () => {
return (
  <ImageContainer>
    <HeroImg src={laptopBG} alt="" />
    <HeroImg src={cameraBG} alt="" />
    <HeroImg src={BiankaRomero} alt="image of Bianka Romero" />
  </ImageContainer>
  )
}

export default HeroImages