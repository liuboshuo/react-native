/**
 * Created by liushuo on 17/3/3.
 */
import React , {Component} from 'react';
import {AppRegistry , TouchableOpacity,Alert, TextInput, Switch, Image,  Text , View, StyleSheet, Dimensions} from 'react-native';

let {width} = Dimensions.get('window')

export default class BSCommonCell extends Component {

    static defaultProps = {

        title:"",

        isSwitch:false,

        rightDefaultTitle:""

    }

    constructor(props){
        super(props);
        this.state = {
            isOn : false,
        }
    }


    render(){
        return(
            <TouchableOpacity onPress={()=>Alert.alert('点击了cell')}>

                <View style={styles.cellViewStyle}>
                    <Text style={styles.leftTextStyle}>{this.props.title}</Text>

                    {this.renderContent()}

                </View>

            </TouchableOpacity>

        )
    }
    renderContent(){
        if (this.props.isSwitch){
            return(
                <View style={styles.rightStyle}>
                    <Switch/>
                </View>
            )
        }else {
            return(
                <View style={styles.rightStyle}>
                    <Text style={{color:'#cccccc',marginRight:3}}>{this.props.rightDefaultTitle}</Text>
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
        borderBottomWidth:1,
        alignItems:'center'
    },
    rightStyle:{
        marginRight:10,
        flexDirection:'row',
        alignItems:'center'
    },
    rightIconStyle:{
        height:13,
        width:8,
    },
    leftTextStyle:{
        color:'gray',
        marginLeft:10,
        fontSize:15
    }
});