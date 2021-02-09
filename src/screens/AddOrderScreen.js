import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import { View, Text, StyleSheet } from "react-native";
import { Button, Card, Input } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const AddOrder = () => {
  return (
    <View style={styles.viewStyleOuter}>
      <HeaderComponent />
      <Card>
        <Card.Title>Welcome to BlogApp</Card.Title>
        <Card.Divider></Card.Divider>
        <Input
          placeholder="Item"
          leftIcon={
            <FontAwesome5 name="shopping-bag" size={24} color="black" />
          }
        ></Input>
        <Input
          placeholder="Pick up"
          leftIcon={<Entypo name="location-pin" size={24} color="black" />}
        ></Input>
        <Input
          placeholder="Password"
          leftIcon={
            <FontAwesome name="location-arrow" size={24} color="black" />
          }
        ></Input>
        <Button
          icon={<Entypo name="add-to-list" size={24} color="white" />}
          title="Add"
          type="solid"
        ></Button>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyleOuter: {
    flex: 1,
    backgroundColor: "#ffcc80",
    alignSelf: "baseline",
  },
});

export default AddOrder;
