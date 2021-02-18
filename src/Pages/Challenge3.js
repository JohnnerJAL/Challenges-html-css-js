import React, { useState } from "react";

function Challenge3() {

  const [state, setState] = useState(1);

  function click() {
    setState(state+1)
    console.log(state)
  }

  return (
    <div>
      Hi everyone
      <button onClick={click}>{state}</button>
    </div>
  )
}

export default Challenge3;