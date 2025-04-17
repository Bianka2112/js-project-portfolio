
export const LinkedinIcon = () => {
  return (
  <a href="https://www.linkedin.com/in/biankalromero/" target="_blank">
  <ion-icon name="logo-linkedin"></ion-icon>
  </a>
  )
}

export const GithubIcon = () => {
  return (
  <a href="https://github.com/Bianka2112" target="_blank">
  <ion-icon name="logo-github"></ion-icon>
  </a>
  )
}

export const CodepenIcon = () => {
  return (
  <a href="https://codepen.io/Bianka2112" target="_blank">
  <ion-icon name="logo-codepen"></ion-icon>
  </a>
  )
}

export const InstagramIcon = () => {
  return (
  <a href="https://www.instagram.com/biankashoots" target="_blank">
  <ion-icon name="logo-instagram"></ion-icon>
  </a>
  )
}

export const HeartIcon = () => {
  return (
  <ion-icon name="heart"></ion-icon>
  )
}

export const WebIcon = () => {
  return (
  <ion-icon name="globe-outline"></ion-icon>
  )
}

export const IconsList = {
  linkedin: LinkedinIcon,
  github: GithubIcon,
  codepen: CodepenIcon,
  instagram: InstagramIcon,
  web: WebIcon,
}

const SocialIcons = () => {
return (
  <div>
    <LinkedinIcon />
    <GithubIcon />
    <CodepenIcon />
    <InstagramIcon />
    <HeartIcon />
  </div>
  )
}

export default SocialIcons