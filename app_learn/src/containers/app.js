/**
 * Created by liushuo on 17/4/19.
 */

import React , {Component} from 'react';
import {AppRegistry ,  Text , View, StyleSheet, Navigator, Dimensions, Image, Platform} from 'react-native';
import TabNavigator from 'react-native-tab-navigator'
import MsgListContainer from './msg/msgListContainer'
import MyCenterContainer from './my/myCenterContainer'
import SheetContainer from './home/ListViewDemo'
import RefreshablePlainListView from './home/refreshablePlainListViewDemo'
import RefreshableGroupListView from './home/refreshableGroupListViewDemo'
import ImagePickerDemo from './home/imagePickerDemo'
import ImageSinglePickerDemo from './home/imageSinglePickerDemo'
import BubbleDemo from './home/bubbleDemo'
import SwiperDemo from './home/swiperDemo'
import LoadingImage from './home/loadingImageDemo'
import ScrollableTabViewDemo from './home/scrollableTabViewDemo'
import ActionSheetDemo from './home/actionSheetDemo'
import ToastShowDemo from './home/toastShowDemo'
import LeftSlidePageDemo from './home/leftSlidePageDemo'
import QRCodeDemo from './home/codeDemo'
import HomeContainers from './home/homeContainers'
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
                title={"Tab1"}
                //{/*renderIcon={() => <Image source={{uri:normalIconName}} style={styles.tabIconStyle}/>}*/}
                //{/*renderSelectedIcon={() => <Image source={{uri:selectIconName}} style={styles.tabIconStyle}/>}*/}
                onPress={() => this.setState({ selectTabItemName: "tab1" })}
                selectedTitleStyle={styles.selecttitleStyle}>
                <HomeContainers {...this.props}/>
            </TabNavigator.Item>

            <TabNavigator.Item
                selected={this.state.selectTabItemName === "tab2"}
                title={"Tab2"}
                //{/*renderIcon={() => <Image source={{uri:normalIconName}} style={styles.tabIconStyle}/>}*/}
                //{/*renderSelectedIcon={() => <Image source={{uri:selectIconName}} style={styles.tabIconStyle}/>}*/}
                onPress={() => this.setState({ selectTabItemName: "tab2" })}
                selectedTitleStyle={styles.selecttitleStyle}>
                <MsgListContainer {...this.props}/>
            </TabNavigator.Item>

            <TabNavigator.Item
                selected={this.state.selectTabItemName === "tab3"}
                title={"Tab3"}
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