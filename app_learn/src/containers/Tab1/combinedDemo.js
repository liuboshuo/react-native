/**
 * Created by ls-mac on 2017/5/10.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ActivityIndicator,
    TouchableOpacity,
    Alert,
    ListView
} from 'react-native';
import NavigationBar from '../../component/navBarCommon'
import * as Constants from './../../constants/constant'
import back from './../../source/images/icon_back.png'
import CkeckBox from 'react-native-checkbox'
import CombinedButton from 'react-native-combined-button'
export default class combinedDemo extends Component {

    constructor(props){
        super(props);
        this.state = {
            checked:true
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <NavigationBar title="按钮" leftImage={ back } leftAction={()=>this.props.navigator.pop()}/>
                <CombinedButton textStyle={{color:'#fff',fontSize: 20}} style={styles.buttonStyle}
                                text="Left Icon"
                                onPress={()=>{console.log(123)}}/>
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
        margin:10,
        marginTop:64,
    }
})