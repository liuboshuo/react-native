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


class LSHome extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <View style={styles.outView}>
                <Text style={{color:'orange',fontSize: 30}}>1</Text>
            </View>
        )
    }
}

export default LSHome;

const styles = StyleSheet.create({
    outView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})