import React, { useEffect } from "react";

import "./Styles/Challenge1.css";

function Challenge1() {
  useEffect(() => {
    const panels = document.querySelectorAll(".panel");
    panels.forEach( panel => { 
      panel.addEventListener("click", e => {
        removeActiveClasses();
        e.target.classList.add("active");
      })
    })
  
    function removeActiveClasses() {
      panels.forEach( panel => {
      panel.classList.remove("active");
      })
    }
  }, []);

  const image1 = {
    backgroundImage: "url('https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')"
  }
  const image2 = {
    backgroundImage: "url('https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')"
  }
  const image3 = {
    backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80')"
  }
  const image4 = {
    backgroundImage: "url('https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80')"
  }
  const image5 = {
    backgroundImage: "url('https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')"
  }

  return (
    <section className="container-challenge-1">
      <div className="challenge-1">

        <div className="panel active" style={image1}>
          <h3>Explore The World</h3>
        </div>
        <div className="panel" style={image2}>
          <h3>Wild Forest</h3>
        </div>
        <div className="panel" style={image3}>
          <h3>Sunny Beach</h3>
        </div>
        <div className="panel" style={image4}>
          <h3>City on Winter</h3>
        </div>
        <div className="panel" style={image5}>
          <h3>Mountains - Clouds</h3>
        </div>

      </div>
    </section>
  )
}

export default Challenge1;