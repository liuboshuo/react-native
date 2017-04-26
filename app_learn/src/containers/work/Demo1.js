/**
 * Created by liushuo on 17/4/26.
 */
import React , {Component} from 'react';
import {
    AppRegistry ,
    Dimensions,
    ListView ,
    Text ,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    CameraRoll,
    NativeModules
} from 'react-native';
import NavigationBar from './../../common/NavBarCommon'
import * as Constants from  './../../common/constant'
import {Container,Button} from 'native-base'
// import {ImagePicker} from 'react-native-image-crop-picker'
import Video from 'react-native-video';
let ImagePicker = NativeModules.ImageCropPicker;

export default class Demo1 extends Component {

    selectImage(){
        ImagePicker.openPicker({
            width: 300,
            height: 300,
        }).then(image => {
            console.log('received image', image);
        }).catch(e => {
            console.log(e);
        });
    }

    render() {
        return (
            <Container>
                <NavigationBar title="工单"/>
                <Button onPress={()=> this.selectImage()}>
                    <Text>
                        Button
                    </Text>
                </Button>
            </Container>
        )
    }
}

const  styles = StyleSheet.create({
    container:{
        backgroundColor:Constants.viewBgColor,
        flex:1
    }
});
