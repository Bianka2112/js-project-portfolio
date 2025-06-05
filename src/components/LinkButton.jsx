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
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`

const IconStyle = styled.span`
  font-size: 32px;
  display: flex;
  align-items: center;
`

const LinkButton = ({ link, linkUse, IconComponent, ...props }) => {
  return (
      <LinkButtonStyle 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        {...props}>

        {IconComponent && (
          <IconStyle> 
            <IconComponent />
          </IconStyle>
        )}
        {linkUse}
      </LinkButtonStyle>
  )
}

export default LinkButton