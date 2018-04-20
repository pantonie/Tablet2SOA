import * as types from './actionTypes'

export function loadGreetingSuccess(payload){
    return {type: types.LOAD_GREETING_SUCCESS, payload: payload}
}

export default function loadGreeting(greet){
    return function (dispatch, getState){
        dispatch(loadGreetingSuccess(greet));
    }
}