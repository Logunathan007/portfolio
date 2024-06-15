import React, { useEffect, useState } from "react";

const LeftSection = ({ leftHide, setLeftHide }) => {
  const [active, setActive] = useState("about");

  const scrollToSection = (section) => {
    setActive(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView();
    }
  };

  const detemineActiveSection = () => {
    const ls = document.querySelectorAll(".contentbox");
    ls.forEach((ele) => {
      const rect = ele.getBoundingClientRect();
      if (rect.top <= 120 && rect.bottom >= 120) {
        setActive(ele.id);
      }
    });
  };
  useEffect(() => {
    const r = document.getElementById("rightsection");
    r.addEventListener("scroll", detemineActiveSection);
    return () => {
      r.removeEventListener("scroll", detemineActiveSection);
    };
  });
  return (
    <div className={`leftsection ${leftHide ? "full" : "half"}`}>
      <div className="navbtn">
        <div
          onClick={() => scrollToSection("about")}
          className={`navlink ${active === "about" ? "active" : ""}`}
        >
          ABOUT
        </div>
      </div>
      <div className="navbtn">
        <div
          onClick={() => scrollToSection("education")}
          className={`navlink ${active === "education" ? "active" : ""}`}
        >
          EDUCATION
        </div>
      </div>
      <div className="navbtn">
        <div
          onClick={() => scrollToSection("experience")}
          className={`navlink ${active === "experience" ? "active" : ""}`}
        >
          EXPERIENCE
        </div>
      </div>
      <div className="navbtn">
        <div
          onClick={() => scrollToSection("skills")}
          className={`navlink ${active === "skills" ? "active" : ""}`}
        >
          SKILLS
        </div>
      </div>
      <div className="navbtn">
        <div
          onClick={() => scrollToSection("projects")}
          className={`navlink ${active === "projects" ? "active" : ""}`}
        >
          PROJECTS
        </div>
      </div>
      <div className="navbtn">
        <div
          onClick={() => scrollToSection("contact")}
          className={`navlink ${active === "contact" ? "active" : ""}`}
        >
          CONTACT
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
