/**
 * Created by liushuo on 17/7/6.
 */
import React , {Component} from 'react';
import {Text , View, StyleSheet, TouchableOpacity,Button,Image} from 'react-native';
export default class Tab1 extends Component {

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>navigate('homeDetail',{user:"我是参数"})}>

                    <Text>tab one</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent:"center",
        alignItems:'center'
    }
    ,
    navigationRightButton:{
        backgroundColor:"rgba(0,0,255,0.66)",
        marginRight:20,
    },
    iconStyle:{
        width:30,
        height:30
    }
})