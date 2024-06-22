import React, { useEffect, useRef } from "react";

const Button = () => {
  const buttonRef = useRef(null);

  const distanceBetween = (p1x, p1y, p2x, p2y) => {
    const dx = p1x - p2x;
    const dy = p1y - p2y;
    return Math.sqrt(dx * dx + dy * dy);
  };

  useEffect(() => {
    const button = buttonRef.current;
    let left = button.getBoundingClientRect().left;
    let top = button.getBoundingClientRect().top;
    const changeOfsetLeftTop = (event) => {
      left = button.getBoundingClientRect().left;
      top = button.getBoundingClientRect().top;
    };

    const handleMouseMove = (event) => {
      const radius = Math.max(
        button.offsetWidth * 0.75,
        button.offsetHeight * 0.75,
        100
      );
      const bx = left + button.offsetWidth / 2;
      const by = top + button.offsetHeight / 2;
      const dist = distanceBetween(event.clientX, event.clientY, bx, by) * 2;
      const angle = Math.atan2(event.clientY - by, event.clientX - bx);

      const ox = -1 * Math.cos(angle) * Math.max(radius - dist, 0);
      const oy = -1 * Math.sin(angle) * Math.max(radius - dist, 0);

      const rx = oy / 2;
      const ry = -ox / 2;

      button.style.transition = `all 0.1s ease`;
      button.style.transform = `translate(${ox}px, ${oy}px) rotateX(${rx}deg) rotateY(${ry}deg)`;
      button.style.boxShadow = `0px ${Math.abs(oy)}px ${
        (Math.abs(oy) / radius) * 40
      }px rgba(0,0,0,0.15)`;
    };

    const abo = document.getElementById('about');
    const resize = new ResizeObserver(changeOfsetLeftTop)
    resize.observe(abo)
    document.addEventListener("mousemove", handleMouseMove);
    document.getElementById("rightsection").addEventListener("scroll", changeOfsetLeftTop);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", changeOfsetLeftTop);
    };
  }, []);

  return (
    <div data-aos="flip-up" className="button button-wrapper">
      <a
        target="_blank"
        href="https://drive.google.com/file/d/1-Dq_7oaVtA-kJWN7DXNLkejM2PdBa5VY/view?usp=sharing"
        rel="noreferrer"
      >
        <span>Click to View Resume 😂 :  </span>
      </a>
      <button ref={buttonRef} id="resbutton">
        Resume
      </button>
    </div>
  );
};

export default Button;
