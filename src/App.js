import React, { Component } from "react";
import Layout from "./components/containers/Layout/Layout";
import BurgerBuilder from "./components/containers/BurgerBuilder/BurgerBuilder";

class App extends Component {
  render() {
    return (
      <Layout>
        <BurgerBuilder></BurgerBuilder>
      </Layout>
    );
  }
}
export default App;
