import React from "react";
import Search from "./Search.js";
import {connect } from 'react-redux';
import store from './redux.js';

// class InputControlES6 extends React.Component {
//   constructor(props) {
//     super(props);

//     // Set up initial state
//     this.state = {
//       text: props.initialValue || 'placeholder'
//     };

//     // Functions must be bound manually with ES6 classes or Another way is to bind them inline, where you use them 
//     this.handleChange = this.handleChange.bind(this);
//   }
class Main extends React.Component {
  constructor(props) {
      super(props);
  }
  render() {
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
};

export default Main;