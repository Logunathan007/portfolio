import React from 'react'

const LeftSection = ({leftHide,setLeftHide}) => {
  return (
    <div className={`leftsection ${leftHide ? 'full' : 'half'}`}>
        <div className="navbtn" >
          <a href="#about">ABOUT</a>
        </div>
        <div className="navbtn">
          <a href="#education">EDUCATION</a>          
        </div>
        <div className="navbtn">
          <a href="#experience">EXPERIENCE</a>
        </div>
        <div className="navbtn">
          <a href="#skills">SKILLS</a>          
        </div>
        <div className="navbtn">
          <a href="#projects">PROJECTS</a>
        </div>
        <div className="navbtn">
          <a href="#contact">CONTACT</a>
        </div>
    </div>
  )
}

export default LeftSection