import { useState } from "react"
import { IoGlobeOutline, IoHeart, IoLogoCodepen, IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5"
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

const HeartsIcon = styled.button`
  font-size: 32px;
  color: inherit;
  transition: transform 0.6s ease;
  perspective: 1000px; /* Needed for 3D effect */
  border-color: transparent;
  background: transparent;

  &:hover {
    transform: scale(1.2);
  }
  
  &.spin {
    animation: spinYColor 0.8s ease;
  }

  @keyframes spinYColor {
    0% {
      transform: rotateY(0deg);
    }
    50% {
      transform: rotateY(180deg);
      color: red;          
    }
    100% {
      transform: rotateY(360deg);
    }
  }
`
export const LinkedinIcon = () => {
  return (
  <SocialIcon href="https://www.linkedin.com/in/biankalromero/" target="_blank" rel="noopener noreferrer" aria-label="Link to LinkedIn profile">
  <IoLogoLinkedin />
  </SocialIcon>
  )
}

export const GithubIconSVG = () => <IoLogoGithub />
export const GithubIcon = () => {
  return (
  <SocialIcon href="https://github.com/Bianka2112" target="_blank" rel="noopener noreferrer" aria-label="Link to Github profile">
  <IoLogoGithub />
  </SocialIcon>
  )
}

export const CodepenIcon = () => {
  return (
  <SocialIcon href="https://codepen.io/Bianka2112" target="_blank" rel="noopener noreferrer" aria-label="Link to Codepen profile">
  <IoLogoCodepen />
  </SocialIcon>
  )
}

export const InstagramIcon = () => {
  return (
  <SocialIcon href="https://www.instagram.com/biankashoots" target="_blank" rel="noopener noreferrer" aria-label="Link to Instagram profile">
  <IoLogoInstagram />
  </SocialIcon>
  )
}

export const HeartIcon = () => {
  const [animateKey, setAnimateKey] = useState(0)

  const handleClick = () => {
    // setLikeCount((prev) => prev + 1)
    setAnimateKey((prev) => prev + 1) // triggers re-animation
  }

  return (
    <HeartsIcon className="spin" key={animateKey} onClick={handleClick} tabIndex={0} aria-label="Animate Like button">
      <IoHeart />
    </HeartsIcon>
  )
}

export const WebIconSVG = () => <IoGlobeOutline />
export const WebIcon = () => {
  return (
    <SocialIcon href="https://biankashoots.myportfolio.com" target="_blank" rel="noopener noreferrer" aria-label="Bianka Romero's Photography Portfolio">
      <IoGlobeOutline aria-hidden="true" focusable="false"    />
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