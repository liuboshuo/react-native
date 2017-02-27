/**
 * Created by liushuo on 17/2/27.
 */
import React , {Component} from 'react';
import {AppRegistry , ListView ,Alert, Text , View, StyleSheet,TouchableOpacity, Image, TextInput, Dimensions} from 'react-native';

let screenWidth = Dimensions.get("window").width;

export default class qqLoginDemo extends Component {
    constructor(props){
        super(props)
        this.state = {
            userName:"",
            passWord:""
        }
    }
    render() {
        return (
            <View style={styles.contain}>
                <Image source={require('../DemoImages/qqImg/icon.png')} style={styles.iconStyle}/>

                <TextInput blurOnSubmit={true} onChangeText={(content=>this.setState({userName:content}))} ref={'userNameTextInput'} style={styles.textInputStyle} placeholder={"请输入户用户名"} clearButtonMode="always"/>

                <TextInput blurOnSubmit={true} onChangeText={(content)=>this.setState({passWord:content})} ref={'pwdTextInput'} password={true} placeholder={"请输入密码"} style={styles.textInputStyle} clearButtonMode="always"/>

                <TouchableOpacity onPress={()=>this.login()} style={styles.loginButtonStyle} activeOpacity={0.5}>
                    <Text style={{color:'white'}}>登录</Text>
                </TouchableOpacity>

                <View style={styles.loginUtilViewStyle}>

                    <TouchableOpacity activeOpacity={0.5}>
                        <Text style={{color:'rgba(67,171,240,1)'}}>忘记密码？</Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.5}>
                        <Text  style={{color:'rgba(67,171,240,1)'}} >无法登陆</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.otherLoginViewStyle}>
                    <Text style={{color:'rgba(67,171,240,1)'}}>其他登录:</Text>
                    <TouchableOpacity activeOpacity={0.5}>
                        <Image style={styles.otherLoginImageStyle} source={require('../DemoImages/qqImg/icon3.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5}>
                        <Image style={styles.otherLoginImageStyle} source={require('../DemoImages/qqImg/icon7.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5}>
                        <Image style={styles.otherLoginImageStyle} source={require('../DemoImages/qqImg/icon8.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    login(){
        // console.log(this.state.userName + ":" + this.state.passWord);
        // for (let i in this.state){
        //     console.log(i);
        // }
        if( this.state.userName == null || this.state.userName == ''){
            Alert.alert( "提示",'请输入用户名！')
            return;
        }
        if (this.state.passWord == null || this.state.passWord == ''){
            Alert.alert("提示","请输入密码！")
            return;
        }

        Alert.alert("提示","用户名:" + this.state.userName + " \n" + "密码:" + this.state.passWord);


    }
}

const  styles = StyleSheet.create({


    contain:{
        flex:1,
        backgroundColor:"#eeeeee",
        alignItems:'center'
    },

    iconStyle:{
        marginTop:120,
        marginBottom:20,
        width:80,
        height:80,
        borderWidth:2,
        borderColor:'white',
        borderRadius:40
    },

    textInputStyle:{
        height:44,
        backgroundColor:'white',
        marginTop:2,
        fontSize:14,
        textAlign:'center'
    },

    loginButtonStyle:{
        backgroundColor:'rgba(67,171,240,1)',
        width:screenWidth-40,
        height:35,
        borderRadius:8,
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',
        marginTop:20,
    },

    loginUtilViewStyle:{
        marginTop:20,
        width:screenWidth-40,
        height:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },

    otherLoginViewStyle:{
        position:'absolute',
        bottom:20,
        flexDirection:'row',
        marginLeft:20,
        alignItems:'center',
    },

    otherLoginImageStyle:{
        marginLeft:5,
        width:60,
        height:60,
        borderRadius:30,
    }



});
