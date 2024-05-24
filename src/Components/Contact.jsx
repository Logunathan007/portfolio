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
            <div className="mail link"><ImMail4 /></div>
            <div className="linkedin link"><IoLogoLinkedin /></div>
            <div className="github link"><VscGithub /></div>
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