/**
 * Created by liushuo on 17/4/28.
 */
import React, { Component } from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import NavigationBar from '../../component/navBarCommon'
import * as Constants from  '../../constants/constant'
import QRCode from 'react-native-qrcode'
class QRCodeDemo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <NavigationBar title="测试标题"/>
                <View style={styles.view}>
                    <QRCode
                        value={'https://github.com/cssivision/react-native-qrcode'}
                        size={300}
                        bgColor='white'
                        fgColor='black'
                    />
                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:Constants.viewBgColor,
        flex:1
    },
    view:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
});

export default QRCodeDemo;