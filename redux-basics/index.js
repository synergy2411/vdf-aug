// @babel/core @babel/preset-env @babel/node
// ES6 Module System
// import {} from '';


// Common Module Pattern
const { createStore } = require("redux");

const initialState = {
    counter : 0
}
// Reducer
function rootReducer(state = initialState, action){
    if(action.type === "INCREMENT"){
        return {
            counter : state.counter + 1
        }
    }else if(action.type === "DECREMENT"){
        return {
            counter : state.counter - 1
        }
    }else if(action.type === "ADD_NUMBER"){
        return {
            counter : state.counter + action.value
        }
    }
    
    return state;
}

// Store
const store = createStore(rootReducer);

// Subscribe
store.subscribe(() => {
    console.log("STATE - ",  store.getState())
})


// Dispatch Action
store.dispatch({type : "INCREMENT"});

store.dispatch({type : "DECREMENT"});

store.dispatch({type : "ADD_NUMBER", value : 5 })
store.dispatch({type : "ADD_NUMBER", value : 5 })