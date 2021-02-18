import React from "react";
import { Link } from "react-router-dom";

import "./Styles/Home.css";

function Home() {
  
  let challenges = [];

  for (let i=3; i<=27; i++) {
    challenges.push(i);
  }
  
  return (
    <section>
      <div className="container-challenges">

        <Link to="/challenge/1">Challenge 1</Link>
        <Link to="/challenge/2">Challenge 2</Link>

        {challenges.map((number) => {
          return (
            <a
              key={number}
              href={`https://jal-challenge-${number}.netlify.app/`}
              target="_blank"
            >
              {`Challenge ${number}`}
            </a>
          )
        })}

      </div>
    </section>
  )
}

export default Home;