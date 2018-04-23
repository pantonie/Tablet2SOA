import * as types from '../actions/actionTypes'
import initialState from "../store/InitialState";

export default function loadGreeting (state = initialState.greeting, action){
    switch (action.type) {
        case types.LOAD_GREETING_SUCCESS:
            return action.greeting;
        default:
            return state;
    }
}