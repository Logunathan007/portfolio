import React from 'react'
import About from '../About/About'
import Education from '../Education/Education'
import Contact from '../Contact/Contact'
import Experience from '../Experience/Experience'
import Projects from '../Projects/Projects'
import Skills from '../Skills/Skills'

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