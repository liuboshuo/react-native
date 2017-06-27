/**
 * Created by ls-mac on 2017/5/10.
 */
import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';
import NavigationBar from '../../component/navBarCommon'
import back from './../../source/images/icon_back.png'
import * as Constants from '../../constants/constant'
import CameraRollPicker from 'react-native-camera-roll-picker'
export default class cameraRollDemo extends Component {

    getSelectedImages(images,current){

    }
    render() {
        return (
            <View style={styles.container}>
                <NavigationBar title="picker" leftImage={ back } leftAction={()=>this.props.navigator.pop()}/>
                <CameraRollPicker

                    callback={this.getSelectedImages.bind(this)} />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Constants.viewBgColor
    },
    buttonStyle:{
        height:40,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:6,
        margin:10
    }
});