/**
 * Created by ls-mac on 2017/5/5.
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Platform,
    TouchableOpacity
} from 'react-native';
import NavigationBar from '../../component/navBarCommon'
import back from './../../source/images/icon_back.png'
import * as Constants from  '../../constants/constant'

let  t = require('tcomb-form-native')

let Form = t.form.Form

// here we are: define your domain model
let Person = t.struct({
    name: t.String,              // a required string
    surname: t.maybe(t.String),  // an optional string
    age: t.Number,               // a required number
});
var options = {
    auto: 'placeholders',

    fields: {
        name: {
            placeholder: '用户名'
        }
    }
};
export default class TestTextInputDemo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationBar title="输入框" leftImage={ back } leftAction={()=>this.props.navigator.pop()}/>
                <Form
                    ref="form"
                    type={Person}
                    options={options}
                />
                <TouchableOpacity style={styles.buttonStyle} underlayColor='#99d9f4'>
                    <Text >Save</Text>
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
    buttonStyle:{
        height:40,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:6,
        margin:10
    }
});
