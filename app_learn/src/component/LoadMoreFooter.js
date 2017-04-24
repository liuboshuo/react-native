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
        let text = null;
        {
            if(this.props.isLoadAll == 0){
                text = "下拉加载";
            }else if(this.props.isLoadAll == 1){
                text = "正在加载中...";
            }else if(this.props.isLoadAll == 2){
                text = "已全部加载";
            }
        }
        return(<View style={styles.footer}>
            <Text style={styles.footerTitle}>{text
                 }</Text>
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