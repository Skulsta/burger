import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./components/containers/BurgerBuilder/BurgerBuilder";

class App extends Component {
  render() {
    return (
      <Layout>
        <h1>Smooth.</h1>
        <BurgerBuilder></BurgerBuilder>
      </Layout>
    );
  }
}
export default App;
