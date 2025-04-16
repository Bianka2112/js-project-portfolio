import Card from "../components/Card"


const Skills = ({ skills }) => {
  return (
    <>
      <h2>Skills</h2>
      {skills.map((skill) => {
        return (
        <Card
          key={skill.category}
          title={skill.category}
          text={skill.tags.join(", ")}
        />
      )
    })
  }
    </>
  )
}

export default Skills