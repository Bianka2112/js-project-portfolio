import styled from "styled-components"
import { media } from "../styles/media"

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const TechTag = styled.p`
  border-radius: 4px;
  max-width: 100%;
  color: black;
  border: 1px solid black;
  padding: 2px 6px;
  display: flex;
  justify-content: center;
  white-space: nowrap;
  margin: 4px;

  @media ${media.tablet}, ${media.desktop} {
    flex: 0 0 auto; 
}
`

const StyledTags = ({ tags }) => {
  if (!tags) return null

  const tagList = Array.isArray(tags) ? tags : [tags]

  if (tagList.length === 0) return null

  return (
    <TagsContainer>
      {tagList.map((tag, index) => {
        return (
          <TechTag key={index}>{tag}</TechTag>
        )}
        )}
    </TagsContainer>
  )
}

export default StyledTags