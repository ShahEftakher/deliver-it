import React, { useState } from "react";
import HeaderComponent from "../components/HeaderComponent";
import { View, Text, StyleSheet } from "react-native";
import { Button, Card, Input } from "react-native-elements";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AuthContext } from "../context/AuthContext";
import * as firebase from "firebase";
import "firebase/firestore";

const AddOrder = ({ navigation }) => {
  const [item, setItem] = useState("");
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  return (
    <AuthContext.Consumer>
      {(auth) => (
        <View style={styles.viewStyleOuter}>
          <HeaderComponent navigation={navigation} />
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Card>
              <Card.Title>Welcome to BlogApp</Card.Title>
              <Card.Divider></Card.Divider>
              <Input
                placeholder="Item"
                leftIcon={
                  <FontAwesome5 name="shopping-bag" size={24} color="black" />
                }
                onChangeText={(currentInput) => {
                  setItem(currentInput);
                }}
              ></Input>
              <Input
                placeholder="Pick up"
                leftIcon={
                  <Entypo name="location-pin" size={24} color="black" />
                }
                onChangeText={(currentInput) => {
                  setPickup(currentInput);
                }}
              ></Input>
              <Input
                placeholder="Desitnation"
                leftIcon={
                  <FontAwesome name="location-arrow" size={24} color="black" />
                }
                onChangeText={(currentInput) => {
                  setDestination(currentInput);
                }}
              ></Input>
              <Button
                icon={<Entypo name="add-to-list" size={24} color="white" />}
                title="Add"
                type="solid"
                onPress={() => {
                  if (item && pickup && destination) {
                    firebase
                      .firestore()
                      .collection("orders")
                      .add({
                        userID: auth.CurrentUser.uid,
                        name: auth.CurrentUser.displayName,
                        item: item,
                        pickup: pickup,
                        destination: destination,
                        phoneNumber: auth.userInfo.contact,
                        pickedBy: "",
                        isPicked: false,
                        status: "Pending"
                      })
                      .then(() => {
                        alert("Order placed!");
                        navigation.navigate("Home Tab");
                      })
                      .catch((error) => {
                        alert(error);
                      });
                  }
                }}
              ></Button>
            </Card>
          </View>
        </View>
      )}
    </AuthContext.Consumer>
  );
};

const styles = StyleSheet.create({
  viewStyleOuter: {
    flex: 1,
    backgroundColor: "#ffcc80",
  },
});

export default AddOrder;
