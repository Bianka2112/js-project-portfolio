import { Button } from "./ButtonCss"
import styled from "styled-components"

const LinkContainer = styled.div`
  gap: 8px;
`

const LinkButton = ({ link, linkUse, IconComponent, ...props }) => {
  return (
    <>
      <a href={link} target="_blank" rel="noopener noreferrer">
      <Button {...props}>{IconComponent && <IconComponent />}
      {linkUse}
      </Button>
      </a>
    </>
  )
}

export default LinkButton