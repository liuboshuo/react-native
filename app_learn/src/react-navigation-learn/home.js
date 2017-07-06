import React , {Component} from 'react';
import {AppRegistry ,  Text , View, StyleSheet, TouchableOpacity} from 'react-native';
import Chat from './home'
import {StackNavigator} from 'react-navigation'
export default class HomeScreen extends Component {
    static navigationOptions = {
        title:"首页"
    }
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>

                <TouchableOpacity onPress={()=>navigate('homeDetail')}>
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