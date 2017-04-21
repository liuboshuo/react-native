/**
 * Created by liushuo on 17/4/19.
 */
/**
 * Created by liushuo on 17/4/19.
 */

import React , {Component} from 'react';
import {AppRegistry ,  Text , View, StyleSheet, Navigator, Platform} from 'react-native';

import App from './containers/app'

export default class Application extends Component {

    render(){
        return (
            <Navigator
                initialRoute={{ component: App }}
                configureScene={(route, routeStack) => {
				        return Navigator.SceneConfigs.FloatFromRight;
				    }}
                renderScene={(route, navigator) => {
				    	let Component = route.component;
				        return <Component {...route.params} navigator={navigator} />
				        //  上面的route.params 是为了方便后续界面间传递参数用的
				    }}
            />)
    }
}