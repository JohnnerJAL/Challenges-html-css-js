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
            <li><a href="https://johnner.netlify.app/">About me</a></li>
            <li>
              <form onSubmit={props.handleSubmit}>
                <label htmlFor="search-challenges">
                  <span>Search</span>
                  <input
                    id="search-challenges"
                    type="text"
                    name="challenge"
                    onChange={props.handleChange}
                    value={props.search}
                    placeholder="Challenge"
                  />
                </label>
              </form>
            </li>
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