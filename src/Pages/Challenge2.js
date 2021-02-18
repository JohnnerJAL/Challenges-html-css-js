import React, { useState, useEffect, useRef} from "react";

import "./Styles/Challenge2.css";

function Challenge2() {
  const prevButtonRef = useRef();
  const nextButtonRef = useRef();
  const progress = useRef();
  let circles;
  useEffect(() => {
    circles = document.querySelectorAll(".circle");
    prevButtonRef.current.setAttribute("disabled", true);
  }, []);
  let currentActive = 1;

  function nextButton() {
    currentActive++;
    if (currentActive === 2) {
      prevButtonRef.current.removeAttribute("disabled");
    }

    if (currentActive === 4) {
      nextButtonRef.current.setAttribute("disabled", true);
    }

    update();
  }

  function prevButton() {
    currentActive--;
    if (currentActive === 1) {
      prevButtonRef.current.setAttribute("disabled", true);
    }

    if (currentActive === 3) {
      nextButtonRef.current.removeAttribute("disabled");
    }

    update();
  }

  function update() {
    circles.forEach((circle, idx) => {
      if(idx < currentActive) {
        circle.classList.add('active');
      } else {
        circle.classList.remove('active');
      }
    })

    const actives = document.querySelectorAll(".active");
    progress.current.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';
  }

  return (
    <section className="container-challenge-2">
      <div className="challenge-2">

        <div className="progress-container">
          <div className="progress" ref={progress}></div>
          <div className="circle active">1</div>
          <div className="circle">2</div>
          <div className="circle">3</div>
          <div className="circle">4</div>
        </div>

        <button
          ref={prevButtonRef}
          onClick={prevButton}
          className="btn"
        >
          Prev
        </button>

        <button
          ref={nextButtonRef}
          onClick={nextButton}
          className="btn"
        >
          Next
        </button>

      </div>
    </section>
  )
}

export default Challenge2;