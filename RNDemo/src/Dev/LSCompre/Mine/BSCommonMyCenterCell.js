/**
 * Created by ls-mac on 2017/3/4.
 */

import React , {Component} from 'react';
import {AppRegistry , TouchableOpacity,Alert, TextInput, Switch, Image,  Text , View, StyleSheet, Dimensions} from 'react-native';

let {width} = Dimensions.get('window')

export default class BSCommonMyCenterCell extends Component {

    static defaultProps = {

        leftImageName:'',

        leftTitleName:"",

        rightTitleName:'',

        rightImageName:""

    }

    constructor(props){
        super(props);
    }


    render(){
        return(
            <TouchableOpacity onPress={()=>Alert.alert('点击了cell')}>
                <View style={styles.cellViewStyle}>
                    <View style={styles.leftOutViewStyle}>
                        <Image style={styles.leftIconStyle} source={{uri:this.props.leftImageName}}/>
                        <Text style={styles.leftTextStyle}>{this.props.leftTitleName}</Text>
                    </View>
                    {this.renderRightContent()}
                </View>

            </TouchableOpacity>

        )
    }
    renderRightContent(){
        if (this.props.rightImageName.length != 0){
            return(
                <View style={styles.rightOutViewStyle}>
                    <Image source={{uri:this.props.rightImageName}} style={styles.rightLeftIconStyle}></Image>
                    <Image source={{uri:'icon_cell_rightArrow'}} style={styles.rightIconStyle}></Image>
                </View>
            )
        }else {
            return(
                <View style={styles.rightOutViewStyle}>
                    <Text style={{color:'#cccccc',marginRight:3}}>{this.props.rightTitleName}</Text>
                    <Image source={{uri:'icon_cell_rightArrow'}} style={styles.rightIconStyle}></Image>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    cellViewStyle:{
        backgroundColor:'white',
        width:width,
        height:40,
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomColor:'#eeeeee',
        borderBottomWidth:0.5,
        alignItems:'center'
    },
    leftOutViewStyle:{
        flexDirection:'row',
        alignItems:'center'
    },
    leftIconStyle:{
        width:30,
        height:30,
        marginLeft:8,
        borderRadius:15
    },
    leftTextStyle:{
        color:'gray' ,

        marginLeft:10,

        fontSize:15
    },
    rightOutViewStyle:{
        marginRight:10,
        flexDirection:'row',
        alignItems:'center'
    },
    rightLeftIconStyle:{
        width:24,
        height:13,
        marginRight:10
    },
    rightIconStyle:{
        height:13,
        width:8,
    },
});
