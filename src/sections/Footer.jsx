import Contact from "../components/Contact"
import SocialIcons from "../components/SocialIcons"
import styled from "styled-components"
import BiankaRomero from "../assets/BiankaRomero.jpg"
import { media } from "../styles/media"

const FooterContainer = styled.footer`
  padding: 64px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: ${({ theme, $mode}) => theme.colors[$mode].background};
  color: ${({ theme, $mode}) => theme.colors[$mode].text};

  @media ${media.desktop} {
    padding: 128px 16px;
  }
`

const FooterTitle = styled.h2`
  text-align: center;
  margin-bottom: 16px;

  @media ${media.tablet} {
    font-size: 48px;
  }

  @media ${media.desktop} {
    font-size: 80px;
  }
`

const CircleImg = styled.img`
  width: 164px;
  height: 164px;
  border-radius: 164px;
  object-fit: cover;
`

const Footer = ({ mode = "dark" }) => {
  return (
    <FooterContainer $mode={mode}>
      <FooterTitle>Let's Connect</FooterTitle>
      <CircleImg src={BiankaRomero} alt="" />
      <Contact 
        name="Bianka L Romero"
        phone="+46 76 716 97 46"
        email="bianka_romero@me.com"
        />
        <SocialIcons />
    </FooterContainer>
  )
}

export default Footer