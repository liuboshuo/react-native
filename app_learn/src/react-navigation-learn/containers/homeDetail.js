/**
 * Created by liushuo on 17/7/6.
 */
import React , {Component} from 'react';
import Button from './../../component/button'
import {Text , View, StyleSheet,TouchableOpacity} from 'react-native';
export default class HomeDetailScreen extends Component {

    static navigationOptions = (navigation)=>{

       return(
           {
               title:"我是标题",
               headerRight:<Button text="测试" style={styles.navigationRightButton} textStyle={styles.textStyle}/>
           }
       )
    }
    render(){
        const {naavigate} = this.props.navigation;
        const {user} = this.props.navigation.state.params;
        return(
            <View style={styles.container}>
                <Text>{user}</Text>
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
    },
    navigationRightButton:{
        backgroundColor:"rgba(0,0,255,0.66)",
        marginRight:20,

    },
    textStyle:{
        fontSize:17,
        color:"#fff",
        padding:5
    }
})