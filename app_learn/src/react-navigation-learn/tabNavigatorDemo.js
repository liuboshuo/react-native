/**
 * Created by liushuo on 17/7/6.
 */
import Tab1 from './tabs/oneTab'
import Tab2 from './tabs/twoTab'
import {TabNavigator} from 'react-navigation'
const TabNavigatorDemo = TabNavigator({
    tab1:{screen:Tab1},
    tab2:{screen:Tab2}
})

export default TabNavigatorDemo;