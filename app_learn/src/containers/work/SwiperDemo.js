/**
 * Created by liushuo on 17/4/27.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Alert
} from 'react-native';
import NavigationBar from './../../common/NavBarCommon'
import Swiper from 'react-native-swiper'
import * as Constants from './../../common/constant'
export default class SwiperDemo extends Component {

    constructor (props) {
        super(props)
        this.state = {
            imgList: [
                'http://cms-bucket.nosdn.127.net/f6dfc9de58164bb89501c791896257b320170427143244.jpeg',
                'http://cms-bucket.nosdn.127.net/bc801fec25a54c349b43704fcd6b259020170427073251.jpeg',
                'http://cms-bucket.nosdn.127.net/e06f921b51bc4cb29f7302375270b4fd20170427114336.png',
                'http://cms-bucket.nosdn.127.net/f74c419dd6ed4d96932230f1c60af65b20170427092117.jpeg',
                'http://cms-bucket.nosdn.127.net/2263228dc8e94e96bc64e467d210bf7220170427081659.jpeg'
            ],
            loadQueue: [0, 0, 0, 0]
        }
    }
    loadHandle (i) {
        let loadQueue = this.state.loadQueue
        loadQueue[i] = 1
        this.setState({
            loadQueue
        })
    }
    click(){
        Alert.alert("","点击")
    }

    render() {
        return (
            <View>
                <NavigationBar title=""/>
                 {/*View*/}
                <Swiper height={120} autoplay>
                    <View style={styles.view1}>
                        <Text style={styles.textStyle}>111</Text>
                    </View>
                    <View style={styles.view2}>
                        <Text style={styles.textStyle}>222</Text>
                    </View>
                    <View style={styles.view3}>
                        <Text style={styles.textStyle}>333</Text>
                    </View>
                </Swiper>
                <View style={{height:10}}></View>
                <Swiper
                    height={120}
                    dot={<View style={{backgroundColor:'rgba(0,0,0,.3)', width: 8, height: 8,borderRadius: 4, margin:3}} />}

                    activeDot={<View style={{backgroundColor: '#fff', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}

                    paginationStyle={{
                            bottom: 10
                    }}

                    autoplay

                    loop={false} >

                    <TouchableOpacity  style={styles.view} activeOpacity={1}>
                        <Image style={styles.imageStyle} source={require('./../../source/scrollViewImages/img_01.png')}/>
                        {/*<Text style={styles.textStyle}>111</Text>*/}
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.view} activeOpacity={1}>
                        <Image style={styles.imageStyle} source={require('./../../source/scrollViewImages/img_02.png')}/>
                        {/*<Text style={styles.textStyle}>222</Text>*/}
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.view} activeOpacity={1}>
                        <Image style={styles.imageStyle} source={require('./../../source/scrollViewImages/img_03.png')} />
                        {/*<Text style={styles.textStyle}>333</Text>*/}
                    </TouchableOpacity>
                </Swiper>

                <View style={{height:10}}></View>
                <Swiper height={120} autoplay>
                    {
                        this.state.imgList.map((item,i)=>{
                            return(<TouchableOpacity onPress={this.click.bind(this)} key = {i} style={styles.view} activeOpacity={1}>
                                <Image style={styles.imageStyle} onLoad={()=>this.loadHandle(i)} source={{uri:item}} >
                                    {!this.state.loadQueue[i] && <View style={styles.loadingView}>
                                        <Image style={styles.loadingImage} source={require('./../../source/scrollViewImages/loading.gif')}/>
                                    </View>}
                                </Image>
                            </TouchableOpacity>)
                        })
                    }
                </Swiper>


            </View>
        );
    }
}
const styles = StyleSheet.create({
    loadingView:{
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,.5)'
    },
    loadingImage:{
        width:50,
        height:50
    },
    view1:{
        width:Constants.screenWidth,
        height:120,
        backgroundColor:'red'
    },
    view2:{
        width:Constants.screenWidth,
        height:120,
        backgroundColor:'blue'
    },
    view3:{
        width:Constants.screenWidth,
        height:120,
        backgroundColor:'orange'
    },
    view:{
        width:Constants.screenWidth,
        height:120,
    },
    imageStyle:{
        width:Constants.screenWidth,
        height:120
    }
})
