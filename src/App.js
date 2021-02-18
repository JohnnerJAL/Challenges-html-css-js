import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import Challenge1 from "./Pages/Challenge1";
import Challenge2 from "./Pages/Challenge2";
import Challenge3 from "./Pages/Challenge3";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact path="/" component={Home}/>
          <Route exact path="/challenge/1" component={Challenge1}/>
          <Route exact path="/challenge/2" component={Challenge2}/>
          <Route exact path="/challenge/3" component={Challenge3}/>
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;