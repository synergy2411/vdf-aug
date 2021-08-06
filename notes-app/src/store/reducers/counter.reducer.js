import * as counterActions from "../actions/counter.actions" 
const initialState = {
    counter : 0
}
function counterReducer(state = initialState, action){
    switch (action.type) {
        case counterActions.INCREMENT: return { 
            ...state,
            counter : state.counter + 1}
        case counterActions.DECREMENT: return { 
            ...state,
            counter : state.counter - 1}
        case counterActions.ADD_NUMBER: return { 
            ...state,
            counter : state.counter + action.value}
        case counterActions.SUBTRACT_NUMBER : return { 
            ...state,
            counter : state.counter - action.value}
        default: return state;
    }
}

export default counterReducer;