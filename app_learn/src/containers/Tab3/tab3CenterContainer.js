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
    TouchableOpacity,
    Animated
} from 'react-native';
import NavigationBar from '../../component/navBarCommon'
import * as Constants from './../../constants/constant'
import {connect} from 'react-redux'
class MyCenterContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bounceValue:new Animated.Value(0)
        }
    }
    componentDidMount(){
        this.state.bounceValue.setValue(1.5);
        Animated.spring(this.state.bounceValue,{
            toValue:0.5,
            friction:1
        }).start()
    }
    render() {
        return (
            <View style={styles.container}>
                <NavigationBar title=""/>
                <Animated.Image source={require('./../../source/images/icon_tab_view.png')}
                                style={{
                                    flex:1,
                                    transform:[{
                                        scale:this.state.bounceValue
                                    }],
                                    resizeMode:"stretch"
                                }}/>
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