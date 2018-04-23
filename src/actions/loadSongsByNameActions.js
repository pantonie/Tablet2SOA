import loadSongs from '../api/loadSongs';
import * as types from './actionTypes';

export function loadSongsByNameSuccess(songs){
    return {type: types.LOAD_SONGS_BY_NAME_SUCCESS, songs}
}

export function loadSongsByName(name){
    return function(dispatch, getState){
        return loadSongs.loadSongsByName(getState(), name).then(data => {
            dispatch(loadSongsByNameSuccess(data.data));
        }).catch(error => {
            throw(error);
        })
    }
}