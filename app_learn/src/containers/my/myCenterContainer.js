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

class MyCenterContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <NavigationBar title="我的"/>

            </View>
        )
    }
}

const styles = StyleSheet.create({

})

export default MyCenterContainer;