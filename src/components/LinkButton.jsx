import { Button } from "./ButtonCss"
import styled from "styled-components"

const ButtonStyle = styled.button`
  border-radius: 12px;
  border: 2px solid black;
  background: #000;
  color: white;
  display: flex;
  width: 100%;
  max-width: 303px;
  height: 48px;
  padding: 0px 16px;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
`

const LinkButton = ({ link, linkUse, IconComponent, ...props }) => {
  return (
    <>
      <a href={link} target="_blank" rel="noopener noreferrer">
      <ButtonStyle {...props}>{IconComponent && <IconComponent />}
      {linkUse}
      </ButtonStyle>
      </a>
    </>
  )
}

export default LinkButton