import styled from "styled-components"

const Tag = styled.li`
  display: block;
`
const TagsContainer = styled.ul`
 
`

const Card = ({ title, text, tags }) => {
  console.log('Card text prop:', text)
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
      <h2>{title}</h2>
      {cardContent}
    </article>
  )
}

export default Card