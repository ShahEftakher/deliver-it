import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import OrderScreen from "./src/screens/OrdersScreen";

const orderStack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <orderStack.Navigator>
        <orderStack.Screen name="orders" component={OrderScreen} options={{headerShown:false}}/>
      </orderStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
