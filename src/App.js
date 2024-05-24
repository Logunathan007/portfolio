import { useState } from 'react';
import './App.css';
import LeftSection from './Components/LeftSection';
import RightSection from './Components/RightSection';
import VerticalLine from './Components/VerticalLine';

function App() {
  
  let [leftHide,setLeftHide] = useState(false)
  return (
    <div className="App">
      <LeftSection
        leftHide = {leftHide}
        setLeftHide = {setLeftHide}
       />
      <VerticalLine 
        leftHide = {leftHide}
        setLeftHide = {setLeftHide}
      />
      <RightSection 
        leftHide = {leftHide}
        setLeftHide = {setLeftHide}
      />
      
    </div>
    
  );
}

export default App;
