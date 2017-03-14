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
  
class Results extends React.Component {

    constructor(props) {
        super(props);

  

        // Functions must be bound manually with ES6 classes or Another way is to bind them inline, where you use them 
        this.saveArticleClick = this.saveArticleClick.bind(this);
    }
    
    // componentDidMount: function(){
    //      this.setState({ savedCount: this.props.savedcount})
    // },
    saveArticleClick(result){
        var articleObj = {
            id: result._id,
            weburl: result.web_url,
            headline: result.headline.main,
            snippet: result.snippet,
            pubdate: result.pub_date
        };
        
        // save the article
        helper.postArticle(articleObj);
        // refresh the list
        helper.querySaved().then((response) => {
            // update state of parent
            this.props.handleSavedData(response);
        })
    }

    render() {
        // Pass props to dumb components from smart components
        console.log("this.props.results", this.props.results);
        var component = this;  // setting variable to ensure 'this' context is for the component 
        if (this.props.results){
        var resultComponents = this.props.results.map(function(result) {
            return <div className="row results" key={result._id}>
                <div className="col-md-4 text-center"><a href={result.web_url}>{result.headline.main}</a></div>
                <div className="col-md-4">{result.snippet}</div>
                <div className="col-md-2 text-center">{result.pub_date}</div>
                <div className="col-md-2 text-center">
                    <button onClick={() => component.saveArticleClick(result)} className="btn btn-default stext-center btn-primary">Save</button>
                </div>
            </div>
        });
        }
        return (<div>
                    <div className="panel panel-default">
                    <div className="panel-heading text-center"><h4>Results</h4></div>
                    <div className="panel-body">
                        <div className="well">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="row results">
                                        <div className="text-center col-md-4"><strong>Article</strong></div>
                                        <div className="text-center col-md-4"><strong>Extract</strong></div>
                                        <div className="text-center col-md-2"><strong>Published Date</strong></div>
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
                </div>
                </div>) }
}

const mapStateToProps = (store,ownProps) => {

    return {
        results: store.searchState.results
    }
}
//  export default Results;
export default connect(mapStateToProps)(Results);