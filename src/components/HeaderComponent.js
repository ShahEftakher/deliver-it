import React from "react";
import { Header } from "react-native-elements";
import { EvilIcons } from "@expo/vector-icons";
import { AuthContext } from "../context/AuthContext";
import { auth } from "firebase";

const HeaderComponent = (props) => {
  return (
    <AuthContext.Consumer>
      {(auth) => (
        <Header
          leftComponent={{
            icon: "menu",
            color: "#fff",
            onPress: () => {
              props.navigation.toggleDrawer();
            },
          }}
          centerComponent={{
            text: "Deliver-it",
            style: { color: "#fff", fontSize: 17 },
          }}
          rightComponent={
            <EvilIcons
              name="user"
              size={34}
              color="white"
              onPress={() => {
                let userInfo=auth.userInfo;
                let currentUser=auth.currentUser;
                props.navigation.navigate("Profile", userInfo, currentUser);
              }}
            />
          }
          backgroundColor={"#ff0000"}
        />
      )}
    </AuthContext.Consumer>
  );
};

export default HeaderComponent;
