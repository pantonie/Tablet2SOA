import * as types from './actionTypes'

export function loadGreetingSuccess(greeting){
    return {type: types.LOAD_GREETING_SUCCESS, greeting}
}

export default function loadGreeting(greet){
    return function (dispatch, getState){
        dispatch(loadGreetingSuccess(greet));
    }
}