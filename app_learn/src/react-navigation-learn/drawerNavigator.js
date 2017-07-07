/**
 * Created by liushuo on 17/7/7.
 */
import ONePage from './drawerNavigator/onePage'
import TwoPage from './drawerNavigator/twoPage'
import {DrawerNavigator} from 'react-navigation'
const DrawerNavigatorDemo = DrawerNavigator({
    onePage:{screen:ONePage},
    twoPage:{screen:TwoPage}
})

export default DrawerNavigatorDemo;