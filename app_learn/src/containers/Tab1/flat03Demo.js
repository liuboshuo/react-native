/**
 * Created by liushuo on 17/7/18.
 */
/**
 * Created by liushuo on 17/7/18.
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Platform,
    FlatList
} from 'react-native';
import NavigationBar from '../../component/navBarCommon'
import back from './../../source/images/icon_back.png'
import * as Constants from  '../../constants/constant'

class Flat03Demo extends Component {
    constructor(props) {
        super(props);
    }
    renderItem(data){
        console.log(data)
        return (
            <View style={styles.content}>
                <Text style={styles.textStyle}>{"我是"} +{data.index}+ {"key="} + {data.item.key} + {"value= "} + {data.item.value}</Text>
            </View>
        )
    }
    header(){
        return ( <View style={styles.header}>
            <Text style={styles.textStyle}>{"header"}</Text>
        </View>)
    }
    footer(){
        return ( <View style={styles.header}>
            <Text style={styles.textStyle}>{"footer"}</Text>
        </View>)
    }
    render() {
        const {title} = this.props.data;
        const data = [];
        for (let j =0;j<10;j++){
            data.push({key:j,value:'j'})
        }
        return (
            <View style={styles.container}>
                <NavigationBar title={title} leftImage={ back } leftAction={()=>this.props.navigator.pop()}/>
                <FlatList style={styles.flatList}data={data}
                          renderItem={this.renderItem.bind(this)}
                          ListHeaderComponent={this.header}
                          ListFooterComponent={this.footer}
                          horizontal={true}
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
    flatList:{
        flex:1,
    },
    content:{
        height:300,
        width:45,
        justifyContent:'center',
        paddingLeft:15,
        paddingRight:10,
        backgroundColor:"#ffffff",
        marginBottom:1,
    },
    header:{
        height:300,
        width:50,
        justifyContent:'center',
        paddingLeft:15,
        paddingRight:10,
        backgroundColor:"#ff00aa",
        marginBottom:1,
    },
    textStyle:{
        fontSize:16,
        color:"gray"
    }

});
export default Flat03Demo;