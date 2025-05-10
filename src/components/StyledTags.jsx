import styled from "styled-components"
import { media } from "../styles/media"

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const TechTags = styled.p`
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
    flex: 1 0 0; 
}
`

const StyledTags = ({ tags }) => {
  return (
    <TagsContainer>
      {tags.map((tag, index) => {
        return (
          <TechTags key={index}>{tag}</TechTags>
        )}
        )}
    </TagsContainer>
  )
}

export default StyledTags