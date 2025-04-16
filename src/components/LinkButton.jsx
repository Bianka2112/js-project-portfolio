const LinkButton = ({ link, linkUse }) => {
  return (
    <button>
      <a href={link} target="_blank">{linkUse}</a>
    </button>
  )
}

export default LinkButton