import React from "react";

import SearchResultModal from "./SearchResultModal";
import KeyValueItem from "./KeyValueItem";

export default class SearchResult extends React.Component {

  constructor() {
    super();
    this.state = {
      format: "default"
    };
    this.changeDataFormat = this.changeDataFormat.bind(this);
    this.removeSelfHandler = this.removeSelfHandler.bind(this);
  }

  removeSelfHandler() {
    this.props.removeResultHandler(this.props.id);
  }

  changeDataFormat() {
    if (this.state.format == "default") {
      this.setState({
        format: "deduped"
      });
    }
    else {
      this.setState({
        format: "default"
      });
    }
  }

  render() {

    var containerStyle = {
      width: "100%",
      maxHeight: 500,
      margin: "5%",
      border: "2px solid black",
      backgroundColor: "ffffff",
      boxShadow: "0 2 7 292929",
      borderRadius: 10,
    }

    var headerStyle = {
      height: 40,
      borderBottom: "1px solid black",
      backgroundColor: "whiteSmoke",
      height: 40,
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      padding: 5,
    }

    var bodyStyle = {
      marginTop: 0,
      maxHeight: 388,
      overflow: "auto",
      textAlign: "center",
    }

    var footerStyle = {
      height: 40,
      backgroundColor: "whiteSmoke",
      borderTop: "1px solid black",
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
    }

    var buttonStyle = {
      float: "right",
    }

    var tableStyle = {
      border: "1px solid black",
      borderCollapse: "collapse",
      width: "100%"
    }

    var dataPreview = "";
    if (this.state.format == "default" && Object.keys(this.props.defaultData).length != 0) {
      var dataKeys = Object.keys(this.props.defaultData).slice(0,5);
      dataPreview = dataKeys.map(function(k, i ) {
        return <tr key={i}><td style={tableStyle}><KeyValueItem format={"default"} resultKey={k} resultValue={this.props.defaultData[k]} key={i} /></td></tr>;
      }.bind(this));
    }

    else if (this.state.format == "deduped" && Object.keys(this.props.defaultData).length != 0){
      var dataKey = Object.keys(this.props.dedupedData)[0];
      dataPreview = <tr key={0}><td style={tableStyle}><KeyValueItem format={"deduped"} resultKey={dataKey} resultValue={this.props.dedupedData[dataKey]} key={0} /></td></tr>;
    }

    return (
      <div style={containerStyle}>
        <div style={headerStyle}>
        {this.props.title}
        <button onClick={this.removeSelfHandler} style={buttonStyle}>Remove</button>
        </div>
        <div style={bodyStyle}>
          <table style={tableStyle}>
            <tbody>
              {dataPreview}
            </tbody>
          </table>
          ...
        </div>
        <div style={footerStyle}>
          <SearchResultModal data={this.state.format == "default" ? this.props.defaultData : this.props.dedupedData} title={this.props.title} format ={this.state.format} />
          <button onClick={this.changeDataFormat} style={buttonStyle}>{this.state.format == "default" ? "Dedupe" : "Revert"}</button>
        </div>
      </div>
    );
  }
}

SearchResult.PropTypes = {
  removeResultHandler: React.PropTypes.func,
  defaultData: React.PropTypes.object,
  dedupedData: React.PropTypes.object,
  title: React.PropTypes.string,
  id: React.PropTypes.number,
}
