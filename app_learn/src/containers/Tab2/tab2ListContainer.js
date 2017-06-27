/**
 * Created by liushuo on 17/4/19.
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    RefreshControl,
    ListView
} from 'react-native';
import NavigationBar from '../../component/navBarCommon'
import * as Constants from  '../../constants/constant'
import { loadData }  from './../../action/tab2Action'
import {connect} from 'react-redux'
import MyListViewRedux from './../../component/myListViewRedux'
import HttpTool from '../../common/httpTool'
import SheetDetailContainer from './../Tab1/test'


class MsgListContainer extends Component {

    rightAction(){
        const {navigator} = this.props;
        navigator.push({
            component: SheetDetailContainer,
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <NavigationBar title="Plain ListView" rightTitle={"点击"} rightAction={this.rightAction.bind(this)}/>
                <TouchableOpacity>
                    <Text>tab2</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Constants.viewBgColor,
    }
})
function mapStateToProps(state) {
    const {tab2Reducer} = state;
    return tab2Reducer;
}
export default connect(mapStateToProps)(MsgListContainer);