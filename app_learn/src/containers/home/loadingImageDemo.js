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
const {width} = Dimensions.get("window");
export default class LoadingImage extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <View>
                <NavigationBar title=""/>
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
    scrollView:{
        backgroundColor:'red'
    },
    imageStyle:{
        width:width,
        height:120
    }
});