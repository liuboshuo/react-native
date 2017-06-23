/**
 * Created by liushuo on 17/5/2.
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
import NavigationBar from '../../component/navBarCommon'
import back from './../../source/images/icon_back.png'
import * as Constants from  '../../constants/constant'
import Gallery from 'react-native-gallery'

class SheetDetailContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationBar title="照片墙" leftImage={ back } leftAction={()=>this.props.navigator.pop()}/>
                <Gallery
                    style={{flex: 1, backgroundColor: 'black'}}
                    images={[
                                "assets-library://asset/asset.JPG?id=ED7AC36B-A150-4C38-BB8C-B6D696F4F2ED&ext=JPG",
                                'http://ww2.sinaimg.cn/mw690/714a59a7tw1dxqkkg0cwlj.jpg',
                                'http://www.bz55.com/uploads/allimg/150122/139-150122145421.jpg'
                            ]}
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:Constants.viewBgColor,
        flex:1
    }
});

export default SheetDetailContainer;