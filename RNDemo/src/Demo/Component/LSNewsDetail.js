/**
 * Created by ls-mac on 2017/3/1.
 */
import React , {Component} from 'react';
import {AppRegistry , TabBarIOS,  Text , View, StyleSheet, Dimensions, WebView} from 'react-native';

export default class LSNewsDetail extends Component{
    constructor(props){
        super(props);
        this.state = {
            html:""
        }
    }
    componentDidMount() {
        this.loadData()
    }
    loadData(){
        fetch("http://c.3g.163.com/nc/article/" + this.props.data.docid + "/full.html")
            .then((response)=>{return response.json()})
            .then((responseJson)=>{
                let body = responseJson[this.props.data.docid]['body'];

                let data = responseJson[this.props.data.docid]['img'];

                for (let i = 0;i<responseJson[this.props.data.docid]['img'].length;i++){
                    let data = responseJson[this.props.data.docid]['img'][i];
                    let img = data['src'];

                    let imgref = data['ref'];
                    let imageHtml = '<img src="' + img  + '" width="100%" />'
                    body = body.replace(imgref,imageHtml);
                }
                this.setState({html:body});

            })
            .catch((error)=>{
                console.log(error)
            })
    }
    render(){
        return(
            <View style={styles.outView}>
                <WebView
                    automaticallyAdjustContentInsets={true}
                    style={styles.webView}
                    source={{html: this.state.html, baseUrl: ""}}
                    decelerationRate="normal"

                ></WebView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    outView:{
        flex:1,
    }
})