/**
 * Created by ls-mac on 2017/3/1.
 */
/**
 * Created by ls-mac on 2017/3/1.
 */
/**
 * Created by ls-mac on 2017/3/1.
 */
/**
 * Created by liushuo on 17/2/20.
 */
import React , {Component} from 'react';
import {AppRegistry , TabBarIOS,  Text , View, StyleSheet, Dimensions} from 'react-native';

let screeenWidth = Dimensions.get("window").width;


class LSMine extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <View style={styles.outView}>
                <Text style={{color:'orange' , fontSize: 30}}>4</Text>
            </View>
        )
    }
}

export default LSMine;

const styles = StyleSheet.create({
    outView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})