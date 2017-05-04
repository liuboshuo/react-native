/**
 * Created by liushuo on 17/4/19.
 */

import React , {Component} from 'react';
import {AppRegistry ,  Text , View, StyleSheet, Navigator, Dimensions, Image, Platform} from 'react-native';
import TabNavigator from 'react-native-tab-navigator'
import MsgListContainer from './Tab2/tab2ListContainer'
import MyCenterContainer from './Tab3/tab3CenterContainer'
import HomeContainers from './Tab1/tab1Containers'



export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectTabItemName: "tab1"
        }
    }

    render() {
        return (<TabNavigator>

            <TabNavigator.Item
                selected={this.state.selectTabItemName === "tab1"}
                title={"tab1"}
                //{/*renderIcon={() => <Image source={{uri:normalIconName}} style={styles.tabIconStyle}/>}*/}
                //{/*renderSelectedIcon={() => <Image source={{uri:selectIconName}} style={styles.tabIconStyle}/>}*/}
                onPress={() => this.setState({ selectTabItemName: "tab1" })}
                selectedTitleStyle={styles.selecttitleStyle}>
                <HomeContainers {...this.props}/>
            </TabNavigator.Item>

            <TabNavigator.Item
                selected={this.state.selectTabItemName === "tab2"}
                title={"tab2"}
                //{/*renderIcon={() => <Image source={{uri:normalIconName}} style={styles.tabIconStyle}/>}*/}
                //{/*renderSelectedIcon={() => <Image source={{uri:selectIconName}} style={styles.tabIconStyle}/>}*/}
                onPress={() => this.setState({ selectTabItemName: "tab2" })}
                selectedTitleStyle={styles.selecttitleStyle}>
                <MsgListContainer {...this.props}/>
            </TabNavigator.Item>

            <TabNavigator.Item
                selected={this.state.selectTabItemName === "tab3"}
                title={"tab3"}
                //{/*renderIcon={() => <Image source={{uri:normalIconName}} style={styles.tabIconStyle}/>}*/}
                //{/*renderSelectedIcon={() => <Image source={{uri:selectIconName}} style={styles.tabIconStyle}/>}*/}
                onPress={() => this.setState({ selectTabItemName: "tab3" })}
                selectedTitleStyle={styles.selecttitleStyle}>
                <MyCenterContainer {...this.props}/>
            </TabNavigator.Item>
        </TabNavigator>)
    }
}
const styles = StyleSheet.create({
    selecttitleStyle:{
        color:'purple'
    }
});