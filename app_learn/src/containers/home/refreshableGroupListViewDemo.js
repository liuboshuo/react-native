/**
 * Created by liushuo on 17/4/24.
 */
import React , {Component} from 'react';
import NavigationBar from '../../component/navBarCommon'
import { Dimensions , Text , View, StyleSheet,TouchableOpacity, Image} from 'react-native';
import MyListView from '../../component/myListView'

let screenWidth = Dimensions.get("window").width
let width = 100;
let cols = 3;
let vMargin = (screenWidth - cols  * width) / (cols + 1);
let hMarin = 25;

let allCars = require('../../source/Car.json').data;

export default class RefreshableGroupListView extends Component {
    constructor(props) {
        super(props);
    }

    clickRow(model){

    }

    loadData(pageNo,callback,option){
        console.log(pageNo);
        setTimeout(function () {
            if (pageNo == 3){
                callback(allCars,{'key':'cars',isLoadingMore:2});
            }else {
                callback(allCars,{'key':'cars'});
            }

        },1000);

    }
    senderSection0(sectionData){

        return(<View style={ styles.tableSectionViewStyle}>
                <Text style={styles.tableSectionTextStyle}>{sectionData.title}</Text>
            </View>
        );
    }
    renderRow0(data){
        return (
            <TouchableOpacity onPress={()=>this.clickRow(data)}>

                <View style={ styles.cellStyle}>
                    <Image source={{uri:data.icon}} style={styles.imageIcon} ></Image>
                    <Text style={styles.fontTitle}>{data.name}</Text>
                </View>

            </TouchableOpacity>
        );
    }
    render() {
        return (
            <View style={{flex:1}}>
                <NavigationBar title="工单"/>
                <MyListView
                    onFetch={this.loadData.bind(this)}
                    renderRow={(data,sectionID,rowID,highlightRow)=>{ return this.renderRow0(data,sectionID,rowID,highlightRow)}}
                    renderSectionHeader={(sectionData)=>{return this.senderSection0(sectionData)}}
                    enableFooter={true}
                    withSections={true}
                />
            </View>
        )
    }
}

const  styles = StyleSheet.create({

    cellStyle:{
        flexDirection:'row',
        alignItems:'center',
        borderBottomColor:"#e8e8e8",
        borderBottomWidth:0.5
    },
    tableSectionViewStyle:{
        width:screenWidth,
        height:30,
        justifyContent:'center',
        backgroundColor:'#e8e8e8'
    },
    fontTitle:{
        fontSize:15
    },
    imageIcon:{
        width:30,
        height:30,
        marginLeft:15,
        marginTop:10,
        marginBottom:10,
        marginRight:10
    },
    tableSectionTextStyle:{
        marginLeft:15,
        fontSize:15
    }
});
