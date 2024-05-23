import React from 'react'
import SkillPoster from '../SkillPoster/SkillPoster'

const Skills = () => {
  let skill_list = [
    {
      name:'HTML',
      img:'html.png'
    },
    {
      name:'CSS',
      img:'css.png'
    },
    {
      name:'JS',
      img:'js.png'
    },
    {
      name:'ReactJS',
      img:'reactjs.png'
    },
    {
      name:'C',
      img:'c.png'
    },
    {
      name:'C++',
      img:'c++.png'
    },
    {
      name:'Java',
      img:'java.png'
    },
    {
      name:'Python',
      img:'python.png'
    },
    {
      name:'Flask',
      img:'flask.png'
    },
    {
      name:'SQL',
      img:'sql.png'
    },
    {
      name:'GitHub',
      img:'github.png'
    },
    {
      name:'Git',
      img:'git.png'
    }
  ] 
  return (
    <div className='skills contentbox' id='skills'>
      <div className="title">
        <h1> SKILLS </h1>
        <div className="hline"></div>
      </div>
      <div className="skillbox">
        {
          skill_list.map((ele,ind)=>(
            <SkillPoster
              obj = {ele}
              key = {ind}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Skills