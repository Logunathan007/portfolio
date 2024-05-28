import React from 'react'

const LeftSection = ({leftHide,setLeftHide}) => {
  return (
    <div className={`leftsection ${leftHide ? 'full' : 'half'}`}>
        <div className="navbtn" >
          <a href="#about" className='navlink'>ABOUT</a>
        </div>
        <div className="navbtn">
          <a href="#education" className='navlink'>EDUCATION</a>          
        </div>
        <div className="navbtn">
          <a href="#experience" className='navlink'>EXPERIENCE</a>
        </div>
        <div className="navbtn">
          <a href="#skills" className='navlink'>SKILLS</a>          
        </div>
        <div className="navbtn">
          <a href="#projects" className='navlink'>PROJECTS</a>
        </div>
        <div className="navbtn">
          <a href="#contact" className='navlink'>CONTACT</a>
        </div>
    </div>
  )
}

export default LeftSection