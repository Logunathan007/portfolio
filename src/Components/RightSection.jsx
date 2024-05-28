import React from 'react';
import About from './About';
import Education from './Education';
import Contact from './Contact';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';

const RightSection = ({ leftHide, setLeftHide }) => {

  return (
    <div className={`rightsection ${leftHide ? "rfull" : "rhalf"}`}>
      <About
        leftHide={leftHide}
        setLeftHide={setLeftHide}
        className='contentbox'
        id='about'
      />
      <Education className='contentbox' id='education' />
      <Experience className='contentbox' id='experience' />
      <Skills className='contentbox' id='skills' />
      <Projects className='contentbox' id='projects' />
      <Contact className='contentbox' id='contact' />
    </div>
  );
};

export default RightSection;
