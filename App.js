import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import * as firebase from "firebase";
import AuthStackScreen from "./src/routes/AuthStack";
import AppDrawerScreen from "./src/routes/AppDrawer";
import { AuthContext, AuthProvider } from "./src/context/AuthContext";

const firebaseConfig = {
  apiKey: "AIzaSyDJQC4pKOJdEqmbzlI51gRN9CIlXBkyE7M",
  authDomain: "deliver-it-2e954.firebaseapp.com",
  projectId: "deliver-it-2e954",
  storageBucket: "deliver-it-2e954.appspot.com",
  messagingSenderId: "335579030165",
  appId: "1:335579030165:web:1465422c9f8a77991ab19c",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

function App() {
  return (
    <AuthProvider>
      <AuthContext.Consumer>
        {(auth) => (
          <NavigationContainer>
            {auth.IsLoggedIn ? <AppDrawerScreen /> : <AuthStackScreen />}
          </NavigationContainer>
        )}
      </AuthContext.Consumer>
    </AuthProvider>
  );
}

export default App;
