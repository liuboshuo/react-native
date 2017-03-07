/**
 * Created by liushuo on 17/3/3.
 */
import React , {Component} from 'react';
import {AppRegistry ,
        TouchableOpacity,
        Alert,
        TextInput,
        Image,
        Text ,
        View,
        StyleSheet,
        Platform,
        Dimensions,
        ScrollView
    }
from 'react-native';
import BSFirstTopView from './BSFirstTopView'
let width = Dimensions.get('window').width;

export default  class BSHome extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchTextInputContent:''
        }
    }

    render(){
        return(

            <View style={styles.containerStyle}>

                <View style={styles.statusBarStyle}></View>

                <View style={styles.navViewStyle}>

                    <TouchableOpacity onPress={()=>{Alert.alert("点击")}}>
                        <Text style={styles.leftButtonStyle}>上海</Text>
                    </TouchableOpacity>
                    <TextInput style={styles.middleTextStyle}
                               underlineColorAndroid={'transparent'}
                               placeholder={'搜索'}
                               blurOnSubmit={true}
                               clearButtonMode={'always'}
                               onChangeText={(text)=>this.setState({searchTextInputContent:text})}
                               onEndEditing={()=>{Alert.alert('输入框内容' + this.state.searchTextInputContent)}}
                               onSubmitEditing={()=>{Alert.alert('输入框内容' + this.state.searchTextInputContent)}}
                    />
                    <View style={styles.rightOuterViewStyle}>
                        <TouchableOpacity onPress={()=>{Alert.alert("点击")}}>
                            <Image source={{uri:"icon_homepage_message"}} style={styles.rightViewInnerImgStyle}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{Alert.alert("点击")}}>
                            <Image source={{uri:"icon_homepage_scan"}} style={styles.rightViewInnerImgStyle}/>
                        </TouchableOpacity>
                    </View>

                </View>

                <ScrollView>
                    <BSFirstTopView />
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
        justifyContent:'space-around',
        backgroundColor:'orange',
        width:width,
        height:44
    },
    statusBarStyle:{
        width:width,
        height:Platform.OS == 'ios' ? 20 : 0,
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
        paddingTop:0,
        paddingBottom:0,
        paddingRight:10,
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