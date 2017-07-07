/**
 * Created by liushuo on 17/7/6.
 */
import React , {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image
} from 'react-native';

export default class Tab2 extends Component {
    render(){
        const {naavigate} = this.props.navigation;
        return(
            <View style={styles.container}>
                <Text>tab two</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent:"center",
        alignItems:'center'
    },
    iconStyle:{
        width:30,
        height:30
    }
})