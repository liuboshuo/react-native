/**
 * Created by liushuo on 17/3/7.
 */
import React , {Component} from 'react';
import {AppRegistry ,  Text , View, StyleSheet, Dimensions, ScrollView, Image, TouchableOpacity, Alert, ListView} from 'react-native';

let screenWidth = Dimensions.get('window').width;


let cols = 5;
let vMargin = 10;
let hMarin = 5;
let width = (screenWidth - vMargin * (cols + 1))/ cols;

export default  class BSFirstTopListView extends Component{

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
        this.state = {
            dataSource:ds.cloneWithRows(this.props.data)
        };
    }

    clickRow(){

        Alert.alert('点击')

    }

    renderRow0(data,sectionID,rowID,highlightRow){
        console.log(data);
        return (
            <TouchableOpacity onPress={()=>this.clickRow()}>

                <View style={styles.listCellViewStyle}>
                    <Image source={{uri:data.image}} style={styles.imageIcon} ></Image>
                    <Text style={styles.fontTitle}>{data.title}</Text>
                </View>

            </TouchableOpacity>
        );
    }
    render() {
        return (
                <ListView contentContainerStyle={styles.listView} dataSource={this.state.dataSource} renderRow={(data,sectionID,rowID,highlightRow)=>{ return this.renderRow0(data,sectionID,rowID,highlightRow)}} scrollEnabled={false}>

                </ListView>
        )
    }

}

const styles = StyleSheet.create({

    fontTitle:{
        fontSize:10,
    },
    listView:{
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems:'center',
        width:screenWidth,
    },
    listCellViewStyle:{
        width:width,
        height:width + 20,
        marginLeft:vMargin,
        marginTop:hMarin,
        alignItems:'center',
    },
    imageIcon:{
        width:width,
        height:width
    },
})
