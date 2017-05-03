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
import * as Constants from  '../../constants/constant'
class MsgListContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationBar title="消息"/>
                <View style={styles.content}>
                    <Text>tab2</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Constants.viewBgColor,
    },
    content:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default MsgListContainer;