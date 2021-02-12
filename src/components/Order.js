import React from "react";
import { View } from "react-native";
import { Card, Avatar, Text } from "react-native-elements";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
const Order = (props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        let orderData = props.orderData;
        props.navigation.navigate("Order datils", { orderData });
      }}
    >
      <Card
        containerStyle={{
          borderRadius: 10,
          marginTop: 10,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 6,
          elevation: 7,
          marginBottom: 10,
        }}
      >
        <Card.Title>{props.orderData.data.item.toUpperCase()}</Card.Title>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Avatar
            containerStyle={{ backgroundColor: "#ffab91" }}
            rounded
            icon={{ name: "user", type: "font-awesome", color: "black" }}
            activeOpacity={1}
          />
          <Text h4Style={{ padding: 10 }} h4>
            {props.orderData.data.name.toUpperCase()}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Entypo name="location-pin" size={24} color="black" />
          <Text>{props.orderData.data.pickup}</Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

export default Order;
