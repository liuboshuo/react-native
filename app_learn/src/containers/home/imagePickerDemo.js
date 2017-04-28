import React, {Component} from 'react';
import {
  View, Text, StyleSheet, ScrollView, Alert,
  Image, TouchableOpacity, NativeModules, Dimensions
} from 'react-native';

import NavigationBar from '../../component/navBarCommon'
import {Container,Button} from  'native-base'
import * as Constants from  './../../constants/constant'
import Video from 'react-native-video';

var ImagePicker = NativeModules.ImageCropPicker;

export default class ImagePickerDemo extends Component {

  constructor() {
    super();
    this.state = {
      image: null,
      images: null
    };
  }

  pickSingleWithCamera(cropping) {
    ImagePicker.openCamera({
      cropping: cropping,
      width: 500,
      height: 500,
    }).then(image => {
      console.log('received image', image);
      this.setState({
        image: {uri: image.path, width: image.width, height: image.height},
        images: null
      });
    }).catch(e => alert(e));
  }

  pickSingle(cropit, circular=false) {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: cropit,
      cropperCircleOverlay: circular,
      compressImageMaxWidth: 640,
      compressImageMaxHeight: 480,
      compressImageQuality: 0.5,
      compressVideoPreset: 'MediumQuality',
    }).then(image => {
      console.log('received image', image);
      this.setState({
        image: {uri: image.path, width: image.width, height: image.height, mime: image.mime},
        images: null
      });
    }).catch(e => {
      console.log(e);
    });
  }

  pickMultiple() {
      ImagePicker.openPicker({
          multiple: true,
          waitAnimationEnd: false
      }).then(images => {
          this.setState({
              image: null,
              images: images.map(i => {
                  console.log('received image', i);
                  return {uri: i.path, width: i.width, height: i.height, mime: i.mime};
              })
          });
      }).catch(e => {console.log(e)});
  }

  renderVideo(video) {
    return (<View style={{height: 300, width: 300}}>
      <Video source={{uri: video.uri, type: video.mime}}
         style={{position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
          }}
         rate={1}
         paused={false}
         volume={1}
         muted={false}
         resizeMode={'cover'}
         onError={e => console.log(e)}
         onLoad={load => console.log(load)}
         repeat={true} />
     </View>);
  }

  renderImage(image) {
    let height =  Constants.screenWidth * image.height / image.width;
    return <Image style={{width: Constants.screenWidth, height: height, resizeMode: 'contain'}} source={image} />
  }

  renderAsset(image) {
    if (image.mime && image.mime.toLowerCase().indexOf('video/') !== -1) {
      return this.renderVideo(image);
    }

    return this.renderImage(image);
  }

  render() {
    return (
        <Container>
            <NavigationBar title=""/>
            <View style={styles.scrollView}>
                <ScrollView>
                    {this.state.image ? this.renderAsset(this.state.image) : null}
                    {this.state.images ? this.state.images.map(i => <View key={i.uri}>{this.renderAsset(i)}</View>) : null}
                </ScrollView>
            </View>
            <View style={styles.view}>
                <Button onPress={()=>this.pickSingle(false)} ><Text>选择单张</Text></Button>
                <Button onPress={this.pickMultiple.bind(this)} ><Text>选择多张</Text></Button>
                <Button onPress={()=>this.pickSingleWithCamera(false)} ><Text>进行拍照</Text></Button>
            </View>

        </Container>
    );
  }
}


const styles = StyleSheet.create({
    scrollView:{
        backgroundColor:'red',
        height:300
    },
    view:{
        flexDirection:'row'
    }
});