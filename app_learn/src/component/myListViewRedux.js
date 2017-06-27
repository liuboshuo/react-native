/**
 * Created by liushuo on 17/4/24.
 */

import React, { Component } from 'react';

import {
    ListView,
    RefreshControl,
    StyleSheet,
    Text,
    View,
} from 'react-native';

class MyListViewRedux extends Component {

    constructor(props){
        super(props);
        let dataSource = null;
        if (this.props.withSections){
            dataSource = new ListView.DataSource({
                getSectionHeaderData:this.getSectionHeaderData,
                getRowData:this.getRowData,
                rowHasChanged:(r1,r2) => r1 !== r2,
                sectionHeaderHasChanged: (s1, s2) => s1 !== s2
            });
        }else{
            dataSource = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2})
        }
    }
    static defaultProps = {
        enableFooter:true,
        withSections:false,
        onEndReachedThreshold:40,
        onFetch(pageNo, callback, options) { callback([]); },
    }

    componentDidMount(){
        this.props.onFetch(1,this.reloadData.bind(this),{})
    }
    onRefresh(options = {}){
        this.props.onFetch(this.getPageNo(),this.reloadData.bind(this),options)
    }
    onEndReached(options = {}){
        console.log("-------------")
    }
    reloadData(datas = [],options = {}){

    }
    renderFooter() {
        if (this.props.enableFooter) {
            let loadMoreText = '';
            {
                if (this.state.isLoadingMore === 0) {
                    loadMoreText = "上拉加载更多...";
                } else if (this.state.isLoadingMore === 1) {
                    loadMoreText = "正在加载中...";
                } else if (this.state.isLoadingMore === 2) {
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
    }
    render(){
        const {data,isRefresh,isLoadingMore} = this.props;
        return(<ListView
            style={this.props.style == null ? this.props.style : null}
            dataSource={this.state.dataSource}
            renderRow={this.props.renderRow.bind(this)}
            renderSectionHeader={this.props.withSections == false ? null : this.props.renderSectionHeader.bind(this)}
            enableEmptySections={true}
            //renderFooter={this.renderFooter.bind(this)}
            onEndReachedThreshold={this.props.onEndReachedThreshold}
            onEndReached={this.onEndReached.bind(this)}
            refreshControl= {
                <RefreshControl
                    onRefresh={this.onRefresh.bind(this)}
                    refreshing={this.state.isRefreshing}
                />}
        />);
    }
}
const styles  = StyleSheet.create({
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
})
function mapStateToProps(state) {
    const {tab2Reducer} = state;
    return tab2Reducer;
}
export default MyListViewRedux;