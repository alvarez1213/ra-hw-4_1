import React, { Component } from "react";

import "./App.css";

import { Converter } from "./components/Converter";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      backgroundColor: "#fff",
    };

    this.handleBackgroundChange = this.handleBackgroundChange.bind(this);
  }

  handleBackgroundChange = (newColor) => {
    this.setState({
      backgroundColor: newColor,
    });
  };

  render() {
    return (
      <div
        className="content"
        style={{ backgroundColor: this.state.backgroundColor }}
      >
        <Converter handleBackgroundChange={this.handleBackgroundChange} />
      </div>
    );
  }
}
