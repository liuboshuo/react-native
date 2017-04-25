/**
 * Created by liushuo on 17/4/19.
 */

import React , {Component} from 'react';
import {AppRegistry ,  Text , View, StyleSheet, Navigator, Dimensions, Image, Platform} from 'react-native';
import TabNavigator from 'react-native-tab-navigator'
import MsgListContainer from './msg/msgListContainer'
import SheetContainer from './work/sheetContainer'
import MyCenterContainer from './my/myCenterContainer'
import RefreshablePlainListView from './work/refreshablePlainListView'
import RefreshableGroupListView from './work/refreshableGroupListView'
import ListView04 from './work/ListView04'

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
                title={"工单"}
                //{/*renderIcon={() => <Image source={{uri:normalIconName}} style={styles.tabIconStyle}/>}*/}
                //{/*renderSelectedIcon={() => <Image source={{uri:selectIconName}} style={styles.tabIconStyle}/>}*/}
                onPress={() => this.setState({ selectTabItemName: "tab1" })}
                selectedTitleStyle={styles.selecttitleStyle}>
                <RefreshableGroupListView {...this.props}/>
            </TabNavigator.Item>

            <TabNavigator.Item
                selected={this.state.selectTabItemName === "tab2"}
                title={"消息"}
                //{/*renderIcon={() => <Image source={{uri:normalIconName}} style={styles.tabIconStyle}/>}*/}
                //{/*renderSelectedIcon={() => <Image source={{uri:selectIconName}} style={styles.tabIconStyle}/>}*/}
                onPress={() => this.setState({ selectTabItemName: "tab2" })}
                selectedTitleStyle={styles.selecttitleStyle}>
                <MsgListContainer {...this.props}/>
            </TabNavigator.Item>

            <TabNavigator.Item
                selected={this.state.selectTabItemName === "tab3"}
                title={"我的"}
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