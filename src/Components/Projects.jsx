import React from 'react'

const Projects = () => {
  let projectDetails = [
    {
      name : "PDF Reader",
      description : "In this project, I leverage the capabilities of the TextBlob library to facilitate seamless translation of text from one language to another.  Additionally, I employ the gTTS (Google Text-to-Speech) package to enhance user experience by converting the translated text into speech. This feature not only offers accessibility to users who may prefer listening over reading.",
      tech : "Python, GTTS, TextBlob",
      year : "Aug 2020 - Oct 2020"
    },
    {
      name : "Billing Software",
      description : "In this billing software project, I'll incorporate features using CRUD operations. This includes adding new items to the shop and automatically removing them from the list once they're purchased. Additionally, whenever a new item is added, the total product count will increase. These updates will be continuously reflected in the database, ensuring real-time access to data.",
      tech : "HTML, CSS, JavaScript, Python, Flask, SQLite3",
      year : "Aug 2023 - Sep 2023"
    },
    {
      name : "DOB Alert",
      description : "In the 'DOB Alert' project, I'll create a Database to store details of friends and family members. Using a custom algorithm, I'll select a person based on their birth date and set up a reminder using a Telegram bot to wish them on their birthday. This reminder will be triggered using the PythonAnyWhere website.",
      tech : "Python, SQL, Telegram BOT",
      year : "Apr 2023 - May 2023"
    },
    {
      name : "CGPA Calculator",
      description : "In the CGPA Calculator, I'll store individual student details along with their grades in a Database. By processing these details, I'll calculate the GPA (Grade Point Average) and CGPA (Cumulative Grade Point Average) for each student. This project provides an opportunity to delve into SQL joins and deepen my understanding of database operations.",
      tech : "Console Application | Python, SQL",
      year : "Aug 2020 - Oct 2020"
    },
    {
      name : "Street Light Fault Detection",
      description : "In the Street Light Fault Detection project, I tackled both hardware and software aspects. On the hardware side, I employed an Arduino UNO with an LDR sensor for fault detection, while utilizing a Node MCU (ESP8266) to transmit information to the cloud. On the software end, I developed a React application to retrieve data from the cloud and present it in a web application interface. This project provided valuable insights and knowledge, particularly in integrating hardware with cloud-based solutions and developing Web applications for data visualization.",
      tech : "Web Application | IoT | HTML, CSS, JS, React JS, Arduino Programming",
      year : "Feb 2024 - Apr 2024"
    },
  ]
  var fl = true;
  return (
    <div className='projects contentbox' id='projects'>
      <div className="title">
        <h1> PROJECTS </h1>
        <div className="hline"></div>
      </div>
      {
        projectDetails.map((ele,ind)=>{
          if(fl){
            fl = false;
            return(
              <div className="projectcard" key={ind}>
                <div className="left">
                  <img src="" alt="log" className="projectimg"/>
                </div>
                <div className="right">
                  <h2 className="projectname">{ele.name}</h2>
                  <h3 className="techstack">{ele.tech}</h3>
                  <h4 className="duration">{ele.year}</h4>
                </div>
              </div>
            )
          }else{
            fl = true;
            return(
              <div className="projectcard" key={ind}>
                <div className="right">
                  <h2 className="projectname">{ele.name}</h2>
                  <h3 className="techstack">{ele.tech}</h3>
                  <h4 className="duration">{ele.year}</h4>
                </div>
                <div className="left">
                  <img src="" alt="logo" className="projectimg"/>
                </div>
              </div>
            )
          }
        })
      }
      <div className="projectcard" key='ind'>
        <div className="left">
          <img src="" alt="logu" className="projectimg"/>
        </div>
        <div className="right">
          <h2 className="projectname">PDF Reader</h2>
          <h3 className="techstack">Tech : Python, GTTS, TextBlob</h3>
          <h4 className="duration">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores pariatur quasi nobis magni aliquam minus. Nemo rem praesentium similique eligendi repellendus cumque facere, pariatur cum delectus commodi nam voluptatibus enim.</h4>
        </div>
      </div>
    </div>
  )
}

export default Projects