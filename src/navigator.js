import { StackNavigator } from 'react-navigation';
import App from './App'
import React, {Component} from 'react'

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
    },
    {
        initialRouteName: 'Home'
    }
);
