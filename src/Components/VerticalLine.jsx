import React from 'react'
import '../App.css'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";


const VerticalLine = ({leftHide,setLeftHide}) => {
  return (
    <div className={`verticalline ${leftHide?'goleft':'goright'}`}>
        <div className='arrowbox' onClick={()=>{
          setLeftHide(!leftHide);
        }}> 
          {(leftHide)?<FaArrowRight className='arrows'/>:<FaArrowLeft className='arrows' />}
        </div>
        <div className="vline"> </div>
    </div>
  )
}

export default VerticalLine