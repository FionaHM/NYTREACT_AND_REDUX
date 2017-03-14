// the reducer function
import {createStore, combineReducers } from 'redux';

const searchReducer = (state=[], action) => {
    switch(action.type){
        case 'SEARCH_TOPIC':
            return Object.assign({},state, {topic: action.topic});
        case 'SEARCH_STARTDATE':
            return Object.assign({},state, {startdate: action.startdate});
        case 'SEARCH_ENDDATE':
            return Object.assign({},state, {enddate: action.enddate});
        case 'SEARCH_RESULTS':
            return Object.assign({},state, {results: action.results});
        case 'SEARCH_SAVED':
            return Object.assign({},state, {saved: action.saved});
        }
    return state;
}

// const widgetReducer = function(state={}, action){
//     return state;
// }

const reducers = combineReducers({
    searchState: searchReducer
})

var store = createStore(reducers);

export default store;