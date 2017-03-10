
// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");
// var Main = require("../components/Main.js");
var routes = require("../config/routes.js");
import store from './redux.js'
import {Provider} from 'react-redux'

// if (typeof window !== 'undefined') {
//     window.React = React;
// }

ReactDOM.render(<Provider store={store}>{routes}</Provider>, document.getElementById("app"));



