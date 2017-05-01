/**
 * Created by liushuo on 17/4/28.
 */
import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';
import NavigationBar from '../../component/navBarCommon'
import * as Constants from  '../../constants/constant'
import QRCode from 'react-native-qrcode'
class QRCodeDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value:"1"
        }
    }
    componentDidMount(){
        this.setState({
            value:'https://github.com/cssivision/react-native-qrcode'
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <NavigationBar title="二维码" leftImage={require('./../../source/images/icon_back.png')} leftAction={()=>this.props.navigator.pop()}/>

                <View style={styles.view}>
                    <QRCode
                        value={this.state.value}
                        size={300}
                        bgColor='white'
                        fgColor='black'
                    />
                    <Text>{this.state.value}</Text>
                </View>


                <TouchableOpacity style={styles.buttonStyle} onPress={()=>this.setState({value:Math.random() * 12})}>
                    <Text>随机二维码</Text>
                </TouchableOpacity>


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
    },
    buttonStyle:{
        height:40,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:6,
        margin:10,
        marginBottom:50
    }
});

export default QRCodeDemo;