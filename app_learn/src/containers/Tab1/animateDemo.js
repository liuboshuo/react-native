/**
 * Created by liushuo on 17/7/12.
 */
import React, {Component} from 'react'
import {
    Animated,
    View,
    Text,
    StyleSheet,
    Image,
    Easing,
    ScrollView
} from 'react-native'
import back from './../../source/images/icon_back.png'
import * as constant from './../../constants/constant'
import NavigationBar from "../../component/navBarCommon";

class AnimatedDemo extends Component {
    componentDidMount() {
        // Animated.timing(this.state.fadeInOpacity,{
        //     toValue:1,
        //     duration:2000,
        //     ease:Easing.linear
        // }).start()
        const timing = Animated.timing
        Animated.sequence([
            Animated.stagger(1000,this.state.animates.map((value)=>{
                return Animated.timing(value,{
                    toValue:1,
                })
            }).concat(
                this.state.animates.map((value)=>{
                    return timing(value,{
                        toValue:0,
                    })
                })
            )),
            Animated.delay(1000),
            timing(this.state.animates[0],{
                toValue:1
            }),
            timing(this.state.animates[2],{
                toValue:-1
            }),
            timing(this.state.animates[1],{
                toValue:0.5
            }),
            Animated.delay(1000),
            Animated.parallel(this.state.animates.map((value)=>{
                return timing(value,{
                    toValue:0,
                })
            }))
        ]).start()
        Animated.parallel(["fadeInOpacity","rotation","fontSize"].map(data=>{
            return Animated.timing(this.state[data],{
                toValue:1,
                duration:2000,
                ease:Easing.linear
            });
        })).start()
        Animated.timing(this.state.value,{
            // velocity:10,
            // deceleration:0.99,
            duration:600,
            toValue:{x:150,y:200}
        }).start();
        Animated.timing(this.state.height,{
            toValue:1,
            ease:Easing.linear
        }).start()

        Animated.timing(this.state.width,{
            toValue:1,
            ease:Easing.linear
        }).start()
    }
    constructor(props){
        super(props);
        this.state = {
            fadeInOpacity:new Animated.Value(0),
            rotation:new Animated.Value(0),
            fontSize:new Animated.Value(0),
            animates:[1,2,3].map(()=>new Animated.Value(0)),
            value:new Animated.ValueXY({x:0,y:0}),
            height:new Animated.Value(0),
            width:new Animated.Value(0)
        }
    }

    render(){
        const {title} = this.props.data;
        return (
            <View style={styles.container}>
                <NavigationBar title={title} leftImage={back} leftAction={()=>this.props.navigator.pop()}/>
                <ScrollView>

                    <Animated.View style={[styles.viewStyle ,{opacity:this.state.fadeInOpacity}]}>
                        <Text>渐变</Text>
                    </Animated.View>

                    <Animated.View style={[styles.viewStyle ,{opacity:this.state.fadeInOpacity,
                        transform:[{
                            rotateZ:this.state.rotation.interpolate({
                                inputRange:[0,1],
                                outputRange:['0deg', '360deg']
                            })
                        }]
                    }]}>
                        <Animated.Text style={{
                            fontSize:this.state.fontSize.interpolate({
                                inputRange:[0,1],
                                outputRange:[16,30]
                            })
                        }}>渐变</Animated.Text>
                    </Animated.View>
                    {
                        this.state.animates.map((value,index)=>{
                            return (
                                <Animated.View key={index+2} style={[styles.viewStyle,styles['view' + (index+1) ],{
                                    left:this.state.animates[index].interpolate({
                                        inputRange:[0,1],
                                        outputRange:[0,200]
                                    })
                                }]}>
                                    <Text>我的第{index+1}个View</Text>
                                </Animated.View>
                            )
                        })
                    }
                    <Animated.View style={[styles.viewXy,{
                        transform:[
                            {translateX:this.state.value.x},
                            {translateY:this.state.value.y}
                        ]
                    }]}>
                        <Text>😆</Text>
                    </Animated.View>
                    <Animated.View style={[styles.viewStyle,{
                        height:this.state.height.interpolate({
                            inputRange:[0,1],
                            outputRange:[40,150]
                        }),
                        width:this.state.width.interpolate({
                            inputRange:[0,1],
                            outputRange:[0, constant.screenWidth]
                        })
                    }]}>
                        <Text>宽高动画</Text>
                    </Animated.View>

                </ScrollView>
            </View>)
    }
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff",
        flex:1
    },
    viewStyle:{
        marginTop:20,
        width:constant.screenWidth,
        height:40,
        backgroundColor:"green" ,
        flexDirection:'row',
        justifyContent:"center",
        alignItems:"center"
    },

    view1:{
        width:200,
        backgroundColor:"green" ,
    },
    view2:{
        width:200,
        backgroundColor:"blue" ,
    },
    view3:{
        width:200,
        backgroundColor:"rgb(20,30,40)" ,
    },

    viewXy:{
        position:'absolute',
        marginTop:20,
        width:60,
        height:60,
        backgroundColor:"purple" ,
        flexDirection:'row',
        justifyContent:"center",
        alignItems:"center",
        borderRadius:30,
    }

})

export default AnimatedDemo;