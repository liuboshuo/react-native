/**
 * Created by ls-mac on 2017/3/1.
 */
import React , {Component} from 'react';
import {AppRegistry , TabBarIOS,  Text , View, StyleSheet, Dimensions} from 'react-native';

export default class LSMessage extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <View style={styles.outView}>
                <Text style={{fontSize: 30,color:'orange'}}>3</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    outView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})