/**
 * Created by liushuo on 17/4/27.
 */
import React, {Component} from 'react';
import {
    View, Text, StyleSheet, ListView, TextInput,
    Image, TouchableOpacity,ScrollView
} from 'react-native';
import NavigationBar from '../../component/navBarCommon'
import MyListView from './../../component/myListView'
import * as Constants from './../../constants/constant'
import back from './../../source/images/icon_back.png'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'

export default class BubbleDemo extends Component {

    constructor(props){

        super(props);



        this.state = {
            dataSource:new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2})
        }
    }

    initData(){
        return [
            {
                from:'liushuo',
                isSelf:true,
                content:'测试斯柯达减肥呢类似的看法开始带你飞开始带你飞可能的说法都说开了房间',
                time:'34334324'
            },
            {
                from:'test',
                isSelf:false,
                content:'测试我我饿假如你上拉蓝山咖啡酸辣粉设计费克里斯多夫老师我诶如哦IE既然'
            },
            {
                from:'test',
                isSelf:false,
                content:'测试噢诶若君偶尔俊女偶尔加入偶记而偶记而我今儿偶记而偶尔加入'
            },
            {
                from:'test',
                isSelf:false,
                content:'测试我；而寂寞欧赔为己任而我人平均二级任务无溶剂欧可人'
            },
            {
                from:'liushuo',
                isSelf:true,
                content:'测试可是大好人诶哦既然为软件的说法是打发第三方士大夫'
            },
            {
                from:'test',
                isSelf:false,
                content:'测试我'
            },
            {
                from:'liushuo',
                isSelf:true,
                content:'测试可是大好人诶哦既然为软件的说法是打发第三方士大夫'
            },
            {
                from:'test',
                isSelf:false,
                content:'测试我；而寂寞欧赔为己任而我人平均二级任务无溶剂欧可人'
            },
            {
                from:'liushuo',
                isSelf:true,
                content:'测试可是大好人诶哦既然为软件的说法是打发第三方士大夫'
            },
            {
                from:'liushuo',
                isSelf:true,
                content:'测试可是大好人诶哦既然为软件的说法是打发第三方士大夫'
            }
        ]
    }

    loadData(pageNo,callback,options){
        setTimeout(()=>{
            callback(this.initData());
        },1000);
    }

    renderRow(data){

        if (!data.isSelf){
            return (
                <TouchableOpacity style={styles.cell} activeOpacity={1}>
                    <Image source={require('./../../source/images/Gatsby.png')} style={styles.avatorImage}/>
                    <View style={styles.LeftTriangle}></View>

                    <View style={styles.bubbleStyles}>

                        <Text style={styles.textStyle}>{data.content}</Text>

                    </View>


                </TouchableOpacity>)
        }else {
            return(
                <TouchableOpacity style={[styles.cell,{justifyContent:'flex-end'}]} activeOpacity={1}>

                    <View style={styles.bubbleStyles}>

                        <Text style={styles.textStyle}>{data.content}</Text>

                    </View>

                    <View style={styles.triangle}></View>

                    <Image source={require('./../../source/images/Gatsby.png')} style={styles.avatorImage}/>

                </TouchableOpacity>)
        }
    }
    send(){
    }
    render() {
        return (
            <View style={{flex:1, backgroundColor:Constants.viewBgColor}}>
                <NavigationBar title="聊天"  leftImage={ back } leftAction={()=>this.props.navigator.pop()}/>

                <KeyboardAwareScrollView contentContainerStyle={{flex:1}} getTextInputRefs={() => { return [this._textInputRef];}}>
                    <MyListView
                        style={styles.myListViewStyle}
                        onFetch={this.loadData.bind(this)}
                        renderRow={(data)=>{ return this.renderRow(data)}}
                        enableFooter={false}/>

                    <View style={styles.bottomView}>
                        <View>

                            <TextInput style={styles.textInputStyle} ref={(r) => { this._textInputRef = r; }} underlineColorAndroid={'transparent'}/>

                        </View>

                        <TouchableOpacity style={styles.send} onPress={()=>{this.send()}} >
                            <Text>发送</Text>
                        </TouchableOpacity>
                    </View>


                </KeyboardAwareScrollView>


            </View>
        );
    }
}
const styles = StyleSheet.create({
    cell:{
        flexDirection:'row',
        marginLeft:10,
        marginBottom:20,
        marginRight:20,
        marginTop:15,
    },

    textStyle:{
        margin:10,
    },
    bubbleStyles:{
        maxWidth:Constants.screenWidth - 150,
        alignItems:"center",
        backgroundColor:'chartreuse',
        borderRadius:8,
    },
    triangle:{
        top:10,
        width:0,
        height:0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderBottomWidth: 8,
        borderTopWidth: 8,
        borderLeftColor: 'chartreuse',
        borderRightColor: 'transparent',
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent',
    },
    LeftTriangle:{
        top:10,
        width:0,
        height:0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderBottomWidth: 8,
        borderTopWidth: 8,
        borderLeftColor: 'transparent',
        borderRightColor: 'chartreuse',
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent',
    },
    avatorImage:{
        width:40,
        height:40,
        borderRadius:20,
        borderWidth:1,
        borderColor:'white'
    },
    bottomView:{
        width:Constants.screenWidth,
        height:44,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white',
        paddingLeft:10,
        paddingRight:10
    },
    textInputStyle:{
        borderRadius:5,
        backgroundColor:'#eee',
        width:Constants.screenWidth * 0.8,
        height:35,
    },
    send:{
        marginLeft:5,
        width:50,
        height:35,
        backgroundColor:"purple",
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
    }
})