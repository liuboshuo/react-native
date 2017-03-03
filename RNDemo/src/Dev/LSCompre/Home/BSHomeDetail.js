/**
 * Created by liushuo on 17/3/3.
 */
import React , {Component} from 'react';
import {AppRegistry , TouchableOpacity, Text , View, StyleSheet, Dimensions} from 'react-native';

export default  class BSHomeDetail extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <View style={styles.containerStyle}>
                <TouchableOpacity onPress={()=>{
                    this.props.navigator.pop()
                }}>
                    <Text style={{color:'orange' , fontSize: 30}}>返回</Text>
                </TouchableOpacity>

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