import configureStore from './src/store/configureStore'
import { AppRegistry } from 'react-native';
import {Provider} from 'react-redux';
import React, {Component} from 'react';
//import App from './src/App';
import AppWithNavigator from './src/navigator'
import {loadCalendar} from "./src/actions/loadCalendarActions";
//import loadGreeting from './src/actions/loadGreetingActions'

const store = configureStore();
store.dispatch(loadCalendar());


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

