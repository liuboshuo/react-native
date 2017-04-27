/**
 * Created by liushuo on 17/4/27.
 */
import React, {Component} from 'react';
import {
    View, Text, StyleSheet, ScrollView, Alert,
    Image, TouchableOpacity, NativeModules, Dimensions
} from 'react-native';
import NetWorkImage from './NewWorkImage'

import NavigationBar from './../../common/NavBarCommon'

export default class LoadingImage extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <View>
                <NavigationBar title=""/>
                <NetWorkImage uri={"http://cms-bucket.nosdn.127.net/2263228dc8e94e96bc64e467d210bf7220170427081659.jpeg"} style={styles.imageStyle}/>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    scrollView:{
        backgroundColor:'red'
    },
    imageStyle:{
        height:120
    }
});