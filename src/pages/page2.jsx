import React, { Component } from "react";
import Component2 from "../component/component2";
import Component3 from "../component/component3";

class Page1 extends Component {
  render() {
    return (
      <div>
        <h1 style={{ color: "yellow", backgroundColor: "red" }}>Ini page 2</h1>
        <Component2 />
        <Component3 />
      </div>
    );
  }
}

export default Page1;
