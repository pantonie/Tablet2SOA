import * as types from '../actions/actionTypes';
import initialState from '../store/InitialState';

export default function loadSongsReducer (state = initialState.songs, action){
    switch (action.type) {
        case types.LOAD_SONGS_BY_NAME_SUCCESS:
            return action.songs;
        default:
            return state;
    }
}