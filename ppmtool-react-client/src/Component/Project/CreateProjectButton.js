import React from 'react'
import {Link} from 'react-router-dom'

export default function CreateProjectButton() {
  return (
    <React.Fragment>
    <a href="/addProject" className="btn btn-lg btn-info">
    Create a Project
  </a>
    </React.Fragment>
  )
}
