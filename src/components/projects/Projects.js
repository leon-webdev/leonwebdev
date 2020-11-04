import React from "react"
import Project from "./Project"
import { arrayOf, shape, ProjectType } from "../../types"

function Projects({ projects }) {
  return (
    <>
      <h5 className="font-header font-semibold text-front text-sm uppercase mb-3">
        Projects
      </h5>
      {projects.map((project, i) => (
        <Project key={`${project.name}_${i}`} {...project} />
      ))}
    </>
  )
}

Projects.propTypes = {
  projects: arrayOf(shape(ProjectType)),
}

export default Projects
