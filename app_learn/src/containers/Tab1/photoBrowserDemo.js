/**
 * Created by ls-mac on 2017/5/10.
 */

import React, { Component } from 'react';
import {
    ActionSheetIOS,
    StyleSheet,
    Platform,
} from 'react-native';

import PhotoBrowser from 'react-native-photo-browser';
export default class PhotoBrowserExample extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {navigator} = this.props;
        const {
            media,
            displayNavArrows,
            displayActionButton,
            startOnGrid,
            enableGrid,
        } = this.props.example;

        return (
            <PhotoBrowser
                onBack={navigator.pop}
                mediaList={media}
                displayNavArrows={displayNavArrows}
                displayActionButton={displayActionButton}
                startOnGrid={startOnGrid}
                enableGrid={enableGrid}
                useCircleProgress
            />
        );
    }

}

const styles = StyleSheet.create({

});
