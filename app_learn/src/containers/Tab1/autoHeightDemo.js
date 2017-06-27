/**
 * Created by liushuo on 17/6/27.
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Platform,
    TextInput,
    ScrollView,
    Keyboard
} from 'react-native';
import ReactNative from 'react-native'
import NavigationBar from '../../component/navBarCommon'
import * as Constants from './../../constants/constant'
import back from './../../source/images/icon_back.png'

const paddingTop = 3;

const paddingBottom = 3;

const paddingLeft = 10;

const paddingRight = 10

const textInputPaddingTop = 5
const textInputPaddingBottom = 5
const textInputPaddingLeft = 10
class TextInputAutoHeightDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height:0,
            bottomViewHeight:0,
            topViewHeight:0,
            content:""
        }
    }
    componentWillMount(){
        this.keyboardDidShowListener = Keyboard.addListener('keyboardWillShow',this.keyboardWillShow.bind(this))
        this.keyboardDidHideListener = Keyboard.addListener("keyboardWillHide",this.keyboardWillHide.bind(this))
    }
    keyboardWillShow(event){
        this.refs.scrollViewRef.scrollTo({y:event.endCoordinates.height,x:0})
    }
    keyboardWillHide(event){
        this.refs.scrollViewRef.scrollTo({y:0,x:0})
    }
    onChangeText(change){
        this.setState({
            content:change
        })
    }
    onContentSizeChange(event){
        let height = event.nativeEvent.contentSize.height;

        //计算头部view高度
        const bottomViewHeight = height + paddingTop + paddingBottom
        //计算底部view高度
        const topViewHeight = Constants.screenHeigt - (Platform.OS == 'ios' ? 64 : 44) - bottomViewHeight
        //更新
        this.setState({
            height:height,
            bottomViewHeight:bottomViewHeight,
            topViewHeight:topViewHeight,
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <NavigationBar title="自适应高度和键盘问题" leftImage={ back } leftAction={()=>this.props.navigator.pop()}/>

                <ScrollView ref="scrollViewRef"
                            alwaysBounceVertical={false}>
                    <View style={[styles.topView,{height:this.state.topViewHeight }]}>

                    </View>
                    <View style={[styles.bottomView,{height:this.state.bottomViewHeight}]}>
                        <TextInput ref="textInput"
                                   placeholder={'请输入评价内容'}
                                   onChangeText={this.onChangeText.bind(this)}
                                   onContentSizeChange={(event)=>this.onContentSizeChange(event)}
                                   style={[styles.titleTextInput,{height:this.state.height}]}
                                   multiline={true}
                                   underlineColorAndroid={'transparent'}
                        />
                    </View>
                </ScrollView>

            </View>
        )
    }
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:Constants.viewBgColor
    },
    topView:{
        width:Constants.screenWidth,
        backgroundColor:"yellow"
    },
    bottomView:{
        backgroundColor:"red",
        width:Constants.screenWidth,
        paddingBottom:paddingBottom,
        paddingTop:paddingTop,
        paddingLeft:paddingLeft,
        paddingRight:paddingRight,
        zIndex:-10
    },
    titleTextInput:{
        width:Constants.screenWidth - paddingLeft - paddingRight,
        backgroundColor:"purple",
        borderRadius:6,
        fontSize:15,
        color:"#e6e6e6",
        paddingTop:textInputPaddingTop,
        paddingBottom:textInputPaddingBottom,
        paddingLeft:textInputPaddingLeft,
        paddingRight:textInputPaddingLeft
    }
})

export default TextInputAutoHeightDemo;