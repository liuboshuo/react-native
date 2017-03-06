/**
 * Created by liushuo on 17/3/3.
 */
import React , {Component} from 'react';
import {AppRegistry ,  Text , View, StyleSheet, Dimensions, ScrollView} from 'react-native';
import BSCommonMyCenterCell from './BSCommonMyCenterCell'
import BSMiddleView from './BSMiddleView'
import BSTopView from './BSTopView'
export default  class BSMine extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <View style={styles.containerStyle}>
                <ScrollView>
                    <BSTopView/>
                    <View style={styles.outViewStyle}>
                        <BSCommonMyCenterCell
                            leftImageName="collect"
                            leftTitleName="我的订单"
                            rightTitleName="查看全部订单"
                        />
                        <BSMiddleView/>
                    </View>
                    <View style={styles.outViewStyle}>
                        <BSCommonMyCenterCell
                            leftImageName="draft"
                            leftTitleName="我的钱包"
                            rightTitleName="余额:￥100.0"
                        />
                        <BSCommonMyCenterCell
                            leftImageName="like"
                            leftTitleName="抵用券"
                            rightTitleName="2张"
                        />
                    </View>
                    <View style={styles.outViewStyle}>
                        <BSCommonMyCenterCell
                            leftImageName="card"
                            leftTitleName="积分商城"
                            rightTitleName=""
                        />
                    </View>
                    <View style={styles.outViewStyle}>
                        <BSCommonMyCenterCell
                            leftImageName="new_friend"
                            leftTitleName="今日推荐"
                            rightImageName="me_new"
                        />
                    </View>
                    <View style={styles.outViewStyle}>
                        <BSCommonMyCenterCell
                            leftImageName="pay"
                            leftTitleName="我要合作"
                            rightTitleName="..."
                        />
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#e8e8e8'
    },
    outViewStyle:{
        marginTop:20
    }
})