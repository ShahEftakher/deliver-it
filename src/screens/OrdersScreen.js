import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import HeaderComponent from "../components/HeaderComponent";
import Order from "../components/Order";


const OrderScreen = (props) => {
  return (
    <View style={styles.MainContainer}>
      <HeaderComponent />
      <Order title={"Order 1"} location={"Mohammadpur"} userName={"Saad"} />
      <Order title={"order 2"} location={"Dhanmondi"} userName={"Afra"} />
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.TouchableOpacityStyle}
      >
        <Image
          source={{
            uri:
              "https://reactnativecode.com/wp-content/uploads/2017/11/Floating_Button.png",
          }}
          style={styles.FloatingButtonStyle}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: "#ffcc80",
  },

  TouchableOpacityStyle: {
    position: "absolute",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    right: 30,
    bottom: 30,
  },

  FloatingButtonStyle: {
    resizeMode: "contain",
    width: 50,
    height: 50,
  },
});

export default OrderScreen;