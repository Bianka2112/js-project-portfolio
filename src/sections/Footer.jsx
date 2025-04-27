import Contact from "../components/Contact"
import SocialIcons from "../components/SocialIcons"
import styled from "styled-components"

const FooterContainer = styled.footer`
   text-align: center;
`

const Footer = () => {
  return (
    <FooterContainer>
      <h3>Let's Connect</h3>
      
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