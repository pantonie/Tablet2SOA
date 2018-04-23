import * as types from './actionTypes';

function loadApiSettingsSuccess (apiSettings){
    return {type: types.LOAD_API_SETTINGS_SUCCESS, apiSettings}
}

export function loadApiSettings(apiSettings){
    return function(dispatch, getState){
        dispatch(loadApiSettingsSuccess(apiSettings));
    }
}