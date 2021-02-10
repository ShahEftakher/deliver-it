import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import OrderScreen from "./src/screens/OrdersScreen";
import OrderDeatils from "./src/screens/OrderDetailsScreen";
import AddOrder from "./src/screens/AddOrderScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import SignInScreen from "./src/screens/SignInScreen";
import ProfileScreen from "./src/screens/ProfileScreen";


const stack = createStackNavigator();
const orderDetailsStack=createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="orderDetails" component={ProfileScreen} options={{headerShown:false}}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
