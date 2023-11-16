import React from 'react'
import './techtag.css'

function TechTag({tag}) {
  return (
    <div className='tech--tag--container'><p>{tag}</p></div>
  )
}

export default TechTag