import React from "react";

import "./Styles/Layout.css";

function Layout(props) {
  return (
    <React.Fragment>
      <header>
        <nav>
          <div>
            JAL
          </div>
          <ul>
            <li>Home</li>
            <li>Challenges</li>
          </ul>
        </nav>
      </header>

      <main>
        {props.children}
      </main>
      
      <footer>
        Waiting for more
      </footer>
    </React.Fragment>
  )
}

export default Layout;