/**
 * Created by liushuo on 17/3/8.
 */
import React , {Component} from 'react';
import {AppRegistry ,  Text , View, StyleSheet, Dimensions,} from 'react-native';
import BSFirstCommonCell from './BSFirstCommonCell'
let homeBottomBmmDatas = require('./../json/XMG_Home_D4.json')
let homeTopMiddleModel = require('./../json/HomeTopMiddle.json')
let {width} = Dimensions.get('window');
export default  class BSFirstBottomView extends Component{
    constructor(props){
        super(props);

    }


    render(){
        let model = homeTopMiddleModel.data[0];
        return(

            <View style={styles.containerStyle}>
                <BSFirstCommonCell
                    title = {model.title}
                    subTitle = {model.subTitle}
                    rightImage = {model.image}
                    width = {width}
                />
                <View style={styles.bottomStyle}>
                    {this.renderContentView()}
                </View>
            </View>

        )
    }
    renderContentView(){

        let datas = homeBottomBmmDatas.data;
        let dataUIs = [];
        for (let i = 0; i<datas.length; i++){
            let model = datas[i];

            dataUIs.push(<BSFirstCommonCell
                key={i}
                title = {model.maintitle}
                subTitle = {model.deputytitle}
                titleColor = {model.typeface_color}
                rightImage = {model.imageurl}
                width={(width - 1) / 2}
                callBackClickCall = {this.props.firstCommonCallBack}
            ></BSFirstCommonCell>)
            if (i % 2 == 0) {

                dataUIs.push(<View
                    key={i + datas.length}
                    style={{width:1,height:59,backgroundColor:'#e8e8e8'}}
                ></View>)

            }
        }
        return dataUIs
    }
}

const styles = StyleSheet.create({
    containerStyle:{
        marginTop:15,
    },
    bottomStyle:{
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems:'center',
    }
})