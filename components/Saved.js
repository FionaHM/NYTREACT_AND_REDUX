import React from "react";
import helper from"../app/utils/helper.js";
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
  

class Saved extends React.Component{
    constructor(props) {
        super(props);

        this.removeArticleClick = this.removeArticleClick.bind(this);


    }

    removeArticleClick(result){
        helper.deleteArticle(result.id)
        // update state of parent
        helper.querySaved().then((response) => {
            // update state of parent
            this.props.handleSavedData(response);
        })

    }

    render() {
        // var component = this;  // setting variable to capture 'this' for use below
        console.log(this.props.saved);
        if (this.props.saved){
            var resultComponents = this.props.saved.map((result) => {
    
            return (<div className="row results" key={result.id}>
                    <div className="col-md-4 text-center"><a href={result.weburl}>{result.headline}</a></div>
                    <div className="col-md-4">{result.snippet}</div>
                    <div className="col-md-2 text-center">{result.created_at}</div>
                    <div className="col-md-2 text-center">
                        <button onClick={() => this.removeArticleClick(result)} className="btn btn-default text-center btn-primary">Delete</button>
                    </div>
                </div>)
            });
        }
            return (<div className="panel panel-default">
                    <div className="panel-heading text-center"><h4>Saved Articles</h4></div>
                    <div className="panel-body">
                        <div className="well">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="row results">
                                        <div className="text-center col-md-4"><strong>Article</strong></div>
                                        <div className="text-center col-md-4"><strong>Extract</strong></div>
                                        <div className="text-center col-md-2"><strong>Saved Date</strong></div>
                                        <div className="text-center col-md-2"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                     <div className="row results"><div>{resultComponents}</div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>);
            }
        
}



// anything that was state now becomes props
// var mapStateToProps = function(store, ownProps){
//     return {
//         saved: store.searchState.saved
//     }
// };
// module.exports = Search;
export default Saved;
