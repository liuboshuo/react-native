/**
 * Created by liushuo on 17/4/28.
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Platform,
    TouchableOpacity
} from 'react-native';
import NavigationBar from '../../component/navBarCommon'
import {Container,Button} from  'native-base'
import Toast from 'react-native-easy-toast'
class ToastShowDemo extends Component {
    constructor(props) {
        super(props);
    }

    click(){
        this.Toast.show('hello toast!');
    }

    render() {
        return (
            <Container>
                <NavigationBar title=""/>
                <Button onPress={this.click.bind(this)}>
                    <Text>测试</Text>
                </Button>
                <Toast ref={o=>this.Toast = o} position='center'/>
            </Container>
        )
    }
}

const styles = StyleSheet.create({

})

export default ToastShowDemo;