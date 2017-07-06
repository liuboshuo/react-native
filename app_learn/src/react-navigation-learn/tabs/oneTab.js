/**
 * Created by liushuo on 17/7/6.
 */
import React , {Component} from 'react';
import {Text , View, StyleSheet, TouchableOpacity} from 'react-native';
export default class Tab1 extends Component {
    static navigationOptions = {
        title:"tab one"
    }
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>

                <TouchableOpacity onPress={()=>navigate('homeDetail',{user:"我是参数"})}>
                    <Text>tab one</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"purple",
        flexDirection:'row',
        justifyContent:"center",
        alignItems:'center'
    }
})