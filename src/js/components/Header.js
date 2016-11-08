import React from "react";

export default class Header extends React.Component {

  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    var h1Style = {
      textAlign: "center",
    }
    
    return (
      <div>
        <h1 style={h1Style}> CLDR Lookup </h1>
      </div>
    );
  }
}
