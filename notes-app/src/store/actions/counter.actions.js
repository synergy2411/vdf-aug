export const INCREMENT = "[COUNTER] to increase the counter"
export const DECREMENT = "[COUNTER] to decrease the counter"
export const ADD_NUMBER = "[COUNTER] to add a number"
export const SUBTRACT_NUMBER = "[COUNTER] to subtract the number" 

// Action Creators

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

export function asyncAddNumber(value){
    return function(dispatch) {
        setTimeout(() => {
            dispatch(onAddNumber(value))
        }, 3000)
    }
}