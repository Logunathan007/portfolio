import React from 'react'
const SkillPoster = ({obj}) => {
  console.log(obj)
  return (
    <div className='skillposter'>
        <img className="skillimg" src={require('../pictures/'+obj.img)} alt='logo'/>
        <div className="skillname">
            {obj.name}
        </div>
    </div>
  )
}

export default SkillPoster