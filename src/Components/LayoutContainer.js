import React, { useState, createContext } from "react";
import Layout from "./Layout";

const ContextSearch = createContext();

function LayoutContainer(props) {

  const [search, setSearch] = useState({
    challenge: ""
  });
  
  function handleChange(e) {
    setSearch({
      [e.target.name]: e.target.value
    });
  }
  
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Layout
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      search={search.challenge}
    >
      <ContextSearch.Provider value={search}>
        {props.children}
      </ContextSearch.Provider>
    </Layout>
  )
}

export { LayoutContainer, ContextSearch } ;