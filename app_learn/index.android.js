/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Application from './src/application'

export default class app_learn extends Component {
    render() {
        return (
            <Application />
        );
    }
}
AppRegistry.registerComponent('app_learn', () => app_learn);
