/**
 * Created by liushuo on 17/3/3.
 */
import React , {Component} from 'react';
import {AppRegistry ,  Text , View, StyleSheet, Dimensions,Image, TouchableOpacity, Alert} from 'react-native';

let {width} = Dimensions.get('window');

export default  class BSFirstCommonCell extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <TouchableOpacity onPress={()=>{
                if(this.props.callBackClickCall == null){
                     return;
                }
                this.props.callBackClickCall()}
            }>
                <View style={{}}>
                    <View style={[{width: this.props.width == null ? width / 2 - 1 : this.props.width}, styles.containerStyle]}>
                        <View style={styles.leftViewStyle}>
                            <Text style={[{color:this.props.titleColor},styles.titleStyle]}>{this.props.title}</Text>
                            <Text style={styles.subTitleStyle}>{this.props.subTitle}</Text>
                        </View>
                        <Image source={{uri:this.dealImageName(this.props.rightImage)}} style={styles.icon}/>
                    </View>
                    <View style={{width: this.props.width == null ? width / 2 - 1: this.props.width,height:1,backgroundColor:'#e8e8e8'}}></View>
                </View>
            </TouchableOpacity>
        )
    }
    dealImageName(rightImage)
    {
        if (rightImage.search('w.h') == -1){
            return rightImage;
        }else {
            return rightImage.replace('w.h','50.50')
        }
    }
}

const styles = StyleSheet.create({

    containerStyle:{
        justifyContent:'space-around',
        alignItems:'center',
        flexDirection:'row',
        height:59,
        backgroundColor:'white',
    },

    titleStyle:{
        fontSize:18,
        fontWeight:'bold',
    },

    leftViewStyle:{
        justifyContent:'center',
        alignItems:'center',
    },

    subTitleStyle:{
        fontSize:15,
        color:'gray'
    },

    icon:{
        width:50,
        height:50,
        resizeMode:'contain'
    }

})