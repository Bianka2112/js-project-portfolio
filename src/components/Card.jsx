import styled from "styled-components"

const Tag = styled.li`
  display: block;
`
const TagsContainer = styled.ul`
 
`
const CardTitle = styled.h2`
  text-align: center;
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