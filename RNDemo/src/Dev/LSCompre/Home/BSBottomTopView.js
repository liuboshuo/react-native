/**
 * Created by liushuo on 17/3/8.
 */
import React , {Component} from 'react';
import {AppRegistry ,  Text , View, StyleSheet, Dimensions, Alert, ScrollView, Image, TouchableOpacity} from 'react-native';
import BSBottomTopCommonCell from './BSBottomTopCommonCell'

let Home_D5 = require('./../json/XMG_Home_D5.json')
let {width} = Dimensions.get('window');
export default  class BSBottomTopView extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <View style={styles.containerStyle}>
               <BSBottomTopCommonCell
                    leftIcon="gwzx"
                    leftTitle="购物中心"
                    rightTitle={Home_D5.tips}
               />
                <ScrollView style={styles.scrollViewStyle}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                >
                    {this.renderScrollViewContent()}
                </ScrollView>
            </View>
        )
    }
    renderScrollViewContent(){
        let items = [];
        let datas = Home_D5.data;
        for (var i = 0; i<datas.length; i++){
            let data = datas[i];
            items.push(<TouchableOpacity key={i} onPress={()=>{
                if (this.props.popToShopDetail == null){
                    return;
                }
                this.props.popToShopDetail(data.detailurl)
            }}>
                    <View  style={styles.shopView}>
                        <Image source={{uri:data.img}} style={styles.shopImage}/>
                        <Text style={styles.shopSaleText}>
                            {data.showtext.text}
                        </Text>
                        <Text style={styles.shopNameText}>
                            {data.name}
                        </Text>
                    </View>
            </TouchableOpacity>)
        }
        return items;
    }
}

const styles = StyleSheet.create({
    containerStyle:{
        marginTop:15,
    },
    scrollViewStyle:{
        flexDirection:'row',
        backgroundColor:'white'
    },
    shopView:{
        margin:10,
        alignItems:'center'
    },
    shopImage:{
        width:120,
        height:100,
        borderRadius:5
    },
    shopSaleText:{
        position:'absolute',
        left:0,
        bottom:30,
        backgroundColor:'orange',
        fontSize:13,
        color:'yellow',
    },
    shopNameText:{
        fontSize:15,
        marginTop:2,
        color:'gray',
    }
})