/**
 * Created by liushuo on 17/4/28.
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    ListView
} from 'react-native';
import NavigationBar from '../../component/navBarCommon'
import * as Constants from  '../../constants/constant'
import SheetContainer from './listViewDemo'
import RefreshablePlainListView from './refreshablePlainListViewDemo'
import RefreshableGroupListView from './refreshableGroupListViewDemo'
import ParallaxViewDemo from './parallaxViewDemo'
import CustomPickerDemo from './customPickerDemo'
import SwipeoutDemo from './swipeoutDemo'
import BubbleDemo from './bubbleDemo'
import ImagePickerDemo from './imagePickerDemo'
import SwiperDemo from './swiperDemo'
import LoadingImage from './loadingImageDemo'
import ScrollableTabViewDemo from './scrollableTabViewDemo'
import ActionSheetDemo from './actionSheetDemo'
import ToastShowDemo from './toastShowDemo'
import QRCodeDemo from './codeDemo'
import LeftSlidePageDemo from './leftSlidePageDemo'
import ParallaxScrollViewDemo from './parallaxScrollViewDemo'
import GalleryDemo from './galleryDemo'
import ImageLoadingDemo from './imageLoadingDemo'
import BarcodescannerDemo from './barcodescannerDemo'
import TextInputAutoHeightDemo from './autoHeightDemo'
import TestTextInputDemo from './testTextInputDemo'
import photoBrowserListView from './photoBrowserListView'
import cameraRollDemo from './cameraRollDemo'
class HomeContainers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2})
        }
    }

    initData(){
        return [
            {
                title:"ListView上拉加载下拉刷新",
                component:SheetContainer
            },
            {
                title:"ListView上拉加载下拉刷新(完善)",
                component:RefreshablePlainListView
            },
            {
                title:"ListView分组",
                component:RefreshableGroupListView
            },
            {
                title:"ListView 侧滑",
                component:SwipeoutDemo
            },
            {
                title:'picker组件',
                component:CustomPickerDemo
            },
            {
                title:'chat 聊天',
                component:BubbleDemo
            },
            {
                title:'图片选择',
                component:ImagePickerDemo
            },
            {
                title:'轮播图',
                component:SwiperDemo
            },
            {
                title:'网络图片加载显示占位图',
                component:LoadingImage
            },
            {
                title:'网络图片显示加载进度',
                component:ImageLoadingDemo
            },
            {
                title:"ScrollView Tab选项卡",
                component:ScrollableTabViewDemo
            },
            {
                title:"ActionSheet",
                component:ActionSheetDemo
            },
            {
                title:"Toast",
                component:ToastShowDemo
            },
            {
                title:"生成二维码",
                component:QRCodeDemo
            },
            {
                title:"抽屉组件",
                component:LeftSlidePageDemo
            },
            {
                title:'下拉图片放大',
                component:ParallaxViewDemo
            },
            {
                title:'导航栏渐变的下拉图片ListView',
                component:ParallaxScrollViewDemo
            },
            {
                title:'二维码扫描Demo',
                component:BarcodescannerDemo
            },
            {
                title:"输入框测试",
                component:TestTextInputDemo
            },
            {
                title:'照片浏览',
                component:photoBrowserListView
            },
            {
                title:'照片浏览可放大',
                component:GalleryDemo
            },
            {
                title:'图片选择（react-native实现）',
                component:cameraRollDemo
            },
            {
                title:'AutoHeightDemo和处理键盘遮挡问题',
                component:TextInputAutoHeightDemo
            }
        ]
    }
    gotodetail(data){
        const {navigator} = this.props;
        navigator.push({
            component: data.component,
            params:{
                data
            }
        })
    }
    row(data){
        return (
            <TouchableOpacity style={styles.cellStyle} activeOpacity={0.5} onPress={()=>this.gotodetail(data)}>

                <View style={styles.view}>
                    <Text style={styles.textView}>{data.title}</Text>
                    <Image source={ require('./../../source/images/go.png')} style={styles.imageStyle}/>
                </View>


            </TouchableOpacity>
        )
    }
    componentDidMount(){
        this.setState({
            dataSource:this.state.dataSource.cloneWithRows(this.initData())
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <NavigationBar title="demo"/>
                <ListView dataSource={this.state.dataSource}
                    renderRow={this.row.bind(this)}

                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:Constants.viewBgColor,
        flex:1
    },
    cellStyle:{
        height:44,
        backgroundColor:'white',
        borderBottomWidth:0.5,
        borderBottomColor:"#eee",
        justifyContent:'center',
    },
    view:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    textView:{
        marginLeft:6
    },
    imageStyle:{
        width:10,
        height:10,
        marginRight:5
    }
});

export default HomeContainers;