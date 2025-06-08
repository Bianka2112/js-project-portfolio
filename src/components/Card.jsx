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
  padding-top: 16px;
`
const CardText = styled.p`
  font-size: 16px;
  padding-top: 16px;

  @media ${media.desktop} {
    font-size: 18px;
  }
`

const Card = ({ title, text, tags, TitleComponent = CardTitle }) => {
   const cardContent = (
    <>
     {tags && (
       <TagsContainer>
        {tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </TagsContainer>
    )} 
    {text && (
      <CardText>{text}</CardText>
    )}
    </>
  )
  
  return (
    <article>
      <TitleComponent>{title}</TitleComponent>
      {cardContent}
    </article>
  )
}

export default Card