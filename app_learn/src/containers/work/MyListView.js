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

export default class MyListView extends Component {

    getSectionData(dataBlob,sectionId){
        return dataBlob[sectionId];
    }
    getRowData(dataBlob,sectionId,rowId){
        return dataBlob[sectionId][rowId];;
    }

    constructor(props){
        super(props);
        let dataSource = null;
        if (this.props.withSections){
            dataSource = new ListView.DataSource({
                getSectionData:this.getSectionData,
                getRowData:this.getRowData,
                rowHasChanged:(r1,r2) => r1 !== r2,
                sectionHeaderHasChanged: (s1, s2) => s1 !== s2
            });
        }else{
            dataSource = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2})
        }
        this.state = {
            dataSource:dataSource,
            datas:[],
            pageNo:1,
            isRefreshing:true,
            isLoadingMore:0
        }
    }
    static defaultProps = {
        enableFooter:true,
        withSections:false,
        onEndReachedThreshold:40,
        onFetch(pageNo, callback, options) { callback([]); },
    }

    setPageNo(pageNo) {this.setState({pageNo:pageNo})}
    getPageNo() { return this.state.pageNo}
    setDatas(datas) { this.setState({datas:datas})}
    getDatas() {return this.state.datas}
    setIsRefreshing(isRefreshing) {this.setState({isRefreshing:isRefreshing})}

    componentDidMount(){
        this.props.onFetch(this.getPageNo(),this.reloadData.bind(this),{})
    }
    onRefresh(options = {}){
        this.setPageNo(1);
        this.setIsRefreshing(true);
        this.props.onFetch(1,this.reloadData.bind(this),options)
    }
    onEndReached(options = {}){
        console.log("-------------")
        if (this.props.enableFooter) {
            //如果加载全部 | 正在刷新 | 正在加载 return
            if (this.state.isLoadingMore === 2 || this.state.isRefreshing || this.state.isLoadingMore === 1) {
                return;
            }
            //修改footer的状态为正在加载中
            this.setState({isLoadingMore: 1})
            this.props.onFetch(this.getPageNo(), this.reloadData.bind(this), options)
        }
    }
    reloadData(datas = [],options = {}){
        if (!this.props.withSections){
            //刷新状态
            if (this.state.isRefreshing){
                if (datas == null){
                    this.setIsRefreshing(false);
                }else {
                    //修改pageNo
                    let pageNo = this.getPageNo() + 1;
                    this.setPageNo(pageNo);
                    //复制数据
                    this.setDatas(datas)

                    //刷新状态机
                    this.setState({
                        dataSource:this.state.dataSource.cloneWithRows(this.state.datas),
                        isRefreshing:false
                    })
                }
            }else {
                // 加载
                if (datas == null){
                    this.setState({isLoadingMore:0})
                }else {
                    //修改pageNo
                    let pageNo = this.getPageNo() + 1;
                    this.setPageNo(pageNo);
                    //复制数据
                    this.setDatas(this.getDatas().concat(datas));
                    this.setState({
                        dataSource:this.state.dataSource.cloneWithRows(this.state.datas),
                    })
                }
                let isLoadingMore = options["isLoadingMore"];
                if (isLoadingMore != null && isLoadingMore == 2){
                    this.setState({isLoadingMore:2})
                }else {
                    this.setState({isLoadingMore:0})
                }
            }
        }else{
            //刷新状态
            if (this.state.isRefreshing){
                if (datas == null){
                    this.setIsRefreshing(false);
                }else {
                    //修改pageNo
                    let pageNo = this.getPageNo() + 1;
                    this.setPageNo(pageNo);
                    //复制数据
                    this.setDatas(datas)

                    //刷新状态机
                    this.setState({
                        dataSource:this.state.dataSource.cloneWithRowsAndSections(this.state.datas),
                        isRefreshing:false
                    })
                }
            }else {
                // 加载
                if (datas == null){
                    this.setState({isLoadingMore:0})
                }else {
                    //修改pageNo
                    let pageNo = this.getPageNo() + 1;
                    this.setPageNo(pageNo);
                    //复制数据
                    this.setDatas(this.getDatas().concat(datas));
                    this.setState({
                        dataSource:this.state.dataSource.cloneWithRowsAndSections(this.state.datas),
                    })
                }
                let isLoadingMore = options["isLoadingMore"];
                if (isLoadingMore != null && isLoadingMore == 2){
                    this.setState({isLoadingMore:2})
                }else {
                    this.setState({isLoadingMore:0})
                }
            }
        }

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
                }
            }
            return (
                <View style={styles.footer}>
                    <Text style={styles.footerTitle}>{loadMoreText}</Text>
                </View>)
        }
    }
    render(){
        return(<ListView
            dataSource={this.state.dataSource}
            renderRow={this.props.renderRow.bind(this)}
            renderSectionHeader={this.props.withSections == false ? null : this.props.renderSectionHeader.bind(this)}
            enableEmptySections={true}
            renderFooter={this.renderFooter.bind(this)}
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