/**
 * Created by liushuo on 17/7/6.
 */
import React , {Component} from 'react';
import {Text , View, StyleSheet,Image} from 'react-native';
export default class TwoPage extends Component {


    //自定义
    static navigationOptions = {
        drawerLabel:"首页2",
        drawerIcon:({tintColor})=>{
            return (
                <Image source={require("../../source/images/icon_crm.png")}
                       style={[styles.iconStyle,{tintColor:tintColor }]}/>
            )
        }
    }

    componentDidMount() {
        console.log("componentDidMount")
    }

    componentWillUnMount() {
        console.log("componentWillUnMount")
    }
    render(){
        const {naavigate} = this.props.navigation;
        return(
            <View style={styles.container}>
                <Text>user</Text>
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
    navigationRightButton:{
        backgroundColor:"rgba(0,0,255,0.66)",
        marginRight:20,
    },
    textStyle:{
        fontSize:17,
        color:"#fff",
        padding:5
    },
    iconStyle:{
        width:30,
        height:30
    }
})