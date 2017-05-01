import React, {Component} from 'react';
import {
  View, Text, StyleSheet, ScrollView,
  Image, NativeModules
} from 'react-native';

import NavigationBar from '../../component/navBarCommon'
import {Container,Button} from  'native-base'
import * as Constants from  './../../constants/constant'
import Video from 'react-native-video';
import back from './../../source/images/icon_back.png'

var ImagePicker = NativeModules.ImageCropPicker;

export default class ImagePickerDemo extends Component {
    constructor() {
        super();
        this.state = {
            images: [],
        };
    }

    pickSingleWithCamera(cropping) {
        ImagePicker.openCamera({
          cropping: cropping,
          width: 500,
          height: 500,
        }).then(image => {
            this.dealSingle(image)
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
            loadingLabelText:"请稍后..."
        }).then(image => {
            this.dealSingle(image)
        }).catch(e => {
          console.log(e);
        });
    }

    dealSingle(image){
        console.log('received image', image);
        image = {uri: image.path, width: image.width, height: image.height, mime: image.mime};
        this.state.images.push(image);
        let images =  this.state.images;
        this.setState({
            images: images
        });
    }
    pickMultiple() {
      ImagePicker.openPicker({
          multiple: true,
          waitAnimationEnd: false,
          loadingLabelText:"请稍后...",
      }).then(images => {
          this.dealMultiple(images);
      }).catch(e => {console.log(e)});
  }
    dealMultiple(images){
        images = images.map(i => {
            return {uri: i.path, width: i.width, height: i.height, mime: i.mime};
        });
        let tempData = this.state.images.concat(images);
        this.setState({
            images: tempData
        });
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
    let height =  this.props.imageW * image.height / image.width;
    return <Image style={{width: this.props.imageW , height: height, resizeMode: 'contain'}} source={image} />
  }

  renderAsset(image) {
    if (image.mime && image.mime.toLowerCase().indexOf('video/') !== -1) {
      return this.renderVideo(image);
    }

    return this.renderImage(image);
  }


  renderImages(images){

      let margin = 0;
      let contentW = Constants.screenWidth - 2 * margin;
      let columns = 3;
      let h = 20;
      let imageW = (contentW - ((columns + 1) * h)) / columns;
      let v = 20;
      return (
          <View style={{backgroundColor:'orange',width:Constants.screenWidth,height:parseInt((images.length - 1) / columns) * (v + imageW) + 2 * v + imageW }}>
              <View style={{flex:1,flexDirection:'row',flexWrap:'wrap'}}>
                  {
                      this.state.images.length > 0 ? this.state.images.map(i =>

                          <View key={i.uri} style={{backgroundColor:'purple',marginLeft:h,width:imageW,height:imageW,marginTop:v}}>

                              <Image style={{width: imageW , height: imageW, resizeMode: 'cover'}} source={i} />

                          </View>
                      )
                      : null
                  }
              </View>
          </View>)
  }
  render() {
    return (
        <View style={styles.container}>
            <NavigationBar title="图片选择器" leftImage={ back } leftAction={()=>this.props.navigator.pop()}/>
            {this.renderImages(this.state.images)}
            <View style={styles.view}>
                <Button onPress={()=>this.pickSingle(false)} ><Text>选择单张</Text></Button>
                <Button onPress={this.pickMultiple.bind(this)} ><Text>选择多张</Text></Button>
                <Button onPress={()=>this.pickSingleWithCamera(false)} ><Text>进行拍照</Text></Button>
            </View>

        </View>
    );
  }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Constants.viewBgColor,
    },
    scrollView:{
        backgroundColor:'red',
    },
    view:{
        flexDirection:'row'
    }
});