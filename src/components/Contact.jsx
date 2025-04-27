import styled from "styled-components"
import { media } from "../styles/media"

const ContactContainer = styled.div`
  display: block;
  padding: 64px 0;

  @media ${media.tablet} {
      font-size: 24px;
    }

    @media ${media.desktop} {
        font-size: 30px;
      }
`

const Contact = ({ name, phone, email }) => {
  return (
    <ContactContainer>
      <p>{name}</p>
      <p>{phone}</p>
      <p>{email}</p>
    </ContactContainer>
  )
}

export default Contact