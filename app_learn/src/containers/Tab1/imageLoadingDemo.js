/**
 * Created by liushuo on 17/5/2.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Alert
} from 'react-native';
import NavigationBar from '../../component/navBarCommon'
import * as Constants from '../../constants/constant'
import back from './../../source/images/icon_back.png'
import Image from 'react-native-image-progress'
import * as Progress from 'react-native-progress';
export default class ImageLoadingDemo extends Component {

    constructor (props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationBar title="加载图片显示进度demo" leftImage={ back } leftAction={()=>this.props.navigator.pop()}/>
                <Image
                    source={{ uri: 'http://loremflickr.com/640/480/dog'}}

                    style={{             width: 320,
                       height: 240,
                    }}
                    indicator={Progress.Bar}
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

})
