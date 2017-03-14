var React = require("react");
// var ReactDOM = require("react-dom");
var Search = require("./Search.js").default;

import {connect } from 'react-redux';
import store from './redux.js'

var Main = React.createClass({
  // getInitialState: function() {
  //     return {
  //         url:"",
  //         headline: "",
  //         source: "",
  //         pubdate: "",
  //         abstract: ""
  //     }
  // },
  render: function () {
    return (<div className="container">
        <div className="jumbotron">
            <div className="page-header">
            <h2 className="text-center">New York Times Article Scrubber</h2>
            <p className="text-center">Search for and save articles of interest!</p>
            <hr/>
            </div>
        </div>
        <div className="well">
          <Search />
        </div>
    </div>);
  }
});

export default Main;