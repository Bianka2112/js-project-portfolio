import Card from "../components/Card"


const FeaturedProjects = ({ projects }) => {
  return (
    <>
      <h2>Featured Projects</h2>
      {projects.map((proj) => {
        return (
          <Card 
            key={proj.name}
            title={proj.name}
            text={proj.tags.join(", ")}
            />
        )
      })}
    </>
  )
}

export default FeaturedProjects