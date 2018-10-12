/** @format */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import configstore from './components/config'
const store = configstore();

const AppRedux = () => (
    <Provider store = {store}>
    <App/>
    </Provider>
)
AppRegistry.registerComponent(appName, () => AppRedux);



