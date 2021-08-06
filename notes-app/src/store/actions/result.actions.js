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
