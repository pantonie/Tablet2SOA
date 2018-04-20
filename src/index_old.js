import configureStore from 'store/configureStore'
import { AppRegistry } from 'react-native';
import {Provider} from 'react-redux'
import App from './App';
import React, {Component} from 'react'
import loadGreeting from './actions/loadGreetingAction'

const store = configureStore();
store.dispatch(loadGreeting());

//const AppWithStore = <Provider store={store}><App></Provider>

AppRegistry.registerComponent('Tablet2SOA', () => <Provider store={ store }><App /></Provider>);