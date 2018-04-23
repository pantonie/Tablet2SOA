
import {combineReducers} from 'redux';
import greeting from './loadGreeting';
import apiSettings from './apiSettingsReducer'
import songs from './loadSongsReducer'

export default rootReducer = combineReducers({
    greeting,
    apiSettings,
    songs
});