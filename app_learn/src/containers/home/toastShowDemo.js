/**
 * Created by liushuo on 17/4/28.
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import NavigationBar from '../../component/navBarCommon'
import {Container,Button} from  'native-base'
import Toast from 'react-native-easy-toast'
import * as Constants from './../../constants/constant'
import back from './../../source/images/icon_back.png'
class ToastShowDemo extends Component {
    constructor(props) {
        super(props);
    }

    click(){
        this.Toast.show('hello toast!');
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationBar title="toast" leftImage={ back } leftAction={()=>this.props.navigator.pop()}/>

                <TouchableOpacity style={styles.buttonStyle} onPress={()=>this.click()}>
                    <Text>show toast</Text>
                </TouchableOpacity>
                <Toast ref={o=>this.Toast = o} position='center'/>
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

export default ToastShowDemo;