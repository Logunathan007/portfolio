import React from 'react'

const Experience = () => {
  let experienceDetails = [{
    line1:" SDE at KIT ",
    line2:"Internship (offline)",
    line3:"June 2022 - July 2023"
  },
  {
    line1:" Embedded Programming at Emglitz Technologies ",
    line2:"Internship (online)",
    line3:"May 2022 - June 2022"
  }]

  return (
    <div className='experience contentbox' id = 'experience'>
      <div className="title">
        <h1> EXPERIENCE </h1>
        <div className="hline"></div>
      </div>
      <div className="details">
        <div className="detailimg">

        </div>
        <div className="detailbox">
          {
            experienceDetails.map((ele,ind)=>{
              return(
                <div className="exrow" key={ind}>   
                  <h3> { ele.line1 } </h3>
                  <h4> { ele.line2 } </h4>
                  <h4> { ele.line3 } </h4>
                </div>
              )
            })
          }
          
        </div>
      </div>
    </div>
  )
}

export default Experience