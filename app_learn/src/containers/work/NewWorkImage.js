/**
 * Created by liushuo on 17/4/27.
 */
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

export default class SwiperDemo extends Component {

    constructor (props) {
        super(props)
        this.state = {
            loading:true
        }
    }
    loadHandle(){
        this.setState({
            loading:false
        })
    }
    render() {
        return (
            <View>
                <Image onLoad={this.loadHandle.bind(this)} source={{uri:this.props.uri}} style={[this.props.style]}>
                    {this.state.loading && <View style={styles.loadingView}>
                        <ActivityIndicator animating={this.state.loading} size={"small"} />
                    </View>
                    }
                </Image>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    loadingView:{
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.2)'
    },
})
