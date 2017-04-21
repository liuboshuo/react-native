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
    Dimensions,
    Platform,
    TouchableOpacity
} from 'react-native';
import NavigationBar from './../../common/NavBarCommon'
import SheetDetailContainer from './sheetDetailContainer'
import HttpTool from './../../common/HttpTool'

class SheetContainer extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps={
        load_url:"http://c.m.163.com/nc/article/headline/T1348647853363/0-20.html?from=toutiao&fn=2&passport=&devId=nTM86EPlcxZu09VdpTEh6aR3%2B%2FQX6x8vHBD3ne3k5bbgOrg%2FIP5DcguSDmtYyWbs&size=20&version=8.1&spever=false&net=wifi&lat=5OtqEKiivwW4K%2BGMt6DBdA%3D%3D&lon=jKlRVyYkSNti2wwsjGQHrw%3D%3D&ts=1463384311&sign=TtD7IZllDljVzBs2E4sa9fQyKTKF021w2EUC6qx1gEN48ErR02zJ6%2FKXOnxX046I&encryption=1&canal=appstore"
    }
    componentDidMount(){
        HttpTool.get(this.props.load_url,"",function (response,error) {
            if (error){
                console.log(error)
            }else {
                console.log(response);
            }
        })
    }
    render() {
        const {navigator} = this.props;
        const {width} = Dimensions.get("window");
        return (
            <View style={{flex:1}}>
                <NavigationBar title="工单"/>
                <View style={{flex: 1,justifyContent:'center',alignItems:'center',backgroundColor:"white"}}>
                    <TouchableOpacity style={{width:300,height:30}} onPress={()=>{
                        navigator.push({
			                component: SheetDetailContainer,
			            })}}
                    >
                        <Text>点击</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})

export default SheetContainer;