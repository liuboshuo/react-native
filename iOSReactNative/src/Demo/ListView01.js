/**
 * Created by liushuo on 17/2/20.
 */
import React , {Component} from 'react';
import {AppRegistry , ListView , Text , View, StyleSheet,TouchableOpacity,Alert,Image} from 'react-native';

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
        for (let i = 0 ; i < 10 ; i++){
            let object = {index:i+1,title:"测试"+(i+1) ,content:"上搭建费是带你飞了开始的减肥我废物污染沃尔沃尔上搭建费是带你飞了开始的减肥我废物污染沃尔沃尔",imageName: i / 2 == 0 ? "../../img/Cromax.png" : "../../img/Standox.png"};
            array.push(object);
        }
        return array;
    }

    clickRow(model){

        Alert.alert('标题',model.content,[{text:'取消',onPress:()=>{}},
            {text:'确定',onPress:()=>{}}
            ]);

    }

    renderRow0(model){
        return (
            <TouchableOpacity style={styles.button} onPress={()=>this.clickRow(model)}>

                <View style={ {flex: 1, flexDirection:"row"}}>

                    <Image source={require("../../img/Cromax.png")}></Image>

                    <View style={ {flex:  1}}>

                        <Text style={styles.fontTitle}>{model.title}</Text>
                        <Text style={styles.fontContent}>{model.content}</Text>

                    </View>

                    <View style={ [styles.arrow]}>
                        <Image source={require('../../img/go.png')} style={{width:10,height:10} }   ></Image>
                    </View>


                </View>
                <View style={{backgroundColor:'gray', height:0.6}}></View>

            </TouchableOpacity>
        );
    }
    render() {
        return (
            <View style={{flex:1,paddingTop:60}}>
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
