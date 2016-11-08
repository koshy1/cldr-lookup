import React from "react";
import SearchResult from "./SearchResult";

export default class SearchResultList extends React.Component {

  constructor() {
    super();
    this.state = {
    };
  }

  render() {

    var divStyle = {
      textAlign: "center",
      margin: "0 auto",
      width: "50%",
    }

    var SearchResults = "";
    if (this.props.results.length != 0) {
      var SearchResults = this.props.results.map(function(result, i ) {
        return <SearchResult removeResultHandler={this.props.removeResultHandler} defaultData={result["defaultData"]} dedupedData={result["dedupedData"]} title={result["query"]} key={i} id={i} />;
      }.bind(this));
    }

    return (
      <div style={divStyle}>
        {SearchResults}
      </div>
    );
  }
}

SearchResultList.propTypes = {
  removeResultHandler: React.PropTypes.func,
  results: React.PropTypes.array
};
