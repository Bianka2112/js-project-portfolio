import styled from "styled-components"

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  flex-wrap: wrap;
`

const SocialIcon = styled.a`
  font-size: 32px;
  color: inherit;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`

export const LinkedinIcon = () => {
  return (
  <SocialIcon href="https://www.linkedin.com/in/biankalromero/" target="_blank" rel="noopener noreferrer" alt="Link to LinkedIn profile">
  <ion-icon name="logo-linkedin"></ion-icon>
  </SocialIcon>
  )
}

export const GithubIcon = () => {
  return (
  <SocialIcon href="https://github.com/Bianka2112" target="_blank" rel="noopener noreferrer" alt="Link to Github profile">
  <ion-icon name="logo-github"></ion-icon>
  </SocialIcon>
  )
}

export const CodepenIcon = () => {
  return (
  <SocialIcon href="https://codepen.io/Bianka2112" target="_blank" rel="noopener noreferrer" alt="Link to Codepen profile">
  <ion-icon name="logo-codepen"></ion-icon>
  </SocialIcon>
  )
}

export const InstagramIcon = () => {
  return (
  <SocialIcon href="https://www.instagram.com/biankashoots" target="_blank" rel="noopener noreferrer" alt="Link to Instagram profile">
  <ion-icon name="logo-instagram"></ion-icon>
  </SocialIcon>
  )
}

export const HeartIcon = () => {
  return (
    <SocialIcon aria-hidden>
      <ion-icon name="heart"></ion-icon>
    </SocialIcon>
  )
}

export const WebIcon = () => {
  return (
    <SocialIcon href="https://www.biankaromero.com." target="_blank" rel="noopener noreferrer" alt="Link to Photography portfolio">
      <ion-icon name="globe-outline"></ion-icon>
    </SocialIcon>
  )
}

export const IconsList = {
  linkedin: LinkedinIcon,
  github: GithubIcon,
  codepen: CodepenIcon,
  instagram: InstagramIcon,
  web: WebIcon,
  heart: HeartIcon,
}

const SocialIcons = () => {
return (
  <IconsContainer>
    <LinkedinIcon />
    <GithubIcon />
    <CodepenIcon />
    <InstagramIcon />
    <WebIcon />
    <HeartIcon />
  </IconsContainer>
  )
}

export default SocialIcons