import { useEffect, useState } from "react";
import "./App.css";
import LeftSection from "./Components/LeftSection";
import RightSection from "./Components/RightSection";
import VerticalLine from "./Components/VerticalLine";

function App() {
  let [screenType, setScreenType] = useState("window")
  let [leftHide, setLeftHide] = useState(false);
  useEffect(() => {
    function checkSize(){
      if(window.innerWidth > 1400){
        setScreenType("window")
      }
    }
    window.addEventListener('resize',checkSize);
    return () => {
      window.removeEventListener('resize',checkSize);
    }
  },[]);
  return (
    <div className="App">
      <LeftSection leftHide={leftHide} setLeftHide={setLeftHide} />
      <VerticalLine leftHide={leftHide} setLeftHide={setLeftHide} />
      <RightSection leftHide={leftHide} setLeftHide={setLeftHide} />
    </div>
  );
}

export default App;
