/**
 * Created by ls-mac on 2017/3/1.
 */
/**
 * Created by liushuo on 17/2/20.
 */
import React , {Component} from 'react';
import {AppRegistry , TabBarIOS,  Text , View, StyleSheet, Dimensions} from 'react-native';

let screeenWidth = Dimensions.get("window").width;


export default class SystemTabBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectTabBarIndex:"0"
        }
    }
    render(){
        return(
            <View style={styles.outView}>
                <View style={styles.headerStyle}>
                    <Text>tabbar测试</Text>
                </View>
                <TabBarIOS
                    barTintColor="black"
                    tintColor="orange"
                   // {/*selected={this.state.selectTabBarIndex == '0'}*/}
                   // {/*onPress={()=>this.setState({selectTabBarIndex:'0'})}*/}
                >
                    <TabBarIOS.Item
                        systemIcon="bookmarks"
                        badge={3}
                        selected={this.state.selectTabBarIndex == '0'}
                        onPress={()=>this.setState({selectTabBarIndex:'0'})}
                    >
                        <View style={styles.common}>
                            <Text>一</Text>
                        </View>
                    </TabBarIOS.Item>

                    <TabBarIOS.Item
                        systemIcon="history"
                        selected={this.state.selectTabBarIndex == '1'}
                        onPress={()=>this.setState({selectTabBarIndex:'1'})}
                    >
                        <View style={styles.common}>
                            <Text>二</Text>
                        </View>
                    </TabBarIOS.Item>

                    <TabBarIOS.Item
                        systemIcon="contacts"
                        selected={this.state.selectTabBarIndex == '2'}
                        onPress={()=>this.setState({selectTabBarIndex:'2'})}
                    >
                        <View style={styles.common}>
                            <Text>三</Text>
                        </View>
                    </TabBarIOS.Item>

                    <TabBarIOS.Item
                        systemIcon="featured"
                        selected={this.state.selectTabBarIndex == '3'}
                        onPress={()=>this.setState({selectTabBarIndex:'3'})}
                    >
                        <View style={styles.common}>
                            <Text>四</Text>
                        </View>
                    </TabBarIOS.Item>
                </TabBarIOS>
            </View>


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