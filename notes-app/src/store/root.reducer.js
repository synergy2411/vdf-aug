import * as fromActions from './root.actions';


const initialState = {
    counter : 0,
    result : []
}
function rootReducer(state = initialState, action){
    switch (action.type) {
        case fromActions.INCREMENT: return { 
            ...state,
            counter : state.counter + 1}
        case fromActions.DECREMENT: return { 
            ...state,
            counter : state.counter - 1}
        case fromActions.ADD_NUMBER: return { 
            ...state,
            counter : state.counter + action.value}
        case fromActions.SUBTRACT_NUMBER : return { 
            ...state,
            counter : state.counter - action.value}
        case fromActions.STORE_RESULT : return {
            ...state,
            result : [...state.result, action.counter]
        }
        case fromActions.DELETE_RESULT: {
            const duplicateResult = state.result.filter((item, index)=>{return index !== action.index})
            return {
            ...state,
            result : duplicateResult
        }}
        default: return state;
    }
}

export default rootReducer;