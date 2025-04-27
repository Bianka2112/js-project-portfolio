import laptopBG from "../assets/laptop-BG.jpg"
import cameraBG from "../assets/camera-BG.jpg"
import BiankaRomero from "../assets/BiankaRomero.jpg"
import styled from "styled-components"

const ImageContainer = styled.div`
  scale: 50%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 30%;
  padding: 16px;
`

const RightSideImg = styled.img`
  right: 60%;
  width: 300px;
  height: auto;
  object-fit: cover;
  border-radius: 12px;
  transform: rotate(4.7deg) translate(-50px);
  z-index: -1;
`
const LeftSideImg = styled.img`
  left: 60%;
  width: 300px;
  height: auto;
  object-fit: cover;
  border-radius: 12px;
  transform: rotate(-4.7deg) translate(50px);
  z-index: -1;
`

const MainImg = styled.img`
  width: 300px;
  height: auto;
  object-fit: cover;
  border-radius: 12px;
  transform: translate();
  z-index: 0;
`
const HeroImages = () => {
return (
  <ImageContainer>
    <LeftSideImg src={laptopBG} alt="" />
    <MainImg src={BiankaRomero} alt="image of Bianka Romero" />
    <RightSideImg src={cameraBG} alt="" />
  </ImageContainer>
  )
}

export default HeroImages