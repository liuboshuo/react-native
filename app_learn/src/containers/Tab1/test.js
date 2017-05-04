/**
 * Created by liushuo on 17/4/19.
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

class SheetDetailContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationBar title="测试标题" leftImage={ back } leftAction={()=>this.props.navigator.pop()}/>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:Constants.viewBgColor,
        flex:1
    }
});

export default SheetDetailContainer;