/**
 * Created by liushuo on 17/4/19.
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Platform,
    TouchableOpacity
} from 'react-native';
import NavigationBar from '../../component/navBarCommon'
import * as Constants from './../../constants/constant'
import MsgListContainer from './../Tab2/tab2ListContainer'
import {connect} from 'react-redux'
class MyCenterContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        console.log(this.props.dispatch);
    }
    render() {
        return (
            <View style={styles.container}>
                <NavigationBar title=""/>
                <TouchableOpacity style={styles.content}>
                    <Text>tab3</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Constants.viewBgColor,
    },
    content:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }

})

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps) (MyCenterContainer);