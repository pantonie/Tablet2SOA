import {UPDATE_TODAYS_DATE_SUCCESS} from "../actions/actionTypes";
import initialSate from '../store/InitialState'

export default function updateTodayReducer(state = initialSate, action){
    switch (action.type) {
        case UPDATE_TODAYS_DATE_SUCCESS:
            return action.data;
        default:
            return state;
    }
}