/**
 * Created by liushuo on 17/2/20.
 */
import React , {Component} from 'react';
import {AppRegistry , ListView , Text , View, StyleSheet,TouchableOpacity, Image} from 'react-native';

export default class ListView01 extends Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});

        this.state = {
            dataSource:ds.cloneWithRows(this.initData())
        };
    }

    initData(){
        let array = [];
        for (let i = 0 ; i < 20 ; i++){
            let object = {index:i,title:"测试"+ i ,content:  (i % 2 == 0) ?  "时看风景十几人我ijewr时看风景十几人我ijewr" : "上搭建费是带你飞了开始的减肥我废物污染沃尔沃尔上搭建费是带你飞了开始的减肥我废物污染沃尔沃尔",imageName: (i % 2 == 0) ? "Cromax" : "Standox"};
            array.push(object);
        }
        return array;
    }

    clickRow(model){

        console.log(model);

    }

    renderRow0(model){
        console.log(model);
        return (
            <TouchableOpacity style={styles.button} onPress={()=>this.clickRow(model)}>

                <View style={ {flex: 1, flexDirection:"row"}}>


                    <Image source={{uri:model.imageName}} style={styles.imageIcon} ></Image>

                    <View style={ {flex:  1}}>

                        <Text style={styles.fontTitle}>{model.title}</Text>
                        <Text style={styles.fontContent}>{model.content}</Text>

                    </View>

                    <View style={ [styles.arrow]}>
                        <Image source={require('../DemoImages/go.png')} style={{width:10,height:10} }   ></Image>
                    </View>


                </View>
                <View style={{backgroundColor:'gray', height:0.6}}></View>

            </TouchableOpacity>
        );
    }
    render() {
        return (
            <View style={{flex:1,paddingTop:22}}>
                <ListView dataSource={this.state.dataSource} renderRow={(data)=>{ return this.renderRow0(data)}}>

                </ListView>
            </View>

        )
    }
}

const  styles = StyleSheet.create({
    button : {
        paddingTop: 5,
        paddingLeft: 15
    },

    // imageIcon:{
    //     width:100,
    // },
    fontTitle:{
        margin:5,
        color:'#333',
        fontSize:16,
    },

    imageIcon:{
        marginRight:10,
        width:100,
        height:80
    },
    fontContent:{
        color:'#aaa',
        fontSize:14,
        lineHeight:20,
        marginBottom:5
    },
    arrow:{
        justifyContent: 'center' ,
        alignItems:'center',
        marginRight:10
    }
});
