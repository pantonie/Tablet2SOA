import * as types from '../actions/actionTypes';
import initialState from '../store/InitialState';

export default function loadCalendarReducer (state = initialState.calendar, action){
    switch (action.type) {
        case types.LOAD_CALENDAR_SUCCESS:
            return action.data;
        default:
            return state;
    }
}