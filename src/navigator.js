import { StackNavigator } from 'react-navigation';
import App from './App';
import Services from './screens/services';
import Music from './screens/music';
import Calendar from './screens/calendar';
import Trello from './screens/trello';
import Login from './screens/login'
import React, {Component} from 'react';

export default class AppWithNavigator extends Component {
    render() {
        return (
            <Navigator />
        )
    }
}

const Navigator = StackNavigator(
    {
        Home: {screen: App},
        Services: {screen: Services},
        Music: {screen: Music},
        Trello: {screen: Trello},
        Calendar: {screen: Calendar},
        Login: {screen: Login}
    },
    {
        initialRouteName: 'Home'
    }
);
