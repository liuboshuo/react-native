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

class MsgListContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <NavigationBar title="消息"/>

            </View>
        )
    }
}

const styles = StyleSheet.create({
})

export default MsgListContainer;