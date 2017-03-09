/**
 * Created by liushuo on 17/3/9.
 */
import React , {Component} from 'react';
import {AppRegistry ,  Text , View, StyleSheet, Dimensions, TouchableOpacity, WebView, Image, Platform} from 'react-native';
let {width} = Dimensions.get("window")
export default  class BSShopDetail extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(

            <View style={styles.containerStyle}>
                <View style={styles.statusBarStyle} />
                <View style={styles.navViewStyle}>

                    <TouchableOpacity style={styles.leftBtnStyle} onPress={()=>{this.props.navigator.pop()}}>
                        <Image source={{uri:"icon_camera_back_normal"}} style={styles.rightViewInnerImgStyle}/>
                    </TouchableOpacity>
                    <Text style={styles.middleTextStyle}>购物详情</Text>
                </View>

                <WebView

                    automaticallyAdjustContentInsets={true}
                    source={{uri: this.props.url + '?uuid=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&utm_term=6.6&utm_source=AppStore&utm_content=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&version_name=6.6&userid=160495643&utm_medium=iphone&lat=23.134709&utm_campaign=AgroupBgroupD100Ghomepage_shoppingmall_detailH0&token=b81UqRVf6pTL4UPLLBU7onkvyQoAAAAAAQIAACQVmmlv_Qf_xR-hBJVMtIlq7nYgStcvRiK_CHFmZ5Gf70DR47KP2VSP1Fu5Fc1ndA&lng=113.373890&f=iphone&ci=20&msid=0FA91DDF-BF5B-4DA2-B05D-FA2032F30C6C2016-04-04-08-38594'}}
                    decelerationRate="normal"
                />
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
    leftBtnStyle:{
        position:'absolute',
        top:9,
        left:10,
    },
    rightViewInnerImgStyle:{
        width:25,
        height:25,

    },
})