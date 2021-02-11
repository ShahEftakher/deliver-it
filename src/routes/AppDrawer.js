import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
// import AppStackScreen from './AppStack'
// import Profile from '../screens/Profile'
import OrderScreen from '../screens/OrdersScreen'
import ProfileScreen from '../screens/ProfileScreen'
import AppStackScreen from './AppStack'

const AppDrawer = createDrawerNavigator()

const AppDrawerScreen = () => {
  return (
    <AppDrawer.Navigator>
      <AppDrawer.Screen name='Home' component={AppStackScreen} />
    </AppDrawer.Navigator>
  )
}

export default AppDrawerScreen
