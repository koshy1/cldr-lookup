import React from "react";

export default class KeyValueItem extends React.Component {

  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    var itemString = ""
    if (this.props.format == "default") {
      itemString = this.props.resultKey + " : " + this.props.resultValue;
    }
    else {
      itemString = this.props.resultKey + " : " + this.props.resultValue.join(", ");
    }
    return (
      <div>
        {itemString}
      </div>
    );
  }
}

KeyValueItem.PropTypes = {
  format: React.PropTypes.string,
  resultKey: React.PropTypes.string,
  resultValue: React.PropTypes.object,
}
