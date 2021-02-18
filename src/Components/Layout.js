import React from "react";
import { Link } from "react-router-dom";

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
            <li><Link to="/">Home</Link></li>
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