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
} from 'react-native';
import ActionSheet from 'react-native-actionsheet'
import NavigationBar from '../../component/navBarCommon'
import {Container,Button,Toast} from  'native-base'
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
        this.ActionSheet.show()
    }
    showText(i)
    {
        this.setState({text:"选择结果内容下标是:" + i})
    }
    render() {
        return (
            <View style={{flex:1, backgroundColor:Constants.viewBgColor}}>
                <NavigationBar title="actionsheet" leftImage={ back } leftAction={()=>this.props.navigator.pop()}/>
                <Text>{this.state.text}</Text>
                <Button onPress={this.click.bind(this)}>
                    <Text>press</Text>
                </Button>
                <ActionSheet ref = {o => this.ActionSheet = o} title={title} options={options} cancelButtonIndex={cancleIndex} destructiveButtonIndex={DESTRUCTIVE_INDEX} onPress={(text)=>this.showText(text)}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({

})
