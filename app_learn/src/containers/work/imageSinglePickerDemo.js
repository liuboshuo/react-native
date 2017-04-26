/**
 * Created by ls-mac on 2017/4/26.
 */
import React, {Component} from 'react';
import {
    View, Text, StyleSheet, ScrollView, Alert,
    Image, TouchableOpacity, NativeModules, Dimensions
} from 'react-native';

import NavigationBar from './../../common/NavBarCommon'
import {Container,Button} from  'native-base'
import ImagePicker from 'react-native-image-picker'

export default class ImageSinglePickerDemo extends Component {

    constructor() {
        super();
        this.state = {
            image: null,
            images: null
        };
    }

    onClickHandle(){
        var options = {
            title: 'Select Avatar',
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: response.uri };
                this.setState({
                    avatarSource: source
                });
            }
        });
    }
    render() {
        return (
            <Container>
                <NavigationBar title=""/>

                <Button onPress={this.onClickHandle.bind(this)}>
                    <Text>点击</Text>
                </Button>
                <Image source={this.state.avatarSource} style={styles.uploadAvatar} />
            </Container>
        );
    }
}


const styles = StyleSheet.create({
    scrollView:{
        backgroundColor:'red'
    },
    uploadAvatar:{
        width:100,
        height:100
    }
});