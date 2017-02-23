/**
 * Created by liushuo on 17/2/9.
 */
import React , { Component } from 'react';
import {AppRegistry ,Image,Animated, View} from 'react-native';

class PlaygroundTest extends Component {

    constructor(props){
        super(props);
        this.state = {bounceValue:new Animated.Value(0)};
    }
    render() {
        return (
            <Animated.Image
                source={{uri : 'http://i.imgur.com/XMKOH81.jpg'}}
                style={{flex : 1 , transform : [{scale:this.state.bounceValue}]}}>

            </Animated.Image>
        )
    }
    componentDidMount() {

        this.state.bounceValue.setValue(1.5);
        Animated.spring(this.state.bounceValue,{toValue:0.8,friction : 1}).start();
    }
}
export  default  PlaygroundTest;