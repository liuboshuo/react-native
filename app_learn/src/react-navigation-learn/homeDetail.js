/**
 * Created by liushuo on 17/7/6.
 */
/**
 * Created by liushuo on 17/7/5.
 */
import React , {Component} from 'react';
import {AppRegistry ,  Text , View, StyleSheet, Navigator, Platform} from 'react-native';

export default class HomeDetailScreen extends Component {
    render(){
        const {naavigate} = this.props;
        return(
            <View style={styles.container}>
                <Text>chat</Text>
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