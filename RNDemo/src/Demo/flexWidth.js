import React , { Component } from 'react';
import { AppRegistry ,StyleSheet, Text, View } from 'react-native';


export default class FixedDimensionsBasicsTest extends Component {

	render() {

		return (
			<View style={{flex:1}}>
				<View style={{flex:1, backgroundColor:'red'}}></View>
				<View style={{flex:2, backgroundColor:'black'}}></View>
				<View style={{flex:3, backgroundColor:'orange'}}></View>
			</View>
			

		)
	}

}
