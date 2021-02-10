import React from "react";
import { Header } from "react-native-elements";
import { EvilIcons } from '@expo/vector-icons'; 


const HeaderComponent = (props) => {
  return (
    <Header
      leftComponent={{ icon: "menu", color: "#fff" }}
      centerComponent={{ text: "Deliver-it", style: { color: "#fff" , fontSize:17} }}
      rightComponent={<EvilIcons name="user" size={34} color="white" />}
      backgroundColor={"#ff0000"}
    />
  );
};

export default HeaderComponent;
