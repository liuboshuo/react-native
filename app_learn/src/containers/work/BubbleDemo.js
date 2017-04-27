/**
 * Created by liushuo on 17/4/27.
 */
import React, {Component} from 'react';
import {
    View, Text, StyleSheet, ScrollView, Alert,
    Image, TouchableOpacity, NativeModules, Dimensions
} from 'react-native';
import NavigationBar from './../../common/NavBarCommon'

export default class BubbleDemo extends Component {
    render() {
        return (
            <View>


                <NavigationBar title=""/>


                <View style={{flexDirection:'row',margin:10}}>

                    <View style={styles.bubbleStyles}>
                        <Text style={styles.textStyle}>Hello World</Text>
                    </View>



                    <View style={styles.triangle}></View>
                </View>

                <View style={{flexDirection:'row',margin:10}}>


                    <View style={styles.LeftTriangle}></View>

                    <View style={styles.bubbleStyles}>
                        <Text style={styles.textStyle}>Hello World</Text>
                    </View>




                </View>


            </View>
        );
    }
}
const styles = StyleSheet.create({
    textStyle:{
        fontSize:20,
        textAlign:'center',
        margin:10,
    },
    bubbleStyles:{
        alignItems:"center",
        backgroundColor:'chartreuse',
        borderRadius:8,
    },
    triangle:{
        top:10,
        width:0,
        height:0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderBottomWidth: 8,
        borderTopWidth: 8,
        borderLeftColor: 'chartreuse',
        borderRightColor: 'transparent',
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent',
    },
    LeftTriangle:{
        top:10,
        width:0,
        height:0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 20,
        borderRightWidth: 20,
        borderBottomWidth: 10,
        borderTopWidth: 10,
        borderLeftColor: 'transparent',
        borderRightColor: 'chartreuse',
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent',
    }
})