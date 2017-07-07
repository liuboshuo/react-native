/**
 * Created by liushuo on 17/5/2.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ActivityIndicator,
    TouchableOpacity,
    Alert,
    ListView
} from 'react-native';
import NavigationBar from '../../component/navBarCommon'
import * as Constants from './../../constants/constant'
import back from './../../source/images/icon_back.png'
import Swipeout from 'react-native-swipeout'
export default class SwipeoutDemo extends Component {

    constructor(props){
        super(props);
        this.state = {
            close:true,
           dataSource:new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2})
        }
    }

    cell(cellData){
        return (
            <Swipeout autoClose={true} right={[{text:'增加',backgroundColor:'red',type:'primary',underlayColor:'gray',onPress:()=>{Alert.alert(cellData)}}]} >
                <TouchableOpacity style={styles.cellStyle}>
                    <Text style={styles.textStyle}>{cellData}</Text>
                </TouchableOpacity>
            </Swipeout>
        )
    }
    componentDidMount(){
        this.setState(
            {
                dataSource:this.state.dataSource.cloneWithRows(['row1','row2','row3','row4','row5','row6','row7','row8','row9','row10'])
            }
        )
    }


    render() {
        return (
            <View style={styles.container}>
                <NavigationBar title="侧滑" leftImage={back} leftAction={()=>this.props.navigator.pop()}/>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(cellData)=>this.cell(cellData)}
                    enableEmptySections={false}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Constants.viewBgColor
    },
    cellStyle:{
        justifyContent:'center',
        height:40,
        backgroundColor:'white',
        borderBottomColor:'#eee',
        borderBottomWidth:0.5
    },
    textStyle:{
        marginLeft:15,
        fontSize:20,
    }
})