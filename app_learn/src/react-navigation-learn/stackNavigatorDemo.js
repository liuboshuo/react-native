/**
 * Created by liushuo on 17/7/6.
 */
import TabNavigatorDemo from './tabNavigatorDemo'
import HomeScreen from './containers/home'
import HomeDetailScreen from './containers/homeDetail'
import {StackNavigator,TabNavigator} from 'react-navigation'
const SimpleApp = StackNavigator({
    home:{screen:TabNavigatorDemo},
    homeDetail:{screen:HomeDetailScreen}
})
export default SimpleApp;