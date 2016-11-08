import React from "react";

import Header from "./Header";
import SearchBar from "./SearchBar";
import SearchResultList from "./SearchResultList";

var resourceUrl = "http://localhost:8081/api/cldr/"

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      results: []
    };
    this.submitQuery = this.submitQuery.bind(this);
    this.removeSearchResult = this.removeSearchResult.bind(this);
  }

  removeSearchResult(index) {
    if (index == 0) {
      this.setState({
        results: this.state.results.slice(1, this.state.results.length)
      });
    }
    else {
      this.setState({
        results: this.state.results.slice(0, index).concat(this.state.results.slice(index+1, this.state.results.length))
      });
    }
  }

  submitQuery(query) {
    fetch(resourceUrl+"display_type/default/delimiter/"+query, {dataType: 'jsonp', method: "GET"} )
        .then((response) => response.json())
        .then((responseData) => {
          this.setState({
            results: this.state.results.concat({"defaultData":responseData["defaultData"], "dedupedData":responseData["dedupedData"], "query": query})
          });
        });
  }

  render() {

    return (
      <div>
        <Header />
        <SearchBar submitQuery={this.submitQuery}/>
        <SearchResultList removeResultHandler={this.removeSearchResult} results={this.state.results}/>
      </div>
    );
  }
}
