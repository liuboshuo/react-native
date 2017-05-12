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

        this._onSelectionChanged = this._onSelectionChanged.bind(this);
        this._onActionButton = this._onActionButton.bind(this);
    }

    _onSelectionChanged(media, index, selected) {
        alert(`${media.photo} selection status: ${selected}`);
    }

    _onActionButton(media, index) {
        if (Platform.OS === 'ios') {
            ActionSheetIOS.showShareActionSheetWithOptions({
                    url: media.photo,
                    message: media.caption,
                },
                () => {
                },
                () => {
                });
        } else {
            alert(`handle sharing on android for ${media.photo}, index: ${index}`);
        }
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
                onSelectionChanged={this._onSelectionChanged}
                onActionButton={this._onActionButton}
            />
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        flex: 1,
        paddingTop: 54,
        paddingLeft: 16,
    },
    row: {
        flex: 1,
        padding: 8,
        borderBottomColor: 'rgba(0, 0, 0, 0.1)',
        borderBottomWidth: 1,
    },
    rowTitle: {
        fontSize: 14,
    },
    rowDescription: {
        fontSize: 12,
    },
});
