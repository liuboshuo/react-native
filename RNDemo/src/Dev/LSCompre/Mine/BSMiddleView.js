/**
 * Created by ls-mac on 2017/3/4.
 */
import React , {Component} from 'react';
import {AppRegistry ,  Text , View, StyleSheet, Dimensions, Image, TouchableOpacity, Alert} from 'react-native';

let width = Dimensions.get('window').width;

let BSMiddleViewHeight = 60;

export default  class BSMiddleView extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <View style={styles.containerStyle}>
                <BSCellView title="待付款" iconName="order1"/>
                <BSCellView title="待使用" iconName="order2"/>
                <BSCellView title="待使用" iconName="order3"/>
                <BSCellView title="待使用" iconName="order4"/>
            </View>
        )
    }
}

class BSCellView extends Component{
    static defaultProps = {
        iconName:'',
        title:"",
    }
    constructor(props){
        super(props);

    }
    render(){
        return(
            <TouchableOpacity onPress={() => {Alert.alert('点击了cell')}}>
                <View style={styles.cellViewStyle}>
                    <Image source={{uri:this.props.iconName}} style={styles.iconStyle} />
                    <Text style={styles.titleStyle}>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({
    containerStyle:{
        flex:1,
        alignItems:'center',
        height:BSMiddleViewHeight,
        flexDirection:'row',
        backgroundColor:'white'
    },
    cellViewStyle:{
        width:width / 4,
        height:BSMiddleViewHeight,
        justifyContent:'center',
        alignItems:'center'
    },
    iconStyle:{
        width:30,
        height:30,
    },
    titleStyle: {
        color:'gray',
        fontSize:13
    }
})