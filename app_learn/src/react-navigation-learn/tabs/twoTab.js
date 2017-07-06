/**
 * Created by liushuo on 17/7/6.
 */
import React , {Component} from 'react';
import {Text , View, StyleSheet} from 'react-native';

export default class Tab2 extends Component {
    static navigationOptions = {
        title:"tab two"
    }
    render(){
        const {naavigate} = this.props.navigation;
        return(
            <View style={styles.container}>
                <Text>tab two</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"purple",
        flexDirection:'row',
        justifyContent:"center",
        alignItems:'center'
    }
})