import React , { Component } from 'react';
import {AppRegistry , View} from 'react-native';

export default class AlignItemsTest extends Component {

	render() {
		return (
			<View style={{
							flex:1,
							flexDirection:'row',
							justifyContent:'flex-end',
							alignItems:"flex-start",
						}}>
				<View style={{width:50,height:50,backgroundColor:'red'}}></View>
				<View style={{width:50,height:50,backgroundColor:'black'}}></View>
				<View style={{width:50,height:50,backgroundColor:'orange'}}></View>
			</View>
		)
	}
}

