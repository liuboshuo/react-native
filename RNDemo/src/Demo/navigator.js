/**
 * Created by liushuo on 17/2/9.
 */
import React , { Component,PropTypes } from 'react';
import { AppRegistry ,StyleSheet,TouchableHighlight,Navigator, Text, View } from 'react-native';


export default class NavigatorTest extends Component {

    render() {

        return (

            <Navigator initialRoute={{title:"My Initial Scene" , index: 0}} renderScene={
                (route,navigator)=> <MyScene

                    title={route.title}

                    onForward={ () => {
                        const nextIndex = route.index + 1;
                        navigator.push({
                            title: 'Scene ' + nextIndex,
                            index: nextIndex,
                        });
                    }}

                    onBack={() => {
                        if (route.index > 0) {
                            navigator.pop();
                         }
                       }
                    }
            />
            }>

            </Navigator>


        )
    }

}



class MyScene extends Component {

    static propTypes = {
        title:PropTypes.string.isRequired,
        onForward:PropTypes.func.isRequired,
        onBack:PropTypes.func.isRequired,
    }

    render () {
        return (
            <View>
                <Text>Current Scene : {this.props.title}</Text>
                <TouchableHighlight onPress={this.props.onForward}><Text>点击我进入下一个场景</Text></TouchableHighlight>
                <TouchableHighlight onPress={this.props.onBack}><Text>点我返回上一个场景</Text></TouchableHighlight>
            </View>
        )
    }

}