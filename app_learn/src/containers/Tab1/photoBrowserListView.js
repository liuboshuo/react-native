/**
 * Created by ls-mac on 2017/5/10.
 */
import React, { Component } from 'react';
import {
    ListView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import back from './../../source/images/icon_back.png'
import NavigationBar from  './../../component/navBarCommon'
import photoBrowserDemo from  './photoBrowserDemo'
const EXAMPLES = [
    {
        title: 'Single photo',
        description: 'with caption, no grid button',
        enableGrid: true,
        media: [{
            photo: 'http://farm3.static.flickr.com/2667/4072710001_f36316ddc7_b.jpg',
        }],
    }, {
        title: 'Multiple photos',
        description: 'with captions and nav arrows',
        displayNavArrows: false,
        displayActionButton: false,
        media: [{
            photo: 'http://farm3.static.flickr.com/2667/4072710001_f36316ddc7_b.jpg',
            selected: true,
        }, {
            photo: require('./media/broadchurch_thumbnail.png'),
        }, {
            photo: 'http://farm3.static.flickr.com/2449/4052876281_6e068ac860_b.jpg',
            thumb: 'http://farm3.static.flickr.com/2449/4052876281_6e068ac860_q.jpg',
            selected: false,
        }],
    }
];



export default class photoBrowserListView extends Component {

    constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
        });

        this.state = {
            dataSource: dataSource.cloneWithRows(EXAMPLES),
        };
    }


    _openExample(example) {
        const {navigator} = this.props;
        navigator.push({
            component: photoBrowserDemo,
                params:{
                    example
                }
        });
    }

    _renderRow(rowData, sectionID, rowID) {
        const example = EXAMPLES[rowID];

        return (
            <TouchableOpacity onPress={() => this._openExample(example) }>
                <View style={styles.row}>
                    <Text style={styles.rowTitle}>{rowData.title}</Text>
                    <Text style={styles.rowDescription}>{rowData.description}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        return (

        <View style={styles.container}>
            <NavigationBar title="图片" leftImage={ back } leftAction={()=>this.props.navigator.pop()}/>
            <ListView
                style={styles.list}
                dataSource={this.state.dataSource}
                renderRow={this._renderRow.bind(this)}
            />
        </View>
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
