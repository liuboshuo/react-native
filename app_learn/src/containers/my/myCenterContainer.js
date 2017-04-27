/**
 * Created by liushuo on 17/4/19.
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
import NavigationBar from './../../common/NavBarCommon'
import {Container,Button} from  'native-base'

class MyCenterContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <NavigationBar title=""/>
                <Button>
                    <Text>测试</Text>
                </Button>
                <Text>Hello world</Text>
            </Container>
        )
    }
}

const styles = StyleSheet.create({

})

export default MyCenterContainer;