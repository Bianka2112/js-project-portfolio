import Contact from "../components/Contact"
import SocialIcons from "../components/SocialIcons"
import styled from "styled-components"
import BiankaRomero from "../assets/BiankaRomero.jpg"

const FooterContainer = styled.footer`
  padding: 64px 16px;
`
const CircleImg = styled.img`
  width: 164px;
  height: 164px;
  border-radius: 164px;
  object-fit: cover;
  align-self: center;
`
const FooterTitle = styled.h3`
  text-align: center;
`

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTitle>Let's Connect</FooterTitle>
      <CircleImg src={BiankaRomero} alt="" />
      <Contact 
        name="Bianka L Romero"
        phone="+46(0) 76 716 97 46"
        email="bianka_romero@me.com"
        />
        <SocialIcons />
    </FooterContainer>
  )
}

export default Footer