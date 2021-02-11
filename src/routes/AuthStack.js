import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SignUp from '../screens/SignUpScreen'
import SignIn from '../screens/SignInScreen'

const AuthStack = createStackNavigator()

const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator initialRouteName='SignIn'>
      <AuthStack.Screen
        name='SignIn'
        component={SignIn}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name='SignUp'
        component={SignUp}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  )
}

export default AuthStackScreen
