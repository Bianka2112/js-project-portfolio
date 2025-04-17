import { Button } from "./ButtonCss"

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