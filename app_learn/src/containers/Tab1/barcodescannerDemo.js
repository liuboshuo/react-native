/**
 * Created by liushuo on 17/5/3.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Alert
} from 'react-native';
import NavigationBar from '../../component/navBarCommon'
import {QRScannerView} from 'ac-qrcode'
import * as Constants from '../../constants/constant'
import back from './../../source/images/icon_back.png'

export default class BarcodescannerDemo extends Component {

    constructor (props) {
        super(props)
        this.state = {
            cameraType:'back',
            torchMode:'off',
            type:'',
            barcode:' '
        }
    }

    barcodeResult(e){

    }
    renderMenu() {
        return (
                <Text>测试</Text>
        )
    }
    renderTitleBar(){
        return(
            <NavigationBar title="二维码" leftImage={ back } leftAction={()=>this.props.navigator.pop()}/>
        );
    }
    render() {
        return (
            <View style={styles.container}>
                <QRScannerView
                    onScanResultReceived={this.barcodeResult.bind(this)}
                    renderTopBarView={() => this.renderTitleBar()}
                    renderBottomMenuView={() => this.renderMenu()}
                />
            </View>
        );
    }

}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Constants.viewBgColor
    }
})