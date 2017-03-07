/**
 * Created by liushuo on 17/3/7.
 */
import React , {Component} from 'react';
import {AppRegistry ,  Text , View, StyleSheet, Dimensions, ScrollView, Image, TouchableOpacity, Alert} from 'react-native';

let {width} = Dimensions.get('window');
import BSFirstTopListView from './BSFirstTopListView'
let topMenusDatas = require('./../json/TopMenu.json')
export default  class BSFirstTopView extends Component{
    constructor(props){
        super(props);
        this.state = {
            activePage: 0
        }
    }
    render(){
        return(
            <View style={styles.containerStyle}>
                <ScrollView style={styles.topscrollViewStyle}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            pagingEnabled={true}
                            onMomentumScrollEnd={(e)=>this.onAnimationEnd(e)}
                >
                    {this.renderScrollViewContent()}
                </ScrollView>

                <View style={styles.bottomIndicatorStyle}>
                    {this.renderIndicatorView()}
                </View>

            </View>
        )
    }

    renderScrollViewContent(){
        let dataUI = [];
        for (let i = 0;i<topMenusDatas.data.length;i++){

            dataUI.push(<BSFirstTopListView key={i} data={topMenusDatas.data[i]}  >

            </BSFirstTopListView>)
        }
        return dataUI;
    }

    renderIndicatorView(){
        let dataUI = [];
        let style;
        for (let i = 0;i<topMenusDatas.data.length;i++){
            style = i === this.state.activePage ? {color:'orange'} : {color: 'gray'}
            dataUI.push(<Text style={[style,{fontSize: 20}]} key={i}>&bull;</Text>)
        }
        return dataUI;
    }
    onAnimationEnd(e){
        let current = Math.floor(e.nativeEvent.contentOffset.x / width);
        this.setState({
            activePage:current
        })
    }

}

const styles = StyleSheet.create({
    containerStyle:{
        backgroundColor:'white'
    },
    bottomIndicatorStyle:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    topscrollViewStyle:{
        width:width,
    }
})
