import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import OrderScreen from "./src/screens/OrdersScreen";
import OrderDeatils from "./src/screens/OrderDetailsScreen";
import AddOrder from "./src/screens/AddOrderScreen";


const stack = createStackNavigator();
const orderDetailsStack=createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="orderDetails" component={AddOrder} options={{headerShown:false}}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
