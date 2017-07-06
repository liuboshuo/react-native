/**
 * Created by liushuo on 17/7/6.
 */
import HomeScreen from './home'
import HomeDetailScreen from './homeDetail'
import {StackNavigator} from 'react-navigation'
const SimpleApp = StackNavigator({
    home:{screen:HomeScreen},
    homeDetail:{screen:HomeDetailScreen}
})

export default SimpleApp;