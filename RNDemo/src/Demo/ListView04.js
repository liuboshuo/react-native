/**
 * Created by liushuo on 17/2/20.
 */
import React , {Component} from 'react';
import {AppRegistry , Dimensions, ListView , Text , View, StyleSheet,TouchableOpacity, Image} from 'react-native';

let screenWidth = Dimensions.get("window").width
let width = 100;
let cols = 3;
let vMargin = (screenWidth - cols  * width) / (cols + 1);
let hMarin = 25;

let allCars = require('../Json/Car.json').data;
export default class ListView04 extends Component {

    getSectionData(dataBlob,sectionId){
        return dataBlob[sectionId];
    }
    getRowData(dataBlob,sectionId,rowId){
        return dataBlob[sectionId + ":" + rowId];
    }

    constructor(props) {
        super(props);


        this.state = {
            dataSource:new ListView.DataSource({
                getSectionData: this.getSectionData,
                getRowData: this.getRowData,
                rowHasChanged: (r1, r2) => r1 !== r2,
                sectionHeaderHasChanged: (s1, s2) => s1 !== s2
            })
        };
    }

    initData(){
        return require('../Json/Car.json').data;
    }

    clickRow(model){


    }

    componentDidMount() {

        let sectionIds = [];
        let rowIds = [];
        let blobData = [];

        for (let i = 0;i<allCars.length;i++){
            sectionIds[i] = i;
            blobData[i] = allCars[i].title;
            let tempArray = [];
            for (let j = 0; j<allCars[i].cars.length;j++){
                tempArray.push(j);
                blobData[i+":"+j] = allCars[i].cars[j];
            }
            rowIds.push(tempArray);
        }
        console.log("--------" +  blobData[0]);
        this.setState({dataSource:this.state.dataSource.cloneWithRowsAndSections(blobData,sectionIds,rowIds)})


    }

    senderSection0(sectionData){

        return(<View style={ styles.tableSectionViewStyle}>
            <Text style={styles.tableSectionTextStyle}>{sectionData}</Text>
        </View>
        );
    }
    renderRow0(data,sectionID,rowID,highlightRow){
        console.log(data);
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
                <View style={styles.navigationStyle}>

                </View>
                <ListView
                          dataSource={this.state.dataSource}
                          renderRow={(data,sectionID,rowID,highlightRow)=>{ return this.renderRow0(data,sectionID,rowID,highlightRow)}}
                          renderSectionHeader={(sectionData)=>{return this.senderSection0(sectionData)}}
                >
                </ListView>
            </View>
        )
    }
}

const  styles = StyleSheet.create({
    navigationStyle:{
        backgroundColor:'purple',
        width:screenWidth,
        height:64
    },

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
