import * as types from '../actions/actionTypes';
import initialState from '../store/InitialState'

export default function apiSettingsReducer (state = initialState.apiSettings, action){
    switch (action.type){
        case types.LOAD_API_SETTINGS_SUCCESS:
            return action.apiSettings;
        default:
            return state;
    }
}