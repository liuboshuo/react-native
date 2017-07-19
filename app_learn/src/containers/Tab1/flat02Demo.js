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
    FlatList,
    TouchableOpacity
} from 'react-native';
import NavigationBar from '../../component/navBarCommon'
import back from './../../source/images/icon_back.png'
import * as Constants from  '../../constants/constant'

class Flat02Demo extends Component {
    constructor(props) {
        super(props);
    }
    renderItem(data){
        console.log(data)
        return (
            <TouchableOpacity style={styles.content} onPress={()=>{console.log("..."+data.index)}}>
                <Text style={styles.textStyle}>{"我是"} +{data.index}+ {"key="} + {data.item.key} + {"value= "} + {data.item.value}</Text>
            </TouchableOpacity>
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
    separator(){
        return ( <View style={styles.separator}>

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
                          ItemSeparatorComponent={this.separator}
                          numColumns={3}
                          columnWrapperStyle={{backgroundColor:"red"}}
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
        width:Constants.screenWidth / 3,
        height:Constants.screenWidth / 3,
        flexDirection:'row',
        alignItems:"center",
        paddingLeft:15,
        paddingRight:10,
        backgroundColor:"#ffffff",
        borderWidth:1,
        borderColor:"orange"
    },
    separator:{
        height:1,
        backgroundColor:"#eee",
    },
    header:{
        height:30,
        flexDirection:'row',
        alignItems:"center",
        paddingLeft:15,
        paddingRight:10,
        backgroundColor:"#eee",
        marginBottom:1,
    },
    textStyle:{
        fontSize:16,
        color:"gray"
    }

});
export default Flat02Demo;