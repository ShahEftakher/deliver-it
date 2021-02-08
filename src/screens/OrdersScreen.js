import React from "react";
import { View, Text } from "react-native";
import HeaderComponent from "../components/HeaderComponent";
import Order from "../components/Order";
import { Button } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";

const OrderScreen = (props) => {
  return (
    <View>
      <HeaderComponent />
      <Text>ORders</Text>
      <Order title={"Order 1"} location={"Mohammadpur"} userName={"Saad"} />
      <Order title={"order 2"} location={"Dhanmondi"} userName={"Afra"} />
      <View>
        <Button
          buttonStyle={{
            flexDirection: "row",
            bottom: -5,
            alignSelf: "stretch",
            justifyContent: "space-between",
          }}
          type="clear"
          icon={
            <MaterialIcons name="add-circle-outline" size={30} color="black" />
          }
        />
      </View>
    </View>
  );
};

export default OrderScreen;
