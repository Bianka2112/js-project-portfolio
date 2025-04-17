import { Button } from "./Button"

const LinkButton = ({ link, linkUse, ...props }) => {
  return (
    <>
      <a href={link} target="_blank" rel="noopener noreferrer">
      <Button {...props}>{linkUse}
      </Button>
      </a>
    </>
  )
}

export default LinkButton