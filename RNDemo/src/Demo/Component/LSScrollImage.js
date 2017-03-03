/**
 * Created by liushuo on 17/2/27.
 */
import React , {Component} from 'react';
import {AppRegistry , ScrollView ,Alert, Text , View, StyleSheet,TouchableOpacity, Image, TextInput, Dimensions} from 'react-native';

import {TimerMixin} from 'react-timer-mixin'

let {width} = Dimensions.get("window");

export default class LSScrollImage extends Component {

    mixins: [TimerMixin];
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 0,
            currentTitle:this.props.data[0].title
        }
    }
    render() {
        return (
            <View style={styles.contain}>
                <ScrollView ref="scrollView" style={styles.scrollViewStyle}
                    //是否横向
                            horizontal={true}
                    //是否隐藏滚动
                            showsHorizontalScrollIndicator={false}
                    //是否分页
                            pagingEnabled={true}

                            onMomentumScrollEnd={(e)=>this.onAnimationEnd(e)}

                            onScrollBeginDrag={()=>this.onScrollBeginDrag()}

                            onScrollEndDrag={()=>this.onScrollEndDrag()}

                >
                    {this.renderAllImg()}
                </ScrollView>
                <View style={styles.bottomView}>
                    <Text style={{color:'white'}}>{this.state.currentTitle}</Text>
                    <View style={{flexDirection:'row'}}>
                    {this.renderImageView()}
                    </View>
                </View>
            </View>
        )
    }
    renderAllImg(){
        let allImageData = [];

        for (let i = 0; i<this.props.data.length; i++){
            let data = this.props.data[i];
            allImageData.push(<Image key={i} source={{uri:data.imgsrc}} style={styles.iconStyle}/>)
        }
        return allImageData;
    }
    renderImageView(){
        let allImageData = [];
        let style;
        for (let i = 0; i<this.props.data.length; i++){
            style = i == this.state.currentPage ?{color:'orange'}:{color:'#ffffff'}
            allImageData.push(<Text key={i} style={[style,{fontSize:25}]}>&bull;</Text>)
        }
        return allImageData;
    }

    componentDidMount() {
        this.startTimer()
    }
    onScrollBeginDrag(){
        clearInterval(this.timer);
    }
    onScrollEndDrag(){
        this.startTimer();
    }
    startTimer(){
        const duration = 1000;
        this.timer = setInterval(()=>{
            let scrollView = this.refs.scrollView;
            let active = this.state.currentPage;
            let imageCount = this.props.data.length;
            if ((active+1)>=imageCount){
                active = 0;
            }else {
                active = this.state.currentPage + 1;
            }
            this.setState({currentPage:active});
            scrollView.scrollResponderScrollTo({x:active*width,y:0,animated:true})
        },duration)
    }

    onAnimationEnd(e){
        let current = Math.floor(e.nativeEvent.contentOffset.x / width);
        this.setState({
            currentPage:current,
            currentTitle:this.props.data[current].title
        })
    }
}

const  styles = StyleSheet.create({
    contain:{
        alignItems:'center'
    },
    scrollViewStyle:{
        width:width,
        height:120,
        flexDirection:'row'
    },
    iconStyle:{
        width:width,
        height:120,
    },
    bottomView:{
        position:'absolute',
        bottom:0,
        width:width,
        height:30,
        flexDirection:'row',
        backgroundColor:'rgba(0,0,0,0.5)',
        alignItems:'center',
        justifyContent:'space-between'
    }
});
