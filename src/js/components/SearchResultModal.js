import React from "react"

import Modal from "react-modal";
import KeyValueItem from "./KeyValueItem";


export default class SearchResultModal extends React.Component {
  constructor () {
    super();
    this.state = {
      open: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal () { this.setState({open: true}); }

  closeModal () { this.setState({open: false}); }

  render () {

    var tableStyle = {
      border: "1px solid black",
      borderCollapse: "collapse",
      width: "100%"
    }

    var buttonStyle = {
      float: "right",
    }

    var dataString = "";

    var dataKeys = Object.keys(this.props.data);
    dataString = dataKeys.map(function(k, i ) {
      return <tr key={i}><td style={tableStyle}><KeyValueItem resultKey={k} resultValue={this.props.data[k]} key={i} format={this.props.format} /></td></tr>;
    }.bind(this));

    return (
      <div>
        <button style={buttonStyle} onClick={this.openModal}>View All</button>
        <Modal isOpen={this.state.open} onRequestClose={this.closeModal}>
          <h1>{this.props.title}</h1>
          <table style={tableStyle}>
            <tbody>
              {dataString}
            </tbody>
          </table>
        </Modal>
      </div>
    );
  }
}

SearchResultModal.PropTypes = {
  title: React.PropTypes.string,
  data: React.PropTypes.object,
  format: React.PropTypes.string,
}
