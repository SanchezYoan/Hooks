import React, { Component } from "react";

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      age: 23,
      name: "Denis",
    };
    thishandleClick = this.thishandleClick(this);
  }

  componentDidMount() {
    // Algo à faire quand le composant se lance
  }
  handleCLick() {
    // Algo
  }
  render() {
    return <div> textInComponent </div>;
  }
}
