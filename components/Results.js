var React = require("react");
var helper = require("../app/utils/helper.js");


var Results = React.createClass({
    
    // componentDidMount: function(){
    //      this.setState({ savedCount: this.props.savedcount})
    // },
    saveArticleClick: function(result){;
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

    },
    render: function() {
        
        var component = this;  // setting variable to ensure 'this' context is for the component 
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
});

module.exports = Results;