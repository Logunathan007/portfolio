import React from 'react'

const About = ({leftHide,setLeftHide}) => {
  return (
    <div className='about contentbox' id='about'>
      <div className="window">
        <div className="col1">
          <div className="imgboxlayer" style={{ transition:'all 1s',height: `${(leftHide)?'120%':'100%'}` }}>
            <div className="imgbox">
            </div>
          </div>
        </div>
        <div className="col2">
          <h2>SOFTWARE DEVLOPER<div className="hline"></div></h2>
          
          <div className='description'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque labore autem dicta rerum non itaque fuga odit! Dolorem fuga, inventore quia, laudantium quibusdam ipsum numquam, dignissimos fugit nam repellat modi?
          </div>
        </div>  
      </div>
      
    </div>
  )
}

export default About