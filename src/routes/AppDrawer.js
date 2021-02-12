import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import OrderScreen from "../screens/OrdersScreen";
import ProfileScreen from "../screens/ProfileScreen";
import AppStackScreen from "./AppStack";
import { AuthContext } from "../context/AuthContext";
import * as firebase from "firebase";

const AppDrawer = createDrawerNavigator();

const AppDrawerScreen = () => {
  return (
    <AuthContext.Consumer>
      {(auth) => (
        <AppDrawer.Navigator
          initialRouteName="Home"
          drawerStyle={{ backgroundColor: "#ffe6e6" }}
          drawerContent={(props) => {
            return (
              <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
                <DrawerItem
                  label="Logout"
                  onPress={() =>
                    firebase
                      .auth()
                      .signOut()
                      .then(() => {
                        auth.setIsLoggedIn(false);
                        auth.setCurrentUser({});
                        auth.setUserInfo({});
                      })
                      .catch((error) => {
                        alert(error);
                      })
                  }
                />
              </DrawerContentScrollView>
            );
          }}
        >
          <AppDrawer.Screen name="Home" component={AppStackScreen} />
        </AppDrawer.Navigator>
      )}
    </AuthContext.Consumer>
  );
};

export default AppDrawerScreen;
