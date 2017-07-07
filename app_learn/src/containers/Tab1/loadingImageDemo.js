/**
 * Created by liushuo on 17/4/27.
 */
import React, {Component} from 'react';
import {
    View, Text, StyleSheet, ScrollView, Alert,
    Image, TouchableOpacity, NativeModules, Dimensions
} from 'react-native';
import NetWorkImage from '../../component/newWorkImage'
import NavigationBar from '../../component/navBarCommon'
import back from './../../source/images/icon_back.png'
import * as Constants from '../../constants/constant'
const {width} = Dimensions.get("window");
export default class LoadingImage extends Component {

    constructor() {
        super();
    }

    render() {
        const {title} = this.props.data;
        return (
            <View style={styles.container}>
                <NavigationBar title={title} leftImage={ back } leftAction={()=>this.props.navigator.pop()}/>
                <NetWorkImage uri={"http://cms-bucket.nosdn.127.net/2263228dc8e94e96bc64e467d210bf7220170427081659.jpeg"}
                              width={width}
                              height={120}
                              placeholder={{uri:require("./../../source/images/placeholder_icon.png"),resizeMode:'stretch'}}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Constants.viewBgColor
    },
    scrollView:{
        backgroundColor:'red'
    },
    imageStyle:{
        width:width,
        height:120
    }
});