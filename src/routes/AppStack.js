import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import OrderScreen from "../screens/OrdersScreen";
import AddOrderScreen from "../screens/AddOrderScreen";
import ProfileScreen from "../screens/ProfileScreen";
import OrderDeatils from "../screens/OrderDetailsScreen";

const AppStack = createStackNavigator();

const AppStackScreen = () => {
  return (
    <AppStack.Navigator initialRouteName="Home Tab">
      <AppStack.Screen
        name="Home Tab"
        component={OrderScreen}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name="Add Order"
        component={AddOrderScreen}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name="Order datils"
        component={OrderDeatils}
        options={{ headerShown: false }}
      />
    </AppStack.Navigator>
  );
};

export default AppStackScreen;
