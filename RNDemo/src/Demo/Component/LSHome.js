/**
 * Created by ls-mac on 2017/3/1.
 */

import React , {Component} from 'react';
import {AppRegistry , ListView, Image, TabBarIOS,  Text , View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import LSNewDetail from './LSNewsDetail'
import LSScrollImage from './LSScrollImage'

let screeenWidth = Dimensions.get("window").width;


class LSHome extends Component{

    constructor(props) {
        super(props);
        this.state = {
            dataSource:new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2}),
            ads:[]
        };
    }

    static defaultProps={
        load_url:"http://c.m.163.com/nc/article/headline/T1348647853363/0-20.html?from=toutiao&fn=2&passport=&devId=nTM86EPlcxZu09VdpTEh6aR3%2B%2FQX6x8vHBD3ne3k5bbgOrg%2FIP5DcguSDmtYyWbs&size=20&version=8.1&spever=false&net=wifi&lat=5OtqEKiivwW4K%2BGMt6DBdA%3D%3D&lon=jKlRVyYkSNti2wwsjGQHrw%3D%3D&ts=1463384311&sign=TtD7IZllDljVzBs2E4sa9fQyKTKF021w2EUC6qx1gEN48ErR02zJ6%2FKXOnxX046I&encryption=1&canal=appstore"
    }

    componentDidMount() {
        fetch(this.props.load_url)
            .then((response)=>{ return response.json()})
            .then((responseData)=>{
                this.solveNewData(responseData);
            })
            .catch((error)=>{
                if (error != null){
                    let responseData = require('../../Json/LocalData.json')
                    this.solveNewData(responseData);
                }
            })
    }

    solveNewData(responseData){
        //解析数据
        let ads = [];
        let newData = [];
        for (let j = 0 ; j<responseData['T1348647853363'].length;j++){
            let model = responseData['T1348647853363'][j];
            if (model['hasHead'] == 0){
                ads = model['ads'];
            }else {
                newData.push(model);
            }
        }
        this.setState({dataSource:this.state.dataSource.cloneWithRows(newData)});
        this.setState({
            ads:ads
        })
    }

    renderRow(data){
        return(
            <TouchableOpacity activeOpacity={0.5} onPress={()=>this.pressList(data)}>
                <View style={styles.cellView}>
                    <Image source={{uri:data.imgsrc}} style={styles.icon}>

                    </Image>
                    <View style={styles.rightView}>
                        <Text style={styles.title}>
                            {data.title}
                        </Text>
                        <Text style={styles.content}>
                            {data.digest}
                        </Text>
                        <Text style={styles.replyCountgest}>
                            {data.replyCount +"跟贴" }
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    renderHeader(){
        if (this.state.ads.length<=0) return
        return(
            <LSScrollImage data={this.state.ads}></LSScrollImage>
            )

    }
    pressList(data){
        this.props.navigator.push({
            component:LSNewDetail,
            title:'看是否能可是大部分开始地方看你说的放开你开始带你飞可能是对方你多少分水电费你说地方',
            passProps:{data}
        })
    }
    render(){
        return(
            <View style={styles.outView}>
                <ListView dataSource={this.state.dataSource}
                    renderRow={(data)=>this.renderRow(data)}
                    renderHeader={()=>this.renderHeader()}
                >
                </ListView>
            </View>
        )
    }
}

export default LSHome;

const styles = StyleSheet.create({
    outView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    cellView:{
        flexDirection:'row',
        paddingLeft:10,
        paddingTop:10,
        paddingBottom:10,
        paddingRight:5,
        borderBottomWidth:0.5,
        borderBottomColor:'#e8e8e8'
    },
    icon:{
        width:100,
        height:80
    },
    rightView:{
        marginLeft:10,
        width:screeenWidth - 135
    },
    title:
        {
            fontSize:15
        },
    content:{
        marginTop:5,
        color:"gray",
        fontSize:14
    },
    replyCountgest:{
        borderRadius:5,
        borderWidth:0.5,
        borderBottomColor:'gray',
        padding:6,
        color:'gray',
        alignSelf:'flex-end'
    }


})