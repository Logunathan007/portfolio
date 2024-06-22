import React from "react";

const Education = () => {
  let educationDetails = [
    {
      line1: "Karpagam Institute of Technology, Coimbatore",
      line2: "B. E. Electronics and Communication Engineering (2020 - 2024)",
      line3: "CGPA : 8",
    },
    {
      line1: "N. S. Boys Hr. Sec. School, Theni",
      line2: (
        <>
          HSC (12<sup>th</sup> Std.) : 70%
        </>
      ),
      line3: (
        <>
          SSLC (10<sup>th</sup> Std.) : 75%
        </>
      ),
    },
  ];

  return (
    <div className="education contentbox" id="education">
      <div className="title">
        <h1> EDUCATION </h1>
        <div className="hline"></div>
      </div>
      <div className="details">
        <div className="detailbox">
          {educationDetails.map((ele, ind) => {
            return (
              <div className="rowanim" key={ind}>
                <div className="row" key={ind}>
                  <h3> {ele.line1} </h3>
                  <h4> {ele.line2} </h4>
                  <h4> {ele.line3} </h4>
                </div>
              </div>
            );
          })}
        </div>
        <div className="detailimg">
          <div className="imggif"></div>
        </div>
      </div>
    </div>
  );
};

export default Education;
