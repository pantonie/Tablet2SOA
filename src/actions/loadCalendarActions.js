import loadCalendarApi from '../api/loadCalendar'
import {LOAD_CALENDAR_SUCCESS} from "./actionTypes";

function loadCalendarSuccess (data) {
    return {type: LOAD_CALENDAR_SUCCESS, data}
}

export function loadCalendar(){
    return function(dispatch, getState){
        return loadCalendarApi.loadWholeCalendar(getState()).then(data => {
            dispatch(loadCalendarSuccess(data.data));
        }).catch(error => {
            throw(error);
        })
    }
}