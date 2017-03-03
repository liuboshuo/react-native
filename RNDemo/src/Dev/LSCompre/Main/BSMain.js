/**
 * Created by liushuo on 17/3/3.
 */
import React , {Component} from 'react';
import {AppRegistry ,  Text , View, StyleSheet, Navigator, Dimensions, Image} from 'react-native';
import TabNavigator from 'react-native-tab-navigator'
import BSHome from './../Home/BSHome'
import BSShop from './../Shop/BSShop'
import BSMine from  './../Mine/BSMine'
import BSMore from  './../More/BSMore'



let {width,height} = Dimensions.get("window");

class BSMain extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectTabItem:"home"
        }
    }
    render(){
        return(
            <TabNavigator>
                {this.renderTabItem('home',"首页",'icon_tabbar_homepage','icon_tabbar_homepage_selected','首页',BSHome)}
                {this.renderTabItem('shop',"商家",'icon_tabbar_merchant_normal','icon_tabbar_merchant_selected','商家',BSShop)}
                {this.renderTabItem('mine','我的',"icon_tabbar_mine","icon_tabbar_mine_selected","我的",BSMine)}
                {this.renderTabItem('more',"更多",'icon_tabbar_misc','icon_tabbar_misc_selected','更多',BSMore)}
            </TabNavigator>
        )
    }
    renderTabItem(selectTabItemName,title,normalIconName,selectIconName,name,component){
        return (<TabNavigator.Item
            selected={this.state.selectTabItem === selectTabItemName}
            title={title}
            renderIcon={() => <Image source={{uri:normalIconName}} style={styles.tabIconStyle}/>}
            renderSelectedIcon={() => <Image source={{uri:selectIconName}} style={styles.tabIconStyle}/>}
            onPress={() => this.setState({ selectTabItem: selectTabItemName })}
            selectedTitleStyle={styles.selecttitleStyle}>
            <Navigator
                initialRoute={
                            {title:name, name:name,component:component}
                        }
                configureScene={()=>{
                            return Navigator.SceneConfigs.PushFromRight;
                        }}
                renderScene={(route, navigator)=>{
                            let Component = route.component;

                             return <Component {...route.passProps} navigator={navigator} />
                        }
                        }
            >

            </Navigator>
        </TabNavigator.Item>)
    }
}

export default BSMain;

const styles = StyleSheet.create({
    tabIconStyle:{
        width:30,
        height:30
    },
    selecttitleStyle:{
        color:'orange'
    }
})