import React from "react";
import { View } from "react-native";
import { Card, Avatar, Text } from "react-native-elements";
import { Entypo } from "@expo/vector-icons";
const Order = (props) => {
  console.log(props);
  return (
    <Card>
      <Card.Title>{props.title}</Card.Title>
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
          {props.userName}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Entypo name="location-pin" size={24} color="black" />
        <Text>{props.location}</Text>
      </View>
    </Card>
  );
};

export default Order;
