import laptopBG from "../assets/laptop-BG.jpg"
import cameraBG from "../assets/camera-BG.jpg"
import BiankaRomero from "../assets/BiankaRomero.jpg"
import styled from "styled-components"

const ImageContainer = styled.div`
  position: relative;
  width: 800px;
  height: auto;
  display: flex;
`

const HeroImg = styled.img`
  
`

const RightSideImg = styled.img`
  /* position: absolute; */
  right: 50%;
  width: 300px;
  height: auto;
  object-fit: cover;
  border-radius: 12px;
  transform: rotate(4.7deg) translate(-50px);
  z-index: -1;
`
const LeftSideImg = styled.img`
   /* position: absolute; */
  left: 50%;
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