import styled from "styled-components"
import { media } from "../styles/media"

const Tag = styled.li`
  display: block;

  @media ${media.desktop} {
    align-self: left;
  }
`
const TagsContainer = styled.ul`
 
`
const CardTitle = styled.h2`
 
`

const Card = ({ title, text, tags, TitleComponent = CardTitle }) => {
   const cardContent = 
    tags ? (
      <TagsContainer>
        {tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </TagsContainer>
    ) : text ? (
      <p>{text}</p>
    ) : null
  
  return (
    <section>
      <TitleComponent>{title}</TitleComponent>
      {cardContent}
    </section>
  )
}

export default Card