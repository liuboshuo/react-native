/**
 * Created by liushuo on 17/2/20.
 */
import React , {Component} from 'react';
import {AppRegistry , Dimensions, ListView , Text , View, StyleSheet,TouchableOpacity, Image} from 'react-native';

let {width} = Dimensions.get("window")

export default class ListView02 extends Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});

        this.state = {
            dataSource:ds.cloneWithRows(this.initData())
        };
    }

    initData(){
        return require('../Json/Wine.json');
    }

    clickRow(model){


    }

    renderRow0(data,sectionID,rowID,highlightRow){
        return (
            <TouchableOpacity onPress={()=>this.clickRow(data)}>

                <View style={ {flexDirection:"row",borderBottomWidth:0.5,borderBottomColor:'#dddddd'}}>

                    <Image source={{uri:data.image}} style={styles.imageIcon} ></Image>

                    <View style={ {flex:  1,width:width - 80 ,marginLeft:10,justifyContent:'center'}}>
                        <Text style={styles.fontTitle}>{data.name}</Text>
                        <Text style={styles.fontContent}>{'￥' + data.money}</Text>

                    </View>

                </View>

            </TouchableOpacity>
        );
    }
    render() {
        return (
            <View style={{flex:1,paddingTop:22}}>
                <ListView dataSource={this.state.dataSource} renderRow={(data,sectionID,rowID,highlightRow)=>{ return this.renderRow0(data,sectionID,rowID,highlightRow)}}>

                </ListView>
            </View>

        )
    }
}

const  styles = StyleSheet.create({
    fontTitle:{
        margin:5,
        color:'blue',
        fontSize:16
    },

    imageIcon:{
        marginLeft:10,
        marginTop:5,
        marginBottom:5,
        width:80,
        height:80
    },
    fontContent:{
        color:'red',
        fontSize:15,
        lineHeight:20,
    },
});
