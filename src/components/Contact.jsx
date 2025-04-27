import styled from "styled-components"

const ContactContainer = styled.div`
  display: block;
  padding: 64px 0;
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