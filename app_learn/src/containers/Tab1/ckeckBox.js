/**
 * Created by liushuo on 17/5/2.
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
export default class CkeckBoxDemo extends Component {

    constructor(props){
        super(props);
        this.state = {
            checked:true
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <NavigationBar title="复选框" leftImage={ back } leftAction={()=>this.props.navigator.pop()}/>
                <View style={{flexDirection:'row',height:20}}>
                    <CkeckBox
                        checkboxStyle={{width:20,height:20}}
                        label={'我是复选框'}
                        checked={this.state.checked}
                        onChange={(check)=>{
                        this.setState({checked:!check})
                    }}
                    />
                    <CkeckBox
                        checkboxStyle={{width:20,height:20}}
                        label={'我是复选框'}
                        checked={this.state.checked}
                        onChange={(check)=>{
                        this.setState({checked:!check})
                    }}
                    />
                    <CkeckBox
                        checkboxStyle={{width:20,height:20}}
                        label={'我是复选框'}
                        checked={this.state.checked}
                        onChange={(check)=>{
                        this.setState({checked:!check})
                    }}
                    />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Constants.viewBgColor
    },
    cellStyle:{
        justifyContent:'center',
        height:40,
        backgroundColor:'white',
        borderBottomColor:'#eee',
        borderBottomWidth:0.5
    },
    textStyle:{
        marginLeft:15,
        fontSize:20,
    }
})