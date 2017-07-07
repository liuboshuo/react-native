import React , {Component} from 'react';
import {Text ,Image, View, StyleSheet, TouchableOpacity} from 'react-native';
export default class ONePage  extends Component {
    static navigationOptions = {
        drawerLabel:"首页",
        drawerIcon:({tintColor})=>{
            return (
                <Image source={require("../../source/images/icon_home.png")}
                       style={[styles.iconStyle,{tintColor:tintColor }]}/>
            )
        }
    }
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <TouchableOpacity>
                    <Text>test</Text>
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
    },
    iconStyle:{
        width:30,
        height:30
    }
})