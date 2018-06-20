import configureStore from './src/store/configureStore'
import { AppRegistry } from 'react-native';
import {Provider} from 'react-redux';
import React, {Component} from 'react';
//import App from './src/App';
import AppWithNavigator from './src/navigator'
import {loadCalendar} from "./src/actions/loadCalendarActions";
import {updateToday} from './src/actions/updateTodayAction'
import {loadTrelloLists} from "./src/actions/loadTrelloActions";
//import loadGreeting from './src/actions/loadGreetingActions'

const store = configureStore();
store.dispatch(loadCalendar());
store.dispatch(loadTrelloLists());
setTimeout(() => store.dispatch(updateToday()), 60000);


class AppWithStore extends Component {
    render(){
        return(
            <Provider store={store}>
                <AppWithNavigator />
            </Provider>
        )
    }
}

AppRegistry.registerComponent('Tablet2SOA', () => AppWithStore);

