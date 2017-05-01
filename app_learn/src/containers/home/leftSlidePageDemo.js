/**
 * Created by liushuo on 17/4/28.
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Platform,
    TouchableOpacity
} from 'react-native';
import NavigationBar from '../../component/navBarCommon'
import back from './../../source/images/icon_back.png'
import * as Constants from  '../../constants/constant'
import SlideMenu from 'react-native-side-menu'
import MenuDemo from './menuDemo'


class LeftSlidePageDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen:false,
            item:"menu1"
        }
    }

    onItemChange(isOpen){
        this.setState({
            isOpen:isOpen
        })
    }
    cellClick = (item)=>{
        this.setState({
            isOpen:false,
            item:item
        });
    }
    render() {
        return (
            <SlideMenu style={styles.container}
                       isOpen={this.state.isOpen}
                       menu={<MenuDemo style={{flex:1}} cellClick={this.cellClick}/>}
                       onChange={(isOpen)=>this.onItemChange(isOpen)}
            >
                <NavigationBar title={this.state.item} leftImage={back} leftAction={()=>this.props.navigator.pop()}/>

                <View style={styles.container}>
                    <TouchableOpacity style={styles.buttonStyle} onPress={()=>this.setState({isOpen:!this.state.isOpen})}>
                        <Text>显示</Text>
                    </TouchableOpacity>
                </View>

            </SlideMenu>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:Constants.viewBgColor,
        flex:1
    },
    buttonStyle:{
        height:40,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:6,
        margin:10
    }
});

export default LeftSlidePageDemo;