/**
 * Created by ls-mac on 2017/3/6.
 */
import React , {Component} from 'react';
import {AppRegistry ,  Text , View, StyleSheet, Dimensions, ScrollView, Image, TouchableOpacity, Alert} from 'react-native';

let {width} = Dimensions.get('window');

export default  class BSTopView extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <View style={styles.containerStyle}>
                <View style={styles.accountViewStyle}>
                    <Image  source={{uri:"see"}} style={styles.leftIconStyle}/>
                    <View style={styles.rightOutViewStyle}>
                        <Text style={styles.rightInnerTextStyle}>
                            {"测试账号"}
                        </Text>
                        <Image source={{uri:"avatar_vip"}} style={styles.rightInnerLeftIconStyle}/>
                    </View>
                    <Image source={{uri:"icon_cell_rightArrow"}} style={styles.rightInnerRightIconStyle}/>
                    </View>
                <View style={styles.bottomView}>
                    {this.renderBottomData()}
                </View>
            </View>
        )
    }

    renderBottomData(){
        let data = [{'number':'100', 'title':'码哥券'},{'number':'12', 'title':'评价'},{'number':'50', 'title':'收藏'}];
        let returnUI = [];
        for(let i = 0; i<data.length ; i++){
            let model = data[i]
            returnUI.push(<TouchableOpacity key={i} onPress={()=>Alert.alert('点击账户信息')}>
                <View style={styles.bottomInnerViewStyle}>
                    <Text style={styles.topTextStyle}>
                        {model.number}
                    </Text>
                    <Text style={styles.bottomTextStyle}>
                        {model.title}
                    </Text>
                </View>
            </TouchableOpacity>)
        }
        return returnUI;
    }
}

const styles = StyleSheet.create({
    containerStyle:{
        height:550,
        backgroundColor:'rgba(255,96,0,1.0)',

    },
    accountViewStyle:{
        marginTop:450,
        flexDirection:'row',
        alignItems:"center",
        justifyContent:'space-around'
    },
    leftIconStyle:{
        width:50,
        height:50,
        borderRadius:25,
        borderWidth:5,
        borderColor:'white',
        marginLeft:8
    },

    rightOutViewStyle:{
        flexDirection:'row',
        width:width * 0.7,
        alignItems:'center'
    },
    rightInnerTextStyle:{

    },
    rightInnerLeftIconStyle:{
        width:20,
        height:20,
    },
    rightInnerRightIconStyle:{
        width:8,
        height:13,

    },
    bottomView:{
        backgroundColor:'rgba(255,255,255,0.5)',
        flexDirection:'row',
        position:'absolute',
        bottom:0,
        alignItems:'center',
    },
    bottomInnerViewStyle:{
        width:(width / 3) + 1,
        height:45,
        justifyContent:'center',
        alignItems:'center',
        borderRightWidth:0.3,
        borderColor:'white',
    },
    topTextStyle:{
        fontSize:14,
        color:'gray'
    },
    bottomTextStyle:{
        fontSize:13,
        color:'gray'
    }
})