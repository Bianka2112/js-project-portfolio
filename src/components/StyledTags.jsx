import styled from "styled-components"
import { media } from "../styles/media"

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media ${media.desktop} {
    display: flex;
    flex-wrap: nowrap;
  }
`

const TechTags = styled.p`
  border-radius: 4px;
  width: 130px;
  color: black;
  border: 1px solid black;
  padding: 2px 6px;
  display: flex;
  justify-content: center;
`

const StyleButton = ({ tags }) => {
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

export default StyleButton