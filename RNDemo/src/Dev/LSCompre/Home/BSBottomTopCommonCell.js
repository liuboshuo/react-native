/**
 * Created by liushuo on 17/3/8.
 */
import React , {Component} from 'react';
import {AppRegistry ,  Text , View, StyleSheet, Dimensions, Image, TouchableOpacity} from 'react-native';

let {width} = Dimensions.get('window');

export default  class BSBottomTopCommonCell extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <View style={styles.containerStyle}>
                <View style={styles.leftView}>
                    <Image source={{uri:this.props.leftIcon}} style={styles.leftIconStyle}/>
                    <Text style={styles.leftTitle}>{this.props.leftTitle}</Text>
                </View>

                <TouchableOpacity  >
                    <View style={styles.rightView}>
                        <Text style={styles.rightTitle}>{this.props.rightTitle}</Text>
                        <Image source={{uri:'icon_cell_rightArrow'}}  style={styles.rightIconStyle}/>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle:{
        backgroundColor:'white',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        width:width,
        height:39,
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:1
    },
    leftView:{
        marginLeft:8,
        flexDirection:'row',
        alignItems:'center',
    },
    leftIconStyle:{
        width:23,
        height:23,
        marginRight:5
    },
    leftTitle:{
        fontSize:17,
    },
    rightIconStyle:{
        width:8,
        height:13,
        marginLeft:2
    },
    rightTitle:{
        color:'gray',
        fontSize:13
    },
    rightView:{
        marginRight:8,
        flexDirection:'row',
        alignItems:'center'
    }
})