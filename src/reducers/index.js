
import {combineReducers} from 'redux';
import greeting from './loadGreeting';
import apiSettings from './apiSettingsReducer'
import songs from './loadSongsReducer';
import calendar from './loadCalendarReducer';

export default rootReducer = combineReducers({
    greeting,
    apiSettings,
    songs,
    calendar
});