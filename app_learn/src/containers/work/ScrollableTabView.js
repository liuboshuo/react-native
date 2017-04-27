/**
 * Created by liushuo on 17/4/27.
 */
import React, {Component} from 'react';
import {
    View, Text, StyleSheet, ScrollView, Alert,
    Image, TouchableOpacity, NativeModules, Dimensions
} from 'react-native';

import NavigationBar from './../../common/NavBarCommon'
import ScrollableTabView, {ScrollableTabBar,DefaultTabBar} from 'react-native-scrollable-tab-view'
import {Container,Button,Toast} from  'native-base'

export default class ScrollableTabViewDemo extends Component {

    showText1(){
        Toast.show({"text":"test","duration":2})
    }
    render() {
        return (
            <Container>
                <NavigationBar title=""/>

                <ScrollableTabView
                    locked={false}
                    renderTabBar={()=><DefaultTabBar></DefaultTabBar>}
                >
                    <View tabLabel="tab1">
                        <Text tabLabel="tab1">1</Text>
                        <Button onPress={this.showText1.bind(this)}><Text>toast</Text></Button>
                        <Toast>测试</Toast>
                    </View>
                    <View tabLabel="tab2">
                        <Text>2</Text>
                    </View>

                    <View tabLabel="tab3">
                        <Text>3</Text>
                    </View>


                </ScrollableTabView>

            </Container>
        );
    }
}


const styles = StyleSheet.create({

});