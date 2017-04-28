/**
 * Created by liushuo on 17/4/28.
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Platform,
    TouchableOpacity,
    ListView
} from 'react-native';
import NavigationBar from '../../component/navBarCommon'
import * as Constants from  '../../constants/constant'

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
                title:"ListView上拉加载下拉刷新"
            }
        ]
    }
    row(data){
        return (
            <TouchableOpacity style={styles.cellStyle} activeOpacity={0.5}>

                <View style={styles.view}>
                    <Text style={styles.textView}>{data.title}</Text>
                    <Image />
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
                <NavigationBar title=""/>
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
        justifyContent:'center'
    },
    textView:{
        marginLeft:15
    }
});

export default HomeContainers;