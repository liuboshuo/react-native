/**
 * Created by liushuo on 17/3/8.
 */
import React , {Component} from 'react';
import {AppRegistry ,  Text , View, StyleSheet, Dimensions, Image, TouchableOpacity, Alert} from 'react-native';
import BSFirstCommonCell from './BSFirstCommonCell'
let homeTopMiddleLeftData = require('./../json/HomeTopMiddleLeft.json')
let {width} = Dimensions.get('window');
export default  class BSFirstMidleView extends Component{

    constructor(props){
        super(props);

    }
    render(){
        return(
            <View style={styles.containerStyle}>
                <View>
                    {this.renderMiddleLeft()}
                </View>

                <View>
                    {this.renderMiddleRight()}
                </View>
            </View>
        )
    }

    renderMiddleLeft(){
        let items =[];
        let model = homeTopMiddleLeftData.dataLeft[0];

        return (<TouchableOpacity onPress={()=>{
            if(!this.props.leftTestCallBack){
                return;
            }
            this.props.leftTestCallBack()
        }}>
                    <View style={styles.leftViewStyle}>
                        <Image source={{uri:model.img1}} style={styles.image}/>
                        <Image source={{uri:model.img2}} style={styles.image}/>
                        <Text style={styles.title}>
                            {model.title}
                        </Text>
                        <View style={styles.bottom}>
                            <Text style={styles.price}>{model.price}</Text>
                            <Text style={styles.sale}>{model.sale}</Text>
                        </View>
                    </View>
                </TouchableOpacity>)
    }

    renderMiddleRight(){
        let items =[];
        let topMiddleLeftDatas = homeTopMiddleLeftData.dataRight;
        for (let i = 0; i<topMiddleLeftDatas.length; i++){
            let model = topMiddleLeftDatas[i];
            items.push(<BSFirstCommonCell
                key = {i}
                title = {model.title}
                subTitle = {model.subTitle}
                titleColor = {model.titleColor}
                rightImage = {model.rightImage}
                callBackClickCall = {this.props.firstCommonCallBack}
            />)
        }
        return items;
    }
}

const styles = StyleSheet.create({
    containerStyle:{
        marginTop:15,
        flexDirection:'row',
    },
    leftViewStyle:{
        height:119,
        width:width / 2,
        backgroundColor:'white',
        marginRight:1,
        justifyContent:'center',
        alignItems:'center',
    },
    image: {
        width: 100,
        height:30,
        resizeMode: 'contain'
    },
    title:{
        color:'gray',
        fontSize:18,
        fontWeight:'bold',
    },
    bottom:{
        flexDirection:'row',
        marginTop:6
    },
    price:{
        fontSize:13,
        color:'gray',
    },
    sale:{
        marginLeft:3,
        fontSize:13,
        backgroundColor:'yellow',
        color:'orange',
    }


})