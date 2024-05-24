import React from 'react'
import About from './About'
import Education from './Education'
import Contact from './Contact'
import Experience from './Experience'
import Projects from './Projects'
import Skills from './Skills'

const RightSection = ({leftHide,setLeftHide}) => {
  return (
    <div className={`rightsection ${(leftHide?"rfull":"rhalf")}`}>
        <About
          leftHide = {leftHide}
          setLeftHide = {setLeftHide}        
        />
        <Education/>
        <Experience/>
        <Skills/>
        <Projects/>
        <Contact/>
    </div>
  )
}

export default RightSection