/**
 * Created by liushuo on 17/2/20.
 */
import React , {Component} from 'react';
import {AppRegistry , Dimensions, ListView , Text , View, StyleSheet,TouchableOpacity, Image} from 'react-native';

let screenWidth = Dimensions.get("window").width
let width = 100;
let cols = 3;
let vMargin = (screenWidth - cols  * width) / (cols + 1);
let hMarin = 25;
export default class ListView03 extends Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
        this.state = {
            dataSource:ds.cloneWithRows(this.initData())
        };
    }

    initData(){
        return require('../Json/shareData.json').data;
    }

    clickRow(model){


    }

    renderRow0(data,sectionID,rowID,highlightRow){
        // console.log(data);
        return (
            <TouchableOpacity onPress={()=>this.clickRow(data)}>

                <View style={ { width:width, height:width,marginLeft:vMargin,marginTop:hMarin}}>
                    <Image source={{uri:data.icon}} style={styles.imageIcon} ></Image>
                    <Text style={styles.fontTitle}>{data.title}</Text>
                </View>

            </TouchableOpacity>
        );
    }
    render() {
        return (
            <View style={{flex:1}}>
                <ListView contentContainerStyle={styles.listView} dataSource={this.state.dataSource} renderRow={(data,sectionID,rowID,highlightRow)=>{ return this.renderRow0(data,sectionID,rowID,highlightRow)}}>

                </ListView>
            </View>
        )
    }
}

const  styles = StyleSheet.create({
    fontTitle:{
        marginTop:5,
        fontSize:16
    },
    listView:{
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems:'center'
    },
    imageIcon:{
        width:80,
        height:80
    },
});
