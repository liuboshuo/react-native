/**
 * Created by liushuo on 17/4/19.
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Platform,
    TouchableOpacity,
    ListView,
    RefreshControl
} from 'react-native';
import NavigationBar from '../../component/navBarCommon'
import back from './../../source/images/icon_back.png'
import { loadData,reset }  from './../../action/tab2Action'
import * as Constants from  '../../constants/constant'
import {connect} from 'react-redux'

class SheetDetailContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource : new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2})
        }
    }
    componentDidMount(){
        const {dispatch} = this.props;
        dispatch(loadData());
    }
    renderRow(data){
        const {imagePath,productName,companyName} = data;
        return (
            <TouchableOpacity>
                <View style={styles.viewStyle}>
                    <Image source={{uri: "https:" + imagePath}} style={styles.cellImage}/>
                    <View style={styles.textView}>
                        <Text>
                            {productName}
                        </Text>
                        <Text>

                            {companyName}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
    onRefresh() {
        const {dispatch} = this.props;
        dispatch(loadData());
    }
    onEndReached(){
        const {dispatch,pageNo,isRefreshing,isLoadingMore} = this.props;
        if (isRefreshing || isLoadingMore == 2 || isLoadingMore == 1){
            return
        }
        dispatch(loadData(pageNo));
    }
    rightAction(){

    }
    renderFooter() {
        const {isLoadingMore} = this.props;
        let loadMoreText = '';
        {
            if (isLoadingMore === 0) {
                loadMoreText = "上拉加载更多...";
            } else if (isLoadingMore === 1) {
                loadMoreText = "正在加载中...";
            } else if (isLoadingMore === 2) {
                loadMoreText = "已全部加载";
            }else {
                loadMoreText = "";
            }
        }
        return (
            <View style={styles.footer}>
                <Text style={styles.footerTitle}>{loadMoreText}</Text>
            </View>)
    }
    componentWillUnmount(){
        const {dispatch} = this.props;
        dispatch(reset());
    }
    render() {
        const {datas,isRefreshing} = this.props;
        return (
            <View style={styles.container}>
                <NavigationBar title="Plain ListView" leftImage={ back } leftAction={()=>this.props.navigator.pop()} rightTitle={"点击"} rightAction={this.rightAction.bind(this)}/>
                <ListView
                    dataSource={this.state.dataSource.cloneWithRows(datas)}
                    renderRow={(data)=>this.renderRow(data)}
                    onEndReached={this.onEndReached.bind(this)}
                    renderFooter={this.renderFooter.bind(this)}
                    enableEmptySections={true}
                    refreshControl= {
                        <RefreshControl
                            onRefresh={this.onRefresh.bind(this)}
                            refreshing={isRefreshing}
                        />}
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Constants.viewBgColor,
    },
    viewStyle:{
        backgroundColor:'white',
        borderBottomWidth:0.3,
        borderBottomColor:"#eee",
        flexDirection:"row",
        paddingLeft:10,
        paddingRight:10,
        paddingTop:5,
        paddingBottom:5
    },
    textView:{
        width:Constants.screenWidth - 80,        // marginLeft:3
    },
    cellImage:{
        width:60,
        height:50,
        marginRight:10
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
    },
    footerTitle: {
        marginLeft: 10,
        fontSize: 15,
        color: 'gray'
    }
});

function mapStateToProps(state) {
    const {tab2Reducer} = state;
    return tab2Reducer;
}
export default connect(mapStateToProps)(SheetDetailContainer);
