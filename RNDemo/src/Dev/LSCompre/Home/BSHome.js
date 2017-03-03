/**
 * Created by liushuo on 17/3/3.
 */
import React , {Component} from 'react';
import {AppRegistry , TouchableOpacity,Alert, TextInput, Image, Text , View, StyleSheet, Dimensions} from 'react-native';
import BSHomeDetail from './BSHomeDetail'
let {width} = Dimensions.get('window');
export default  class BSHome extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <View style={styles.containerStyle}>
                <View style={styles.statusBarStyle}></View>
                <View style={styles.navViewStyle}>
                    <TouchableOpacity onPress={()=>{Alert.alert("点击")}}>
                        <Text style={styles.leftButtonStyle}>上海</Text>
                    </TouchableOpacity>
                    <TextInput style={styles.middleTextStyle} placeholder={'搜索'}/>
                    <View style={styles.rightOuterViewStyle}>
                        <TouchableOpacity onPress={()=>{Alert.alert("点击")}}>
                            <Image source={{uri:"icon_homepage_message"}} style={styles.rightViewInnerImgStyle}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{Alert.alert("点击")}}>
                            <Image source={{uri:"icon_homepage_scan"}} style={styles.rightViewInnerImgStyle}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity onPress={()=>{
                    this.props.navigator.push({
                        name:"测试跳转",
                        component:BSHomeDetail
                    })
                }}>
                    <Text style={{color:'orange' , fontSize: 30}}>Home</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle:{
        flex:1,
    },

    navViewStyle:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        backgroundColor:'orange',
        width:width,
        height:44
    },
    statusBarStyle:{
        width:width,
        height:20,
        backgroundColor:'orange',
    },
    leftButtonStyle:{
        color:'white',
        fontSize:16
    },
    middleTextStyle:{
        width: width * 0.7,
        height:30,
        backgroundColor:'white',
        borderRadius:15,
        alignSelf:'center',
        paddingLeft:10,
        fontSize:13
    },
    rightOuterViewStyle:{
        flexDirection:'row',
        alignItems:'center',
    },
    rightViewInnerImgStyle:{
        width:25,
        height:25
    },
})