import React from "react";
import ReactDOM from "react-dom";
import ReactTestUtils from 'react-addons-test-utils'

import Layout from "../src/js/components/Layout";
import Header from "../src/js/components/Header";
import KeyValueItem from "../src/js/components/KeyValueItem";
import SearchBar from "../src/js/components/SearchBar";
import SearchResultList from "../src/js/components/SearchResultList";
import SearchResult from "../src/js/components/SearchResult";
import SearchResultModal from "../src/js/components/SearchResultModal";


describe('Layout', function() {

  beforeEach(function() {
    this.component = ReactTestUtils.renderIntoDocument(<Layout />);
    this.renderedDOM = ReactDOM.findDOMNode(this.component);
  });

  it('should render a Header, SearchBar, and SearchResultList', function() {
    var header = this.renderedDOM.children[0];
    var searchBar = this.renderedDOM.children[1];
    var searchResultList = this.renderedDOM.children[2];
    expect(header.children[0].tagName).toEqual("H1");
    expect(searchBar.children[0].tagName).toEqual("INPUT");
    expect(searchBar.children[1].tagName).toEqual("BUTTON");
    expect(this.renderedDOM.children.length).toEqual(3);
  });

});
