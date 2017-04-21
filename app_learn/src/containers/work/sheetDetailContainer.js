/**
 * Created by liushuo on 17/4/19.
 */
/**
 * Created by liushuo on 17/4/19.
 */
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
import NavigationBar from './../../common/NavBarCommon'
import back from './../../source/images/back.png'

class SheetDetailContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ flex:1,backgroundColor: 'white'}}>
                <NavigationBar title="测试标题" leftImage={ back } leftAction={()=>this.props.navigator.pop()}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})

export default SheetDetailContainer;