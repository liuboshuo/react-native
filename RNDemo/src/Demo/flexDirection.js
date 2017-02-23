import React , { Component } from 'react';
import { AppRegistry ,StyleSheet, Text, View } from 'react-native';


export default class FlexDirectionTest extends Component {

	render() {

		return (
			//row-reverse  column-reverse
			<View style={{flex:1,flexDirection:'row',padding:20}}>
				<View style={{width:50,height:50,backgroundColor:'red'}}></View>
				<View style={{width:50,height:50,backgroundColor:'black'}}></View>
				<View style={{width:50,height:50,backgroundColor:'orange'}}></View>
			</View>
			

		)
	}

}
