/**
 * Created by liushuo on 17/7/6.
 */
import Tab1 from './tabs/oneTab'
import Tab2 from './tabs/twoTab'
import {TabNavigator} from 'react-navigation'
import React from 'react'
import {StyleSheet,Image} from 'react-native';
const TabNavigatorDemo = TabNavigator({
    tab1:{screen:Tab1,
        navigationOptions : {
            title:"首页",
            tabBarLabel:"首页",
            tabBarIcon:({tintColor,focused})=>{
                // 设置自定义的tabBar viewStyle
                if (focused) {
                }
                return (
                    <Image source={require("../source/images/icon_home.png")}
                           style={[{tintColor: tintColor},styles.iconStyle]}/>
                )
            }
        }},
    tab2: {
        screen: Tab2,
        navigationOptions: {
            title: "我的",
            tabBarLabel: "我的",
            tabBarIcon: (tintColor) => {
                return (
                    <Image source={require("../source/images/icon_crm.png")}
                           style={[styles.iconStyle,]}/>
                )
            }
        }
    }
},{
    tabBarOptions: {

        animationEnabled: false, // 切换页面时不显示动画
        tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
        swipeEnabled: false, // 禁止左右滑动
        backBehavior: 'none', // 按 back 键是否跳转到第一个 Tab， none 为不跳转


        activeBackgroundColor:'red',
        inactiveBackgroundColor:'white',

        activeTintColor:'white',
        inactiveTintColor:'#666',

        showLabel:true,
        labelStyle:{
            fontSize:13
        }
    }
})

const styles = StyleSheet.create({
    iconStyle:{
        width:30,
        height:30
    }
})
export default TabNavigatorDemo;