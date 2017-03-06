/**
 * Created by liushuo on 17/3/3.
 */
import React , {Component} from 'react';
import {AppRegistry , TouchableOpacity,Alert, ScrollView, TextInput,
    Platform, Image,  Text , View, StyleSheet, Dimensions} from 'react-native';
import BSCommonCell from './BSCommonCell'

let {width} = Dimensions.get('window')

export default  class BSMore extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <View style={styles.containerStyle}>
                <View style={styles.statusBarStyle} />
                <View style={styles.navViewStyle}>

                    <Text style={styles.middleTextStyle}>123</Text>


                    <TouchableOpacity style={styles.rightBtnStyle} onPress={()=>{Alert.alert("点击")}}>
                        <Image source={{uri:"icon_mine_setting"}} style={styles.rightViewInnerImgStyle}/>
                    </TouchableOpacity>

                </View>
                <ScrollView>
                    <View style={{marginTop:20}}>
                        <BSCommonCell title="扫一扫"/>
                    </View>
                    <View style={{marginTop:20}}>
                        <BSCommonCell title="省流量模式" isSwitch={true} />

                        <BSCommonCell title="分享app" />
                        <BSCommonCell title="清空缓存" rightDefaultTitle={'20.5M'}/>
                    </View>


                    <View style={{marginTop:20}}>
                        <BSCommonCell title="反馈" />
                        <BSCommonCell title="个人信息" />
                        <BSCommonCell title="关于" />
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle:{
        flex:1,
        backgroundColor:'#e8e8e8'
    },
    navViewStyle:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'orange',
        width:width,
        height:44
    },
    statusBarStyle:{
        width:width,
        height:Platform.OS == 'ios' ? 20 : 0,
        backgroundColor:'orange',
    },

    middleTextStyle:{
        fontSize:17,
        alignSelf:'center',
        fontWeight:'bold',
        color:'white'
    },
    rightBtnStyle:{
        position:'absolute',
        top:9,
        right:10,
    },
    rightViewInnerImgStyle:{
        width:25,
        height:25,

    },
})