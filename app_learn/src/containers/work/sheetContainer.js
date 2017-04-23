/**
 * Created by liushuo on 17/4/19.
 */
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
            isLoadMore:false,
        }
    }

    stopRefresh(refresh){
        this.setState({
            isRefreshing:refresh,
        });
    }

    componentDidMount(){
        HttpTool.post("https://m.alibaba.com/products/bottle/" + this.state.pageNo + ".html?XPJAX=1")
            .then((response)=>{
                console.log(response);
                let productNormalList = response.productNormalList;
                let total = response.pagination.total;
                this.stopRefresh(false);
                this.setState(
                    {
                        pageNo:this.state.pageNo++,
                        total:total,
                        dataSource:this.state.dataSource.cloneWithRows(productNormalList)
                });
        }).catch(function (error) {
            console.log(error);
            this.stopRefresh(false);
        });
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
        console.log(data);
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
        return (<LoadMoreFooter />)
    }
    render() {
        const {navigator} = this.props;
        return (
            <View style={styles.container}>
                <NavigationBar title="工单"/>
                <ListView dataSource={this.state.dataSource}
                          renderRow={(data)=>this.renderRow(data)}
                          refreshControl= {
                              <RefreshControl
                                    refreshing={this.state.isRefreshing}
                                    //tintColor="gray"
							        //colors={['#ff0000', '#00ff00', '#0000ff']}
							        //progressBackgroundColor="gray"
                              ></RefreshControl>
                          }
                          renderFooter={ this.renderFooter.bind(this) }
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