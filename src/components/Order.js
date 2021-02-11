import React from "react";
import { View } from "react-native";
import { Card, Avatar, Text } from "react-native-elements";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
const Order = (props) => {
  console.log(props);
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate("Order datils");
      }}
    >
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
    </TouchableOpacity>
  );
};

export default Order;
