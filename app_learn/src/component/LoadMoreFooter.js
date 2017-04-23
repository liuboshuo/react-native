/**
 * Created by ls-mac on 2017/4/23.
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

export default class LoadMoreFooter extends Component {

    render () {

        return(<View style={styles.footer}>
            <Text style={styles.footerTitle}>{this.props.isLoadAll ? "已全部加载" : "正在加载中..."}</Text>
        </View>)

    }

}

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
    },
    footerTitle: {
        marginLeft: 10,
        fontSize: 15,
        color: 'gray'
    }
})