import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import OrderScreen from "./src/screens/OrdersScreen";
import OrderDeatils from "./src/screens/OrderDetailsScreen";
import AddOrder from "./src/screens/AddOrderScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import SignInScreen from "./src/screens/SignInScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import * as firebase from "firebase";

const stack = createStackNavigator();
const orderDetailsStack = createStackNavigator();

const firebaseConfig = {
  apiKey: "AIzaSyDJQC4pKOJdEqmbzlI51gRN9CIlXBkyE7M",
  authDomain: "deliver-it-2e954.firebaseapp.com",
  projectId: "deliver-it-2e954",
  storageBucket: "deliver-it-2e954.appspot.com",
  messagingSenderId: "335579030165",
  appId: "1:335579030165:web:1465422c9f8a77991ab19c",
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name="orderDetails"
          component={AddOrder}
          options={{ headerShown: false }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
