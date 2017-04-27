/**
 * Created by liushuo on 17/4/19.
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ListView,
    RefreshControl,
    Dimensions,
    Platform,
    TouchableOpacity
} from 'react-native';
import NavigationBar from './../../common/NavBarCommon'
import SheetDetailContainer from './sheetDetailContainer'
import HttpTool from './../../common/HttpTool'
import * as Constants from  './../../common/constant'
import LoadMoreFooter from  './../../component/LoadMoreFooter'

const pageSize = 45;

class SheetContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource:new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2}),
            pageNo : 1,
            total : 0,
            isRefreshing:true,
            isLoadAll:0,
            isLoading:false,
            productNormalList:[]
        }
    }

    stopRefresh(refresh){
        this.setState({
            isRefreshing:refresh,
        });
    }

    componentDidMount(){
        this.loadData(this.state.pageNo);
    }
    gotodetail(data){
        const {navigator} = this.props;
        navigator.push({
            component: SheetDetailContainer,
            params:{
                data
            }
        })
    }
    renderRow(data){
        const {imagePath,productName,companyName} = data;
        return (
            <TouchableOpacity onPress={()=>this.gotodetail(data)}>
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
    renderFooter() {
        return (<LoadMoreFooter isLoadAll={this.state.isLoadAll} />)
    }
    onEndReached(){
        if(this.state.pageNo>this.state.total || this.state.isLoading || this.state.isRefreshing){
            return;
        }
        this.setState({isLoadAll:1});
        this.loadData(this.state.pageNo);
    }
    loadData(pageNo){
        console.log(pageNo);
        this.setState({isLoading:true});
        HttpTool.post("https://m.alibaba.com/products/bottle/" + pageNo + ".html?XPJAX=1")
            .then((response)=>{
                this.state.productNormalList = this.state.productNormalList.concat(response.productNormalList);
                let total = response.pagination.total;
                console.log(total);
                this.stopRefresh(false);
                this.setState({dataSource:this.state.dataSource.cloneWithRows(this.state.productNormalList)});




                this.state.pageNo++
                this.setState(
                    {
                        pageNo:this.state.pageNo,
                        total:total,
                        isLoading:false
                    });
                if (this.state.pageNo>response.pagination.total){
                    this.setState({isLoadAll:2})
                }
            }).catch(function (error) {
                this.setState({isLoading:false,isLoadAll:0});
                this.stopRefresh(false);
        });
    }
    render() {
        const {navigator} = this.props;
        return (
            <View style={styles.container}>
                <NavigationBar title="工单" rightTitle="点击" rightAction={()=>{

                    let pro = this.state.productNormalList[0]
                    pro.companyName = "测试";
                    this.state.productNormalList[0] = pro;
                    let arr = [];
                    for (let j = 0; j<this.state.productNormalList.length;j++){
                        let model = this.state.productNormalList[j];
                        arr.push(model);
                    }
                    this.setState({
                        productNormalList:arr,
                    })
                    console.log(this.state.productNormalList + "  " + arr );
                    this.setState({dataSource:this.state.dataSource.cloneWithRows(this.state.productNormalList)});
                }}/>
                <ListView dataSource={this.state.dataSource}
                          renderRow={(data)=>this.renderRow(data)}
                          onEndReached={()=>this.onEndReached()}
                          refreshControl= {
                              <RefreshControl
                                    refreshing={this.state.isRefreshing}
                              ></RefreshControl>
                          }
                          renderFooter={ this.renderFooter.bind(this) }
                          enableEmptySections={true}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:Constants.viewBgColor,
        flex:1
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
        width:Constants.screenWidth - 80,
        // marginLeft:3
    },
    cellImage:{
        width:60,
        height:50
    }
})

export default SheetContainer;