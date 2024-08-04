import { Component } from "react";

import "./converter.css";

export class Converter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colorInRGB: "",
    };
  }

  handleChange = (e) => {
    const colorInHex = e.target.value;
    if (colorInHex.length < 7) {
      this.setState({
        colorInRGB: "",
      });

      return;
    }

    const r = parseInt(colorInHex.slice(1, 3), 16);
    const g = parseInt(colorInHex.slice(3, 5), 16);
    const b = parseInt(colorInHex.slice(5, 7), 16);
    let Reg_Exp = /^#[0-9A-F]{6}$/i;
    if (
      !colorInHex.startsWith("#")
      || isNaN(r)
      || isNaN(g)
      || isNaN(b)
      || !Reg_Exp.test(colorInHex)
      || colorInHex.length > 7
    ) {
      this.setState({
        colorInRGB: "Ошибка!",
      });

      this.props.handleBackgroundChange("#E94B35");
      return;
    }

    this.props.handleBackgroundChange(colorInHex);

    this.setState({
      colorInRGB: `rgb(${r}, ${g}, ${b})`,
    });
  };

  render() {
    return (
      <form id="converter-form" autoComplete="off" onChange={this.handleChange}>
        <input type="text" id="converter-input" />
        <div id="converter-output">{this.state.colorInRGB}</div>
      </form>
    );
  }
}
