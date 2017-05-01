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

    getSectionHeaderData(dataBlob,sectionId){
        return dataBlob[sectionId];
    }
    getRowData(dataBlob,sectionId,rowId){
        return dataBlob[sectionId+ ':' + rowId];
    }

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
        this.state = {
            dataSource:dataSource,
            isRefreshing:true,
            isLoadingMore:0
        }
        this.setPageNo(1)
        this.setDatas([]);
        this.setIsRefreshing(true);
        this.setSectionIds([]);
    }
    static defaultProps = {
        enableFooter:true,
        withSections:false,
        onEndReachedThreshold:40,
        onFetch(pageNo, callback, options) { callback([]); },
    }

    setPageNo(pageNo) {this.pageNo=pageNo}
    getPageNo() { return this.pageNo}
    setDatas(datas) { this.datas=datas}
    getDatas() {return this.datas}
    setIsRefreshing(isRefreshing) {
        this.isRefreshing = isRefreshing ;
        if (this.state.isRefreshing != isRefreshing){
            this.setState({isRefreshing : isRefreshing})
        }
    }
    setRowIds(rowIds){this.rowIds = rowIds}
    getRowIds(){return this.rowIds}
    setSectionIds(sectionIds){this.sectionIds = sectionIds}
    getSectionIds(){return this.sectionIds}

    getIsRefreshing(){ return this.isRefreshing }

    componentDidMount(){
        this.props.onFetch(this.getPageNo(),this.reloadData.bind(this),{})
    }
    onRefresh(options = {}){
        this.setPageNo(1);
        this.setIsRefreshing(true);
        this.props.onFetch(this.getPageNo(),this.reloadData.bind(this),options)
    }
    onEndReached(options = {}){
        console.log("-------------")
        if (this.props.enableFooter) {
            //如果加载全部 | 正在刷新 | 正在加载 return
            if (this.state.isLoadingMore === 2 || this.getIsRefreshing() || this.state.isLoadingMore === 1) {
                return;
            }
            //修改footer的状态为正在加载中
            this.setState({isLoadingMore: 1})
            this.props.onFetch(this.getPageNo(), this.reloadData.bind(this), options)
        }
    }
    reloadData(datas = [],options = {}){
        if (!this.props.withSections){
            this.reloadPlainListView(datas,options,false);
        }else{
            let value = options['key'];
            if (value != null) {
                let pageNo = 0;
                if(this.getIsRefreshing()){
                    this.setSectionIds([]);
                    this.setRowIds([]);
                    this.setDatas([]);
                    pageNo = 0;
                }else {
                    pageNo = this.getSectionIds().length;
                }

                for (let i = 0;i<datas.length;i++){
                    let index = i + pageNo;
                    this.getSectionIds()[index] = index;
                    this.getDatas()[index] = datas[i];
                    let tempArray = [];
                    for (let j = 0; j<datas[i][value].length;j++){
                        tempArray.push(j);
                        this.getDatas()[index +":"+j] = datas[i][value][j];
                    }
                    this.getRowIds().push(tempArray);
                }
                //刷新状态机
                this.setState({
                    dataSource:this.state.dataSource.cloneWithRowsAndSections(this.getDatas(),this.getSectionIds(),this.getRowIds()),
                })
                this.reloadPlainListView(datas,options,true);

            }else {
                if (datas.length > 0){
                    let data = datas[0];
                    if (typeof data === 'object'){
                        console.log("分组传一个key");
                    }else if(typeof data == 'array'){
                        // to do list
                    }
                }
                this.reloadPlainListView(datas,options,true);
            }
        }
    }
    reloadPlainListView(datas=[],options,withSections){
        //刷新状态
        if (this.getIsRefreshing()){
            //修改pageNo
            let pageNo = this.getPageNo() + 1;
            this.setPageNo(pageNo);
            this.setIsRefreshing(false);
            this.reloadFooter(options);
            if (datas != null || datas != undefined) {
                //刷新状态机
                if (!withSections) {
                    //复制数据
                    this.setDatas(datas)
                    this.setState({
                        dataSource: this.state.dataSource.cloneWithRows(this.getDatas()),
                    })
                } else {
                    //分组的
                }
            }else{
                // 处理null
                this.setState({isLoadingMore:-1})
            }
        }else {
            // 加载

            let pageNo = this.getPageNo() + 1;
            this.setPageNo(pageNo);
            this.reloadFooter(options);

            if (datas != null || datas != undefined){
                //刷新状态机
                if (!withSections) {
                    //复制数据
                    this.setDatas(this.getDatas().concat(datas));
                    this.setState({
                        dataSource: this.state.dataSource.cloneWithRows(this.getDatas()),
                    })
                } else {
                    //分组
                }
            }else {
                //null
            }
        }
    }
    reloadFooter(options){
        let isLoadingMore = options["isLoadingMore"];
        if (isLoadingMore != null && isLoadingMore == 2){
            this.setState({isLoadingMore:2})
        }else {
            this.setState({isLoadingMore:0})
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
        return(<ListView
            style={this.props.style == null ? this.props.style : null}
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