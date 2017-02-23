import React , { Component } from 'react';
import { AppRegistry ,Text, View } from 'react-native';

class Greeting extends Component {
	render() {
		return (
			<Text>Hello {this.props.name}</Text>
		)
	}
}

class LotsOfGreeting extends Component {
	render () {
		return (
			<View style = {{alignItems:'center'}}>
				<Greeting name="Rexxar"/>
				<Greeting name="Jaina" />
				<Greeting name="Valeera" />
			</View>
		)
	}
}

export default LotsOfGreeting;
