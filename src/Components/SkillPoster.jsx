import React from 'react'
const SkillPoster = ({obj}) => {

  return (
    <div data-aos="flip-up" className='skillposter'>
        <img className="skillimg" src={require('../pictures/'+obj.img)} alt='logo'/>
        <div className="skillname">
            {obj.name}
        </div>
    </div>
  )
}

export default SkillPoster