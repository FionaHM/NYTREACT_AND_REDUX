// the reducer function
import {createStore, combineReducers } from 'redux';

// var articleReducer = function(state, action){
//     if (state === undefined){
//         state = []
//     }
//     if (action_type === "SAVE_ARTICLE"){
//         var newState = state.concat([action.article])
//         // dont change the original state just create a copy of the state and return it
//         return newState;
//     }
//     // if no action then just return original state
//     return state;
// }

// the 

const searchReducer = function(state={}, action){
    switch(action.type){
    case 'SEARCH_TOPIC':
        return Object.assign({},state, {topic: action.topic});
    case 'SEARCH_STARTDATE':
        return Object.assign({},state, {startdate: action.startdate});
    case 'SEARCH_ENDDATE':
        return Object.assign({},state, {enddate: action.enddate});
    case 'SEARCH_RESULTS':
        return Object.assign({},state, {result: action.result});
    case 'SEARCH_SAVED':
        return Object.assign({},state, {saved: action.saved});
    }
    return state;
}

const widgetReducer = function(state={}, action){
    return state;
}

const reducers = combineReducers({
    searchState = searchReducer,
    widgetState = widgetReducer
})

var store = createStore(reducers);

export default store;