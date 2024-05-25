import React from 'react'
import { ImMail4 } from "react-icons/im";
import { VscGithub } from "react-icons/vsc";
import { IoLogoLinkedin } from "react-icons/io5";
const Contact = () => {
  return (
    <div className='contact contentbox' id = 'contact'>
      <div className="title">
        <h1> CONTACT </h1>
        <div className="hline"></div>
      </div>
      <div className="contactbox">
        <div className="contactleft">
          <p className = 'contacttext'>
            Feel free to get in touch for projects, opportunities, or just to say hello.
          </p>
          <div className="links">
            <a href='mailto:logulogu20032003@gmail.com' target="_blank" rel="noopener noreferrer" className="mail"><button className='link'><ImMail4 /></button></a>
            <a href='https://www.linkedin.com/in/logu-nj/' target="_blank" rel="noopener noreferrer" className="linkedin"><button className='link'>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>  
            </button></a>
            <a href='https://github.com/Logunathan007/' target="_blank" rel="noopener noreferrer" className="github"><button className='link'><VscGithub /></button></a>
          </div>
        </div>
        <div className="contactright">
          <img src={require('../pictures/contact.gif')} alt="GIG" className='contactimg'/>
        </div>
      </div>
    </div>
  )
}

export default Contact