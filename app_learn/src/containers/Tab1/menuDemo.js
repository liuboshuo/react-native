/**
 * Created by liushuo on 17/4/28.
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ListView,
    TouchableOpacity
} from 'react-native';
import NavigationBar from '../../component/navBarCommon'
import back from './../../source/images/icon_back.png'
import * as Constants from  '../../constants/constant'
import SlideMenu from 'react-native-side-menu'

class MenuDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource:new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2})
        }
    }
    componentDidMount(){
        let data = [
            {
                title:"menu0",
                item:"menu1"
            },
            {
                title:"menu1",
                item:"menu2"
            },
            {
                title:"menu2",
                item:"menu3"
            },
            {
                title:"menu3",
                item:"menu4"
            },
            {
                title:"menu4",
                item:"menu5"
            },
            {
                title:"menu5",
                item:"menu6"
            }

        ]
        this.setState({
            dataSource:this.state.dataSource.cloneWithRows(data)
        })
    }
    returnHeader(){
        return (
            <View style={styles.header}>
                <Text>header</Text>
            </View>
        )
    }
    click(item){
        this.props.cellClick(item.item)
    }
    renderRow(data){
        return (
            <TouchableOpacity onPress={()=>this.click(data)} style={styles.cell}>
                <Text>{data.title}</Text>
            </TouchableOpacity>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}
                    enableEmptySections={true}
                    renderHeader={()=>this.returnHeader()}
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1
    },
    header:{
        height:60,
        backgroundColor:"orange",
        justifyContent:'center',
        alignItems:'center'
    },
    cell:{
        height:40,
        justifyContent:'center',
        borderBottomColor:"#eee",
        borderBottomWidth:0.3
    }
});

export default MenuDemo;