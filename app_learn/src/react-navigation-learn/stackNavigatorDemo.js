/**
 * Created by liushuo on 17/7/6.
 */
import TabNavigatorDemo from './tabNavigatorDemo'
import HomeScreen from './containers/home'
import HomeDetailScreen from './containers/homeDetail'
import {StackNavigator,TabNavigator} from 'react-navigation'
import Button from "../component/button";
import back from './../source/images/icon_back.png'
import React from 'react'
import {
    TouchableOpacity,
    Image,
    StyleSheet
} from 'react-native'

//自定义的导航条
const navigationBar = ({navigation})=>{
    const {goBack,state} = navigation;
    const {header} = state.params;
    const headerTitleStyle={
        color:'white'
    }
    const headerLeft = (
        <TouchableOpacity onPress={()=>goBack()} activeOpacity={1}>
            <Image style={{width:30,height:30}}
                    source={back}/>
        </TouchableOpacity>
    )
    const rightTitle = "更多"
    return {header,headerLeft, headerBackTitle: null,headerTitleStyle,rightTitle}
}
const SimpleApp = StackNavigator(
    {
        home:{
            screen:TabNavigatorDemo,
            navigationOptions: {
                headerBackTitle: null,
            }
        },
        homeDetail:{
            screen:HomeDetailScreen,
            navigationOptions:{
                // header:null,//设置null 导航条隐藏header
                headerBackTitle:null,//headerBackTitle
                headerTintColor:"white",
            },
        },
    },
    {
        //cardStyle:"" 自定义动画，跳转
    }
)

StyleSheet.create({
    backStyle:{

    }
})
export default SimpleApp;