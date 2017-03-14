
// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");
// import 'babel-polyfill';
// var Main = require("../components/Main.js");
import routes from "../config/routes.js";
import store from '../components/redux.js'
import {Provider} from 'react-redux'

// if (typeof window !== 'undefined') {
//     window.React = React;
// }

ReactDOM.render(<Provider store={store}>{routes}</Provider>, document.getElementById("app"));



