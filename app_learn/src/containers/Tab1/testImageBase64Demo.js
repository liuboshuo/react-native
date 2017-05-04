/**
 * Created by liushuo on 17/5/3.
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    NativeModules
} from 'react-native';
import NavigationBar from '../../component/navBarCommon'
import {Container,Button} from  'native-base'
import Toast from 'react-native-easy-toast'
import * as Constants from './../../constants/constant'
import back from './../../source/images/icon_back.png'
class TestImageBase64Demo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text:""
        }
    }

    click(){
        NativeModules.RNImageToBase64.getBase64String(back, (err, base64) => {
            if (err){
                this.setState({text:err})
            }else {
                this.setState({text:base64})
            }

        })
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationBar title="base64" leftImage={ back } leftAction={()=>this.props.navigator.pop()}/>

                <TouchableOpacity style={styles.buttonStyle} onPress={()=>this.click()}>
                    <Text>show toast</Text>
                </TouchableOpacity>
                <Text>{this.state.text}</Text>
            </View>
        )
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

})

export default TestImageBase64Demo;