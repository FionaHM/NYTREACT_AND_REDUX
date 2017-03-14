var React = require("react");
var ReactRouter = require("react-router");
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory =  ReactRouter.hashHistory;
var IndexRoute = require("react-router").IndexRoute;
var Main = require("../components/Main").default;
var Search = require("../components/Search").default;
var Results = require("../components/Results").default;
var Saved = require("../components/Saved").default;


var routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="/" component={Search}/>
        </Route> 
    </Router>
)

export default routes;