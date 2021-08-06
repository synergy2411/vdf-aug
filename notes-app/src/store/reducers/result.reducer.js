import * as resultActions from "../actions/result.actions";

const initialState = {
    result : []
}
function resultReducer(state = initialState, action){
    switch (action.type) {
        case resultActions.STORE_RESULT : return {
            ...state,
            result : [...state.result, action.counter]
        }
        case resultActions.DELETE_RESULT: {
            const duplicateResult = state.result.filter((item, index)=>{return index !== action.index})
            return {
            ...state,
            result : duplicateResult
        }}
        default: return state;
    }
}

export default resultReducer;