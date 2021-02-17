import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Pages/Home";
import Layout from "./Components/Layout";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact path="/" component={Home}/>
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;