import styled from "styled-components"
import { media } from "../styles/media"

const Tag = styled.li`
  display: block;
`
const TagsContainer = styled.ul`
 @media ${media.tablet} {
  align-self: stretch;
  text-align: center;
 }
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
    <article>
      <TitleComponent>{title}</TitleComponent>
      {cardContent}
    </article>
  )
}

export default Card