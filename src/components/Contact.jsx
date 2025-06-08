import styled from "styled-components"
import { media } from "../styles/media"
import { IoCallOutline, IoChatbubbleEllipsesOutline, IoMailOutline } from "react-icons/io5";

const ContactContainer = styled.div`
  display: block;
  padding: 64px 0;

  @media ${media.tablet} {
      font-size: 24px;
    }

    @media ${media.desktop} {
        font-size: 30px;
      }

  a {
    color: inherit;
    display: block;
    margin-top: 8px;
  }
`

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    transform: scale(1.1);
    color: #0077ff; 
  }

  svg {
    flex-shrink: 0;
    font-size: 1em;
    vertical-align: middle;
  }
`

const ContactName = styled.h3`
  margin-bottom: 12px;
`

const Contact = ({ name, phone, email }) => {
  // Clean phone number for tel and sms links (remove spaces, parentheses, dashes)
  const cleanPhone = phone.replace(/[^+\d]/g, "");

  return (
    <ContactContainer>
      <ContactName>{name}</ContactName>

      <ContactItem href={`tel:${cleanPhone}`} aria-label={`Call ${phone}`}>
        <IoCallOutline /> {phone}
      </ContactItem>

      <ContactItem href={`sms:${cleanPhone}`} aria-label={`Send SMS to ${phone}`}>
        <IoChatbubbleEllipsesOutline /> Send SMS
      </ContactItem>

      <ContactItem href={`mailto:${email}`} aria-label={`Send email to ${email}`}>
        <IoMailOutline /> {email}
      </ContactItem>
    </ContactContainer>
  )
}

export default Contact