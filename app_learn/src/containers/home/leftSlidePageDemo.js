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
                <NavigationBar title={this.state.item} leftTitle={"显示"} leftAction={()=>this.setState({isOpen:!this.state.isOpen})}/>

                <View style={styles.container}/>

            </SlideMenu>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:Constants.viewBgColor,
        flex:1
    }
});

export default LeftSlidePageDemo;