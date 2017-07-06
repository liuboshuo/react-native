import React , {Component} from 'react';
import {Text , View, StyleSheet, TouchableOpacity} from 'react-native';
export default class HomeScreen extends Component {
    static navigationOptions = {
        title:"首页"
    }
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>

                <TouchableOpacity onPress={()=>navigate('homeDetail',{user:"我是参数"})}>
                    <Text> react_navigation</Text>
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