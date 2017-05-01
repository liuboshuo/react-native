/**
 * Created by ls-mac on 2017/4/29.
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Platform,
    TouchableOpacity
} from 'react-native';
import back from './../../source/images/icon_back.png'
import * as Constants from  '../../constants/constant'
import ParallaxView from 'react-native-parallax-view'

class ParallaxViewDemo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>

                <ParallaxView
                    backgroundSource = {require('./../../source/images/listView_header_icon.jpg')}
                    windowHeight={200}
                    scrollableViewStyle={{backgroundColor:'white'}}
                >
                    <View style={{flex:1,padding:10}}>
                        <Text>
                            React 起源于 Facebook 的内部项目，
                            因为该公司对市场上所有 JavaScript MVC 框架，都不满意，就决定自己写一套，
                            用来架设Instagram 的网站。做出来以后，发现这套东西很好用，就在2013年5月开源了。
                            由于 React的设计思想极其独特，属于革命性创新，性能出众，代码逻辑却非常简单。所以，越来越多的人开始关注和使用，认为它可能是将来 Web 开发的主流工具。
                            这个项目本身也越滚越大，从最早的UI引擎变成了一整套前后端通吃的 Web App 解决方案。衍生的 React Native 项目，目标更是宏伟，希望用写 Web App 的方式去写 Native App。如果能够实现，整个互联网行业都会被颠覆，因为同一组人只需要写一次 UI ，就能同时运行在服务器、浏览器和手机。
                            React主要用于构建UI。你可以在React里传递多种类型的参数，如声明代码，帮助你渲染出UI、也可以是静态的HTML DOM元素、也可以传递动态变量、甚至是可交互的应用组件。
                            特点：
                            1.声明式设计：React采用声明范式，可以轻松描述应用。
                            2.高效：React通过对DOM的模拟，最大限度地减少与DOM的交互。
                            3.灵活：React可以与已知的库或框架很好地配合。


                            由于 React的设计思想极其独特，属于革命性创新，性能出众，代码逻辑却非常简单。所以，越来越多的人开始关注和使用，认为它可能是将来 Web 开发的主流工具。
                            这个项目本身也越滚越大，从最早的UI引擎变成了一整套前后端通吃的 Web App 解决方案。衍生的 React Native 项目，目标更是宏伟，希望用写 Web App 的方式去写 Native App。如果能够实现，整个互联网行业都会被颠覆，因为同一组人只需要写一次 UI ，就能同时运行在服务器、浏览器和手机。
                            React主要用于构建UI。你可以在React里传递多种类型的参数，如声明代码，帮助你渲染出UI、也可以是静态的HTML DOM元素、也可以传递动态变量、甚至是可交互的应用组件。
                        </Text>
                    </View>

                </ParallaxView>

                <TouchableOpacity style={styles.back} activeOpacity={1} onPress={()=>this.props.navigator.pop()}>
                    <Image style={styles.imageStyle} source={back}/>
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:Constants.viewBgColor,
        flex:1
    },
    back:{
        position: 'absolute',
        left:Platform.OS == 'ios' ? 10 : 0,
        top:Platform.OS == 'ios' ? 27 : 0,
        width:Platform.OS == 'ios' ? 30 : 33,
        height:Platform.OS == 'ios' ? 30 : 60,
        justifyContent:'center',
        alignItems:'center'
    },
    imageStyle:{
        width:30,
        height:30
    }
});

export default ParallaxViewDemo;