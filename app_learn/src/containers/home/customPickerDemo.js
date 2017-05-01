/**
 * Created by ls-mac on 2017/4/29.
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
import * as Constants from  '../../constants/constant'
import Picker from 'react-native-picker'

class CustomPickerDemo extends Component {
    constructor(props) {
        super(props);

    }

    picker1(){

        let data = [];
        for (let  i = 0 ; i<10; i++){
            data.push(i);
        }
        Picker.init({
            pickerData:data,
            selectedValue:[0],
            onPickerConfirm:(data)=>{
                console.log(data);
            },
            onPickerCancel:(data)=>{
                console.log(data);
            },
            onPickerSelect:(data)=>{
                console.log(data);
            }
        })
    }

    picker2(){

        let data = [];
        for (let  i = 0 ; i<2; i++){
            let data1 = [];
            for (let k = 0 ; k<12; k ++){
                data1.push(k);
            }
            data.push(data1);
        }
        Picker.init({
            pickerData:data,
            selectedValue:[0,0],
            onPickerConfirm:(data)=>{
                console.log(data);
            },
            onPickerCancel:(data)=>{
                console.log(data);
            },
            onPickerSelect:(data)=>{
                console.log(data);
            }
        })
    }

    picker3(){

        let data = [];
        for (let  i = 0 ; i<2; i++){
            let data1 = [];
            for (let k = 0 ; k<2; k ++){
                let dataT = [];
                for (let j=0;i<10;j++){
                    dataT.push(j);
                }
                data1.push(dataT);
            }
            data.push(data1);
        }
        Picker.init({
            pickerData:data,
            selectedValue:[0,0,0],
            onPickerConfirm:(data)=>{
                console.log(data);
            },
            onPickerCancel:(data)=>{
                console.log(data);
            },
            onPickerSelect:(data)=>{
                console.log(data);
            }
        })

    }

    render() {
        return (
            <View style={styles.container}>


                <NavigationBar title="Picker View" leftImage={ back } leftAction={()=>{this.props.navigator.pop();Picker.hide();}}/>

                <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5} onPress={this.picker1.bind(this)}>
                    <Text>Picker1选择</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5} onPress={this.picker2.bind(this)}>
                    <Text>Picker2选择</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5} onPress={this.picker3.bind(this)}>
                    <Text>Picker3选择</Text>
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

export default CustomPickerDemo;