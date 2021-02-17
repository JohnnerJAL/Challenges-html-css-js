import React from "react";

import "./Styles/Home.css";

function Home() {
  
  let challenges = [];

  for (let i=1; i<=25; i++) {
    challenges.push(i);
  }

  console.log(challenges)
  
  return (
    <section>
      <div className="container-challenges">
        {/* {
        challenges.forEach((el, number) => {
          console.log(number)
          return (
            <a href={`https://jal-challenge-${number}.netlify.app/`}>{`Challenge ${number}`}</a>
          )
        })
        } */}

        <a href={`https://jal-challenge-1.netlify.app/`} target="_blank">Challenge 1</a>
        <a href={`https://jal-challenge-2.netlify.app/`} target="_blank">Challenge 2</a>
        <a href={`https://jal-challenge-3.netlify.app/`} target="_blank">Challenge 3</a>
        <a href={`https://jal-challenge-4.netlify.app/`} target="_blank">Challenge 4</a>
        <a href={`https://jal-challenge-5.netlify.app/`} target="_blank">Challenge 5</a>
        <a href={`https://jal-challenge-6.netlify.app/`} target="_blank">Challenge 6</a>
        <a href={`https://jal-challenge-7.netlify.app/`} target="_blank">Challenge 7</a>
        <a href={`https://jal-challenge-8.netlify.app/`} target="_blank">Challenge 8</a>
        <a href={`https://jal-challenge-9.netlify.app/`} target="_blank">Challenge 9</a>
        <a href={`https://jal-challenge-10.netlify.app/`} target="_blank">Challenge 10</a>
        <a href={`https://jal-challenge-11.netlify.app/`} target="_blank">Challenge 11</a>
        <a href={`https://jal-challenge-12.netlify.app/`} target="_blank">Challenge 12</a>
        <a href={`https://jal-challenge-13.netlify.app/`} target="_blank">Challenge 13</a>
        <a href={`https://jal-challenge-14.netlify.app/`} target="_blank">Challenge 14</a>
        <a href={`https://jal-challenge-15.netlify.app/`} target="_blank">Challenge 15</a>
        <a href={`https://jal-challenge-16.netlify.app/`} target="_blank">Challenge 16</a>
        <a href={`https://jal-challenge-17.netlify.app/`} target="_blank">Challenge 17</a>
        <a href={`https://jal-challenge-18.netlify.app/`} target="_blank">Challenge 18</a>
        <a href={`https://jal-challenge-19.netlify.app/`} target="_blank">Challenge 19</a>
        <a href={`https://jal-challenge-20.netlify.app/`} target="_blank">Challenge 20</a>
        <a href={`https://jal-challenge-21.netlify.app/`} target="_blank">Challenge 21</a>
        <a href={`https://jal-challenge-22.netlify.app/`} target="_blank">Challenge 22</a>
        <a href={`https://jal-challenge-23.netlify.app/`} target="_blank">Challenge 23</a>
        <a href={`https://jal-challenge-24.netlify.app/`} target="_blank">Challenge 24</a>
        <a href={`https://jal-challenge-25.netlify.app/`} target="_blank">Challenge 25</a>
        <a href={`https://jal-challenge-26.netlify.app/`} target="_blank">Challenge 26</a>
        <a href={`https://jal-challenge-27.netlify.app/`} target="_blank">Challenge 27</a>
        <a href={`https://jal-challenge-28.netlify.app/`} target="_blank">Challenge 28</a>
        <a href={`https://jal-challenge-29.netlify.app/`} target="_blank">Challenge 29</a>
        <a href={`https://jal-challenge-30.netlify.app/`} target="_blank">Challenge 30</a>


      </div>
    </section>
  )
}

export default Home;