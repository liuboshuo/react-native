/**
 * Created by liushuo on 17/5/2.
 */
import React, { Component } from 'react';
import {
    Dimensions,
    Image,
    ListView,
    PixelRatio,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

class ParallaxScrollViewDemo extends Component {
    constructor(props) {
        super(props);
        this.state =  {
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            }).cloneWithRows([
                'Row1',
                'Row2',
                'Row3',
                'Row4',
                'Row5',
                'Row6',
                'Row7',
                'Row8',
                'Row9',
                'Row10',
                'Row11'
            ])
        };
    }

    render() {
        const { onScroll = () => {} } = this.props;
        return (
            <ListView
                ref="ListView"
                style={styles.container}
                dataSource={ this.state.dataSource }
                renderRow={(rowData) => (
          <View key={rowData} style={ styles.row }>
            <Text style={ styles.rowText }>
              { rowData }
            </Text>
          </View>
         )}
                renderScrollComponent={props => (
          <ParallaxScrollView
            onScroll={onScroll}

            headerBackgroundColor="#333"
            stickyHeaderHeight={ STICKY_HEADER_HEIGHT }
            parallaxHeaderHeight={ PARALLAX_HEADER_HEIGHT }
            backgroundSpeed={10}

            renderBackground={() => (
              <View key="background">
                <Image source={{uri: 'https://i.ytimg.com/vi/P-NZei5ANaQ/maxresdefault.jpg',
                                width: window.width,
                                height: PARALLAX_HEADER_HEIGHT}}/>
                <View style={{position: 'absolute',
                              top: 0,
                              width: window.width,
                              backgroundColor: 'rgba(0,0,0,.4)',
                              height: PARALLAX_HEADER_HEIGHT}}/>
              </View>
            )}

            renderStickyHeader={() => (
              <View key="sticky-header" style={styles.stickySection}>

              </View>
            )}

            renderFixedHeader={() => (
              <TouchableOpacity key="fixed-header" style={styles.fixedSection} onPress={()=>this.props.navigator.pop()}>
                <Image source={require('./../../source/images/icon_back.png')} style={styles.fixedSectionText}/>
              </TouchableOpacity>
            )}/>
        )}
            />
        );
    }
}

const window = Dimensions.get('window');
const ROW_HEIGHT = 60;
const PARALLAX_HEADER_HEIGHT = 200;
const STICKY_HEADER_HEIGHT = 64;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: window.width,
        height: PARALLAX_HEADER_HEIGHT
    },
    stickySection: {
        height: STICKY_HEADER_HEIGHT,
        width: window.width,
        justifyContent: 'flex-end',
        backgroundColor:'red',

    },
    stickySectionText: {
        color: 'white',
        fontSize: 20,
        margin: 10
    },
    fixedSection: {
        position: 'absolute',
        bottom: 10,
        left: 10
    },
    fixedSectionText: {
        width:30,
        height:30
    },
    row: {
        overflow: 'hidden',
        paddingHorizontal: 10,
        height: ROW_HEIGHT,
        backgroundColor: 'white',
        borderColor: '#ccc',
        borderBottomWidth: 1,
        justifyContent: 'center'
    },
    rowText: {
        fontSize: 20
    }
});

export default ParallaxScrollViewDemo;