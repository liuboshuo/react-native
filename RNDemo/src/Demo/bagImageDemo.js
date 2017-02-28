/**
 * Created by liushuo on 17/2/20.
 */
import React , {Component} from 'react';
import {AppRegistry , ListView , Text , View, StyleSheet,TouchableOpacity, Image, Dimensions} from 'react-native';

let badgeDatas = require('../Json/BadgeData.json')
let {width,height,scale} = Dimensions.get("window");

let cols = 3;
let bWidth = 100;
let hM = (width - 3 * bWidth) / (cols + 1)
let vM = 25;

export default class BagImageDemo extends Component {
    renderAllBadge(){
        let allBadgeDatas = [];
        for (let i = 0; i<badgeDatas.data.length;i++){
            let data = badgeDatas.data[i];
            allBadgeDatas.push(
                <View key={i} style={styles.outViewStyle}>

                    <Image style={styles.imageStyle} source={{uri:data.icon}}></Image>
                    <Text style={styles.bottomTextsStyle}>{data.title}</Text>

                </View>
            );
        }
        return allBadgeDatas;
    }

    render() {
        return (
            <View style={styles.contain}>
                {/*返回所有数据包*/}
                {this.renderAllBadge()}
            </View>

        )
    }
}

const  styles = StyleSheet.create({

    contain:{
        backgroundColor:'#F5FCFF',
        flexDirection:"row",
        flexWrap:'wrap',
    },
    outViewStyle:{
        width:bWidth,
        height: bWidth,
        marginLeft:hM,
        marginTop:vM,
        backgroundColor:'red',
        alignItems:"center"
    },
    imageStyle:{
        width:80,
        height:80
    },
    bottomTextsStyle:{
        fontSize:12
    }
});
