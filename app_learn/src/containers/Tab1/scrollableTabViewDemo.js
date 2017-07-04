/**
 * Created by liushuo on 17/4/27.
 */
import React, {Component} from 'react';
import {
    View, Text, StyleSheet
} from 'react-native';
import * as Constants from './../../constants/constant'
import back from './../../source/images/icon_back.png'
import NavigationBar from '../../component/navBarCommon'
// import ScrollableTabView, {ScrollableTabBar,DefaultTabBar} from 'react-native-scrollable-tab-view'

export default class ScrollableTabViewDemo extends Component {

    render() {
        return (
            <View style={styles.container}>
                <NavigationBar title="选项卡" leftImage={ back } leftAction={()=>this.props.navigator.pop()}/>

                {/*<ScrollableTabView*/}
                    {/*locked={false}*/}
                    {/*renderTabBar={()=><DefaultTabBar></DefaultTabBar>}*/}
                {/*>*/}
                    {/*<View tabLabel="tab1">*/}
                        {/*<Text tabLabel="tab1">1</Text>*/}
                    {/*</View>*/}
                    {/*<View tabLabel="tab2">*/}
                        {/*<Text>2</Text>*/}
                    {/*</View>*/}

                    {/*<View tabLabel="tab3">*/}
                        {/*<Text>3</Text>*/}
                    {/*</View>*/}


                {/*</ScrollableTabView>*/}

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Constants.viewBgColor,
    }
});