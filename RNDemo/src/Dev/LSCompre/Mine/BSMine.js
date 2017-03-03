/**
 * Created by liushuo on 17/3/3.
 */
import React , {Component} from 'react';
import {AppRegistry ,  Text , View, StyleSheet, Dimensions} from 'react-native';

export default  class BSMine extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <View style={styles.containerStyle}>
                <Text style={{color:'orange' , fontSize: 30}}>Mine</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})