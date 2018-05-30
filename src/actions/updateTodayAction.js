import {UPDATE_TODAYS_DATE_SUCCESS} from "./actionTypes";
import getDayMonth from '../helpers/composeDate';

export function updateToday(){
    return function (dispatch, getstate){
        dispatch({type: UPDATE_TODAYS_DATE_SUCCESS, data: getDayMonth()});
    }
}