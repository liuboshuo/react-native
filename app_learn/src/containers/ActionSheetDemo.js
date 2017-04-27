/**
 * Created by liushuo on 17/4/27.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ActivityIndicator,
} from 'react-native';
import ActionSheet from 'react-native-actionsheet'
import NavigationBar from './../common/NavBarCommon'
import {Container,Button,Toast} from  'native-base'

let title = "action"
let options = ["Cancel","1","2","3"];
let cancleIndex = 0;
let DESTRUCTIVE_INDEX = 1
export default class ActionSheetDemo extends Component {

    constructor(props){
        super(props);
        this.state = {
            text:"1"
        }
    }
    click()
    {
        this.ActionSheet.show()
    }
    showText(i)
    {
        this.setState({text:i})
    }
    render() {
        return (
            <Container>
                <NavigationBar/>
                <Text>{this.state.text}</Text>
                <Button onPress={this.click.bind(this)}>
                    <Text>press</Text>
                </Button>
                <ActionSheet ref = {o => this.ActionSheet = o} title={title} options={options} cancelButtonIndex={cancleIndex} destructiveButtonIndex={DESTRUCTIVE_INDEX} onPress={()=>this.showText()}/>
            </Container>
        );
    }
}
const styles = StyleSheet.create({

})
