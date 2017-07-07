/**
 * Created by liushuo on 17/4/27.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ActivityIndicator,
    TouchableOpacity,
    NativeModules
} from 'react-native';
import ActionSheet from 'react-native-actionsheet'
import NavigationBar from '../../component/navBarCommon'
import * as Constants from './../../constants/constant'
import back from './../../source/images/icon_back.png'
let title = "action"
let options = ["Cancel","1","2","3"];
let cancleIndex = 0;
let DESTRUCTIVE_INDEX = 1
export default class ActionSheetDemo extends Component {

    constructor(props){
        super(props);
        this.state = {
            text:"选择结果是:1"
        }
    }
    click()
    {
        NativeModules.TestNativeModues.test("text").then((text)=>{
           console.log(text);
        }).catch((error)=>{
            console.log(error);
        });
        this.ActionSheet.show()
    }
    showText(i)
    {
        this.setState({text:"选择结果内容下标是:" + i})
    }
    render() {
        const {title} = this.props.data;
        return (
            <View style={{flex:1, backgroundColor:Constants.viewBgColor}}>
                <NavigationBar title={title} leftImage={ back } leftAction={()=>this.props.navigator.pop()}/>
                <View style={styles.textViewStyle}>
                    <Text>{this.state.text}</Text>
                </View>
                <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5} onPress={this.click.bind(this)}>
                    <Text>press</Text>
                </TouchableOpacity>
                <ActionSheet ref = {o => this.ActionSheet = o} title={title} options={options} cancelButtonIndex={cancleIndex} destructiveButtonIndex={DESTRUCTIVE_INDEX} onPress={(text)=>this.showText(text)}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    buttonStyle:{
        height:40,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:6,
        margin:10
    },
    textViewStyle:{
        height:40,
        justifyContent:'center',
        alignItems:'center',
        margin:10
    }
})
