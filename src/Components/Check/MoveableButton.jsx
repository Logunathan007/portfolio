import React, {useState, useEffect, useRef} from "react";
import "./MovableButton.css"

const MoveableButton = () => {
  const [fl, setFl] = useState(false);
    const buttonRef = useRef(null);

    const distanceBetween = (p1x, p1y, p2x, p2y) => {
        const dx = p1x - p2x;
        const dy = p1y - p2y;
        return Math.sqrt(dx * dx + dy * dy);
    };

    useEffect(() => {
        const button = buttonRef.current;
        let left = button.offsetLeft;
        let top = button.offsetTop;
        const changeOfsetLeftTop = (event)=>{
            console.log("onscrool trigered")
            left = button.getBoundingClientRect().left;
            top = button.getBoundingClientRect().top;
        }

        const handleMouseMove = (event) => {
            if (fl) return;

            
            const radius = Math.max(button.offsetWidth * 0.75, button.offsetHeight * 0.75, 100);
            console.log(button.getBoundingClientRect().left,button.getBoundingClientRect().top);
            const bx = left + button.offsetWidth / 2;
            const by = top + button.offsetHeight / 2;
            console.log("leto",left,top)
            console.log("left",button.parentNode.offsetLeft , button.offsetLeft , button.offsetWidth)
            console.log("top",button.parentNode.offsetTop , button.offsetTop , button.offsetHeight )
            const dist = distanceBetween(event.clientX, event.clientY, bx, by) * 2;
            const angle = Math.atan2(event.clientY - by, event.clientX - bx);

            const ox = -1 * Math.cos(angle) * Math.max((radius - dist), 0);
            const oy = -1 * Math.sin(angle) * Math.max((radius - dist), 0);

            const rx = oy / 2;
            const ry = -ox / 2;

            button.style.transition = `all 0.1s ease`;
            button.style.transform = `translate(${ox}px, ${oy}px) rotateX(${rx}deg) rotateY(${ry}deg)`;
            button.style.boxShadow = `0px ${Math.abs(oy)}px ${Math.abs(oy) / radius * 40}px rgba(0,0,0,0.15)`;
        };

        document.getElementById("about").addEventListener('mousemove', handleMouseMove);
        window.addEventListener("scroll",changeOfsetLeftTop)
        return () => {
            document.getElementById("about").removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener("scroll",changeOfsetLeftTop)
        };
    }, [fl]);

    const handleChange = () => {
        setFl(!fl);
    };

    return (
        <div id="about" className="button-wrapper" style={{display: "grid", placeItems: "center"}}>    
            <label htmlFor="giveup">Give Up</label>
            <button ref={buttonRef}>Resume</button>
        </div>
    );
};

export default MoveableButton;
