var React = require("react");
var ReactDOM = require("react-dom");
var APIKey = require('../config/APIKEY.js');
var Results = require("./Results.js");
var helper = require("../app/utils/helper.js");
var Saved = require("./Saved.js");

import {connect } from 'react-redux';
import store from './redux.js'

var Search = React.createClass({
   
    // getInitialState: function() {
    //     return {
    //         topic: "",
    //         startdate: "",
    //         enddate: "",
    //         results: [],
    //         saved: []
    //     }
    // },
    handleData: function(result){
        // sets state of results and resets input fields
        if (result !== undefined){

            // this.setState({
            // topic: "",
            // startdate: "",
            // enddate: "",
            // results: result
            // });
            store.dispatch({ 
                type: 'SEARCH_TOPIC',
                topic: ""
            }, { 
                type: 'SEARCH_STARTDATE',
                startdate: ""
            }, { 
                type: 'SEARCH_ENDDATE',
                enddate: ""
            }, { 
                type: 'SEARCH_RESULTS',
                results: result
            });
        } else {
            // this.setState({
            //     topic: "",
            //     startdate: "",
            //     enddate: "",
            //     results: []
            // });
            store.dispatch({ 
                type: 'SEARCH_TOPIC',
                topic: ""
            }, { 
                type: 'SEARCH_STARTDATE',
                startdate: ""
            }, { 
                type: 'SEARCH_ENDDATE',
                enddate: ""
            }, { 
                type: 'SEARCH_RESULTS',
                results: []
            });  
        }
    },

    updateTopic: function(e) {
    //     this.setState({
    //     topic: e.target.value
    // })
        store.dispatch({ 
            type: 'SEARCH_TOPIC',
            topic: e.target.value
        })
    },
    updateStartDate: function(e) {
        // this.setState({
        // startdate: e.target.value
        // })
        store.dispatch({ 
            type: 'SEARCH_TOPIC',
            topic: e.target.value
        })
    },
    updateEndDate: function(e) {
        // this.setState({
        // enddate: e.target.value
        // })
        store.dispatch({ 
            type: 'SEARCH_TOPIC',
            topic: e.target.value
        })
    },

    // This function will respond to the user input
    // change anything that was state to props
    handleClick: function() {
        // gets article data from express server
        if ((this.props.topic !== "") && (this.props.startdate !== "") && (this.props.enddate !== "")){
            if ((this.state.startdate.length === 8 ) || (this.state.enddate.length === 8 )) {
                var searchQuery = "/search/"+this.props.topic+"/"+this.props.startdate+"/"+this.props.enddate;
                // use ESX6 Syntax to maintain 'this' context
                helper.runQuery(searchQuery).then((response) => {
                    this.handleData(response.docs)
                })
            }

        } 

    },
    handleSavedData: function(result){
        // this.setState({
        //     saved: result,
        // })
        store.dispatch({ 
            type: 'SEARCH_SAVED',
            saved: result
        })
    },
    componentDidMount: function(){
        // get data for passing to then component on load
        helper.querySaved().then((response) => {
            this.handleSavedData(response)
        })    
    },
    render: function () {

        return (<div>
                    <div className="panel panel-default">
                        <div className="panel-heading text-center"><h4>Search</h4></div>
                        <div className="panel-body">
                            <div className="form-group">
                                <label htmlFor="topic">Topic</label>
                                <input type="text"  className="form-control" onChange={this.updateTopic}  maxLength="70" id="topic" name="topic" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="start-date">Start Date (YYYYMMDD)</label>
                                <input type="text" value={this.props.startdate}  onChange={this.updateStartDate}  maxLength="8" className="form-control" id="startdate" name="startyear" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="end-date">End Year (YYYYMMDD)</label>
                                <input type="text" value={this.props.enddate} onChange={this.updateEndDate} name="quantity" maxLength="8" className="form-control" id="enddate" name="endyear" />
                            </div>
                        <button onClick={this.handleClick} type="submit" className="btn btn-default btn-primary">Search</button>
                        </div>
                    </div>
                    <div>
                        <Results results={this.props.results} handleSavedData={this.handleSavedData}/>
                        <Saved saved={this.props.saved} handleSavedData={this.handleSavedData}/>
                    </div>
                </div>
                 
      );
    }
});

// anything that was state now becomes props
const mapStateToProps = function(store){
    return {
        topic: store.searchState.topic,
        startdate: store.searchState.startdate,
        enddate: store.searchState.enddate,
        results: store.searchState.results
    }
};
// module.exports = Search;
export default connect(mapStateToProps)(Search);