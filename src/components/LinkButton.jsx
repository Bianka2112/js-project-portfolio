import styled from "styled-components"

const LinkButtonStyle = styled.a`
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

  &:hover {
    scale: 1.1;
  }
`

const LinkButton = ({ link, linkUse, IconComponent, ...props }) => {
  return (
    <>
      <LinkButtonStyle 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        {...props}>

        {IconComponent && <IconComponent />}
        {linkUse}
      </LinkButtonStyle>
    </>
  )
}

export default LinkButton