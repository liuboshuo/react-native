import React , { Component } from 'react';
import {AppRegistry , TextInput ,Text, View} from 'react-native';

export default class TextInputTest extends Component {

	render() {
		return (
			<View style={{
							padding:10
						}}>
				<TextInput style={{height:40}} placeholder="请输入文字" onChangeText={(text)=>this.setState({text}) }/>
				<View style={{backgroundColor:'lightgray',height:1}} />
			</View>
		)
	}
}

