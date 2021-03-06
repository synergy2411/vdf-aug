export const INCREMENT = "[COUNTER] to increase the counter"
export const DECREMENT = "[COUNTER] to decrease the counter"
export const ADD_NUMBER = "[COUNTER] to add a number"
export const SUBTRACT_NUMBER = "[COUNTER] to subtract the number" 

export const STORE_RESULT = "[RESULT] to store the counter value"
export const DELETE_RESULT = "[RESULT] to delete the counter value from result"

// Action Creators

export function onDeleteResult(idx){
    return {
        type : DELETE_RESULT,
        index : idx
    }
}

export function onStoreResult(ctr){
    return {
        type : STORE_RESULT,
        counter : ctr
    }
}

export function onAddNumber(value){
    return {
        type : ADD_NUMBER,
        value
    }
}

export function onSubtractNumber(value){
    return {
        type : SUBTRACT_NUMBER,
        value
    }
}