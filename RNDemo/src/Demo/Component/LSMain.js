/**
 * Created by ls-mac on 2017/3/1.
 */
import React , {Component} from 'react';
import {AppRegistry , TabBarIOS, NavigatorIOS,  Text , View, StyleSheet, Dimensions} from 'react-native';

import LSHome from './LSHome'

import LSFind from './LSFind'
import LSMessage from './LSMessage'
import LSMine from './LSMine'



let screeenWidth = Dimensions.get("window").width;
export default class LSMain extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectTabBarIndex:"0"
        }
    }
    render(){
        return(
                <TabBarIOS
                    tintColor="orange"
                >
                    <TabBarIOS.Item
                        icon={require('../../DemoImages/TabBar/tabbar_home@2x.png')}
                        title="首页"
                        selected={this.state.selectTabBarIndex == '0'}
                        onPress={()=>this.setState({selectTabBarIndex:'0'})}
                    >
                        <NavigatorIOS
                            style={{flex:1}}
                            initialRoute={
                                {
                                    component:LSHome,
                                    title:"测试",
                                    leftButtonIcon:require('../../DemoImages/NavigationBar/navigationbar_friendattention@2x.png'),
                                    rightButtonIcon:require('../../DemoImages/NavigationBar/navigationbar_pop.png'),
                                    tintColor:"orange"
                                }
                            }
                        >

                        </NavigatorIOS>

                    </TabBarIOS.Item>

                    <TabBarIOS.Item
                        icon = {require('../../DemoImages/TabBar/tabbar_discover@2x.png')}
                        title="发现"
                        selected={this.state.selectTabBarIndex == '1'}
                        onPress={()=>this.setState({selectTabBarIndex:'1'})}
                    >
                        <NavigatorIOS
                            style={{flex:1}}
                            initialRoute={
                                {
                                    component:LSFind,
                                    title:"发现"
                                }
                            }
                        >

                        </NavigatorIOS>
                    </TabBarIOS.Item>

                    <TabBarIOS.Item
                        icon={require('../../DemoImages/TabBar/tabbar_message_center@2x.png')}
                        title="消息"
                        selected={this.state.selectTabBarIndex == '2'}
                        onPress={()=>this.setState({selectTabBarIndex:'2'})}
                    >
                        <NavigatorIOS
                            style={{flex:1}}
                            initialRoute={
                                {
                                    component:LSMessage,
                                    title:"消息"
                                }
                            }
                        >

                        </NavigatorIOS>
                    </TabBarIOS.Item>

                    <TabBarIOS.Item
                        icon={require('../../DemoImages/TabBar/tabbar_profile@2x.png')}
                        title="我的"
                        selected={this.state.selectTabBarIndex == '3'}
                        onPress={()=>this.setState({selectTabBarIndex:'3'})}
                    >
                        <NavigatorIOS
                            style={{flex:1}}
                            initialRoute={
                                {
                                    component:LSMine,
                                    title:"我的"
                                }
                            }
                        >

                        </NavigatorIOS>
                    </TabBarIOS.Item>
                </TabBarIOS>
        )
    }
}

const styles = StyleSheet.create({
    outView:{
        flex:1,
    },

    headerStyle:{
        backgroundColor:'orange',
        width:screeenWidth,
        height:64,
        justifyContent:'center',
        alignItems:'center'
    },
    common:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'blue'
    }
})