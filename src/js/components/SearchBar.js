import React from "react";

export default class SearchBar extends React.Component {

  constructor() {
    super();
    this.state = {
      value: ""
    };
    this.newInput = this.newInput.bind(this);
    this.submit = this.submit.bind(this);
  }

  newInput(e) {
    this.setState({
      value: e.target.value
    })
  }

  submit() {
    this.props.submitQuery(this.state.value);
  }

  render() {

    var divStyle = {
      textAlign: "center",
      marginTop: "3%",
      marginBottom: "1%",
    }

    var inputStyle = {
      display: "inline",
      float: "none",
      width: "20%",
    }

    var buttonStyle = {
      display: "inline",
      float: "none",
      width: "10%",
    }

    return (
      <div style={divStyle}>
          <input style={inputStyle} onChange={this.newInput} placeholder="enter delimiter prop" />
          <button style={buttonStyle} onClick={this.submit}>Search</button>
      </div>
    );
  }
}

SearchBar.propTypes = {
  submitQuery: React.PropTypes.func
};
