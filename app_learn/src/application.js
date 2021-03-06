/**
 * Created by liushuo on 17/4/19.
 */
import React , {Component} from 'react';
import {AppRegistry ,  Text , View, StyleSheet, Navigator, Platform} from 'react-native';
import {Provider} from 'react-redux'
import App from './containers/app'
import configureStore from './store/store'
export default class Application extends Component {
    render(){
        const store = configureStore()
        return (
        	<Provider store={store}>
				<Navigator
					initialRoute={{ component: App }}
					configureScene={(route, routeStack) => {
                        return Navigator.SceneConfigs.PushFromRight;
                    }}
					renderScene={(route, navigator) => {
                        let Component = route.component;
                        return <Component {...route.params} navigator={navigator} />
                    }}
				/>
			</Provider>
            )
    }
}