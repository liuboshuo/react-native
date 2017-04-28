/**
 * Created by liushuo on 17/4/24.
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import NavigationBar from '../../component/navBarCommon'
import SheetDetailContainer from './test'
import HttpTool from '../../common/httpTool'
import * as Constants from  '../../constants/constant'
import LoadMoreFooter from  '../../component/loadMoreFooter'
import MyListView from '../../component/myListView'

class RefreshablePlainListView extends Component {
    constructor(props) {
        super(props);
    }
    loadData(pageNo,callback,options){
        console.log("pageNo = " + pageNo);
        HttpTool.post("https://m.alibaba.com/products/bottle/" + pageNo + ".html?XPJAX=1")
            .then((response)=>{
                console.log(response);
                let productNormalList = response.productNormalList;
                let total = response.pagination.total;
                if (pageNo >= total){
                    callback(productNormalList,{isLoadingMore:2})
                }else{
                    callback(productNormalList)
                }

            }).catch(function (error) {
                callback(null)
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
                <MyListView onFetch={this.loadData.bind(this)}
                            renderRow={(data)=>this.renderRow(data)}
                            renderFooter={ this.renderFooter.bind(this)}
                            enableFooter={true}
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
        width:Constants.screenWidth - 80,        // marginLeft:3
    },
    cellImage:{
        width:60,
        height:50,
        marginRight:10
    }
})

export default RefreshablePlainListView;